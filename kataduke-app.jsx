import { useState, useEffect, useRef } from "react";

const TABS = ["📸 部屋分析", "🛍️ おすすめグッズ", "🗑️ ゴミリマインダー"];

const SAMPLE_PRODUCTS = [
  {
    name: "2段ハンガーラック",
    reason: "ハンガーパイプを2倍に増やせます",
    price: "¥2,980",
    img: "🪝",
    tag: "衣類収納",
  },
  {
    name: "引き出し式衣装ケース（3段）",
    reason: "床の服を全部収納できます",
    price: "¥3,480",
    img: "🗃️",
    tag: "衣類収納",
  },
  {
    name: "突っ張り棒＋ラック",
    reason: "壁面を縦に活用できます",
    price: "¥1,980",
    img: "📦",
    tag: "壁面収納",
  },
  {
    name: "引き出し用仕切りケース",
    reason: "下着・靴下が崩れず取り出しやすい",
    price: "¥890",
    img: "🧺",
    tag: "小物整理",
  },
  {
    name: "圧縮袋（布団・毛布用）",
    reason: "冬物をコンパクトに保管できます",
    price: "¥1,280",
    img: "🛏️",
    tag: "季節もの",
  },
  {
    name: "バッグ収納フック（扉裏用）",
    reason: "バッグを床から撤去できます",
    price: "¥680",
    img: "👜",
    tag: "バッグ収納",
  },
];

const TRASH_TYPES = ["燃えるゴミ", "燃えないゴミ", "資源ゴミ", "ペットボトル", "段ボール"];
const DAYS = ["月", "火", "水", "木", "金", "土", "日"];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [reminders, setReminders] = useState([
    { type: "燃えるゴミ", days: ["火", "金"], time: "20:00", enabled: true },
  ]);
  const [newReminder, setNewReminder] = useState({ type: "燃えるゴミ", days: [], time: "20:00" });
  const [toast, setToast] = useState(null);
  const fileRef = useRef();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImage(URL.createObjectURL(file));
    setAnalysis(null);
    setError(null);
  };

  const analyzeRoom = async () => {
    if (!imageFile) return;
    setAnalyzing(true);
    setError(null);

    try {
      const base64 = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result.split(",")[1]);
        r.onerror = () => rej(new Error("読み込み失敗"));
        r.readAsDataURL(imageFile);
      });

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: { type: "base64", media_type: imageFile.type, data: base64 },
                },
                {
                  type: "text",
                  text: `この部屋の写真を分析して、以下のJSON形式のみで返してください。前置きや説明は不要です。

{
  "score": 部屋の散らかり度（1〜10、10が最も散らかっている）,
  "summary": "部屋の状況を一言で（20文字以内）",
  "problems": ["問題点1", "問題点2", "問題点3"],
  "steps": [
    {"time": "15分", "action": "最初にやること"},
    {"time": "30分", "action": "次にやること"},
    {"time": "1時間", "action": "その次にやること"}
  ],
  "tip": "片付けの豆知識を一つ（40文字以内）",
  "products": ["おすすめ収納グッズ1", "おすすめ収納グッズ2"]
}`,
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();
      const text = data.content.map((i) => i.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setAnalysis(parsed);
    } catch (err) {
      setError("分析に失敗しました。もう一度お試しください。");
    } finally {
      setAnalyzing(false);
    }
  };

  const toggleDay = (day) => {
    setNewReminder((prev) => ({
      ...prev,
      days: prev.days.includes(day) ? prev.days.filter((d) => d !== day) : [...prev.days, day],
    }));
  };

  const addReminder = () => {
    if (newReminder.days.length === 0) {
      showToast("曜日を選択してください");
      return;
    }
    setReminders((prev) => [...prev, { ...newReminder, enabled: true }]);
    setNewReminder({ type: "燃えるゴミ", days: [], time: "20:00" });
    showToast("リマインダーを追加しました！");
  };

  const toggleReminder = (i) => {
    setReminders((prev) => prev.map((r, idx) => (idx === i ? { ...r, enabled: !r.enabled } : r)));
  };

  const deleteReminder = (i) => {
    setReminders((prev) => prev.filter((_, idx) => idx !== i));
    showToast("削除しました");
  };

  const scoreColor = (score) => {
    if (score <= 3) return "#4ade80";
    if (score <= 6) return "#facc15";
    return "#f87171";
  };

  return (
    <div style={{ fontFamily: "'Hiragino Sans', 'Yu Gothic', sans-serif", background: "#faf8f5", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "24px 20px 16px", color: "white" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <div style={{ fontSize: 13, opacity: 0.8, letterSpacing: 2, marginBottom: 4 }}>AI片付けアシスタント</div>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5 }}>かたづけAI ✨</div>
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>写真を撮るだけで片付けをサポート</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "white", borderBottom: "1px solid #ede9e4", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 480, margin: "0 auto", display: "flex" }}>
          {TABS.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                flex: 1,
                padding: "14px 4px",
                fontSize: 12,
                fontWeight: activeTab === i ? 700 : 400,
                color: activeTab === i ? "#667eea" : "#999",
                background: "none",
                border: "none",
                borderBottom: activeTab === i ? "2px solid #667eea" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 16px" }}>

        {/* TAB 1: 部屋分析 */}
        {activeTab === 0 && (
          <div>
            {/* Upload Area */}
            <div
              onClick={() => fileRef.current.click()}
              style={{
                border: image ? "none" : "2px dashed #c4b8f0",
                borderRadius: 16,
                padding: image ? 0 : "40px 20px",
                textAlign: "center",
                cursor: "pointer",
                background: image ? "transparent" : "#f5f0ff",
                marginBottom: 16,
                overflow: "hidden",
                transition: "all 0.3s",
              }}
            >
              {image ? (
                <div style={{ position: "relative" }}>
                  <img src={image} alt="部屋" style={{ width: "100%", borderRadius: 16, display: "block" }} />
                  <div style={{
                    position: "absolute", bottom: 12, right: 12,
                    background: "rgba(0,0,0,0.6)", color: "white",
                    borderRadius: 20, padding: "6px 12px", fontSize: 12,
                  }}>
                    📷 タップで変更
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>📸</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#667eea", marginBottom: 4 }}>部屋の写真をアップロード</div>
                  <div style={{ fontSize: 12, color: "#999" }}>タップして写真を選択</div>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleImage} style={{ display: "none" }} />

            {image && !analysis && (
              <button
                onClick={analyzeRoom}
                disabled={analyzing}
                style={{
                  width: "100%", padding: "16px", borderRadius: 12,
                  background: analyzing ? "#c4b8f0" : "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white", border: "none", fontSize: 16, fontWeight: 700,
                  cursor: analyzing ? "not-allowed" : "pointer", marginBottom: 16,
                  transition: "all 0.3s",
                }}
              >
                {analyzing ? "🔍 AIが分析中..." : "✨ AIで部屋を分析する"}
              </button>
            )}

            {error && (
              <div style={{ background: "#fff0f0", border: "1px solid #fca5a5", borderRadius: 12, padding: 16, marginBottom: 16, color: "#dc2626", fontSize: 14 }}>
                {error}
              </div>
            )}

            {/* Analysis Result */}
            {analysis && (
              <div>
                {/* Score */}
                <div style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 12, color: "#999", marginBottom: 2 }}>散らかり度</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a" }}>{analysis.summary}</div>
                    </div>
                    <div style={{
                      width: 64, height: 64, borderRadius: "50%",
                      background: `conic-gradient(${scoreColor(analysis.score)} ${analysis.score * 10}%, #f0ece8 0)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 0 0 4px white, 0 0 0 6px " + scoreColor(analysis.score) + "40",
                    }}>
                      <div style={{ background: "white", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, color: scoreColor(analysis.score) }}>
                        {analysis.score}
                      </div>
                    </div>
                  </div>

                  {/* Problems */}
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#667eea", marginBottom: 8 }}>⚠️ 問題点</div>
                  {analysis.problems.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f87171", marginTop: 6, flexShrink: 0 }} />
                      <div style={{ fontSize: 13, color: "#444" }}>{p}</div>
                    </div>
                  ))}
                </div>

                {/* Steps */}
                <div style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#667eea", marginBottom: 12 }}>🧹 片付け手順</div>
                  {analysis.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                      <div style={{ background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", borderRadius: 20, padding: "4px 10px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>
                        {step.time}
                      </div>
                      <div style={{ fontSize: 13, color: "#333", paddingTop: 3 }}>{step.action}</div>
                    </div>
                  ))}
                </div>

                {/* Tip */}
                <div style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)", borderRadius: 16, padding: 16, marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e", marginBottom: 4 }}>💡 豆知識</div>
                  <div style={{ fontSize: 13, color: "#78350f" }}>{analysis.tip}</div>
                </div>

                {/* CTA to products */}
                <button
                  onClick={() => setActiveTab(1)}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 12,
                    background: "linear-gradient(135deg, #f093fb, #f5576c)",
                    color: "white", border: "none", fontSize: 14, fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  🛍️ おすすめ収納グッズを見る →
                </button>
              </div>
            )}

            {!image && (
              <div style={{ background: "white", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 12 }}>📱 使い方</div>
                {["部屋の写真を撮る", "AIが自動で分析", "手順通りに片付ける", "おすすめグッズをチェック"].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <div style={{ fontSize: 13, color: "#555" }}>{s}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: おすすめグッズ */}
        {activeTab === 1 && (
          <div>
            <div style={{ fontSize: 13, color: "#999", marginBottom: 16 }}>AIが分析した部屋に合わせたおすすめグッズです</div>
            {SAMPLE_PRODUCTS.map((p, i) => (
              <div key={i} style={{ background: "white", borderRadius: 16, padding: 16, marginBottom: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ fontSize: 36, width: 56, height: 56, background: "#f5f0ff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {p.img}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <div style={{ background: "#ede9ff", color: "#667eea", borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{p.tag}</div>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>{p.reason}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#f5576c" }}>{p.price}</div>
                    <button
                      onClick={() => showToast("Amazonへ移動します（デモ）")}
                      style={{
                        background: "#FF9900", color: "white", border: "none",
                        borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                      }}
                    >
                      Amazonで見る →
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ textAlign: "center", fontSize: 11, color: "#bbb", marginTop: 8 }}>
              ※ 商品リンクはアフィリエイトリンクです
            </div>
          </div>
        )}

        {/* TAB 3: ゴミリマインダー */}
        {activeTab === 2 && (
          <div>
            {/* Existing reminders */}
            {reminders.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 12 }}>設定済みリマインダー</div>
                {reminders.map((r, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 16, padding: 16, marginBottom: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", opacity: r.enabled ? 1 : 0.5, transition: "opacity 0.3s" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 20 }}>🗑️</span>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{r.type}</div>
                          <div style={{ fontSize: 12, color: "#999" }}>前日 {r.time} に通知</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <button
                          onClick={() => toggleReminder(i)}
                          style={{
                            width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer",
                            background: r.enabled ? "#667eea" : "#ddd", position: "relative", transition: "background 0.3s",
                          }}
                        >
                          <div style={{
                            width: 18, height: 18, borderRadius: "50%", background: "white",
                            position: "absolute", top: 3, left: r.enabled ? 23 : 3, transition: "left 0.3s",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                          }} />
                        </button>
                        <button onClick={() => deleteReminder(i)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#f87171" }}>×</button>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {r.days.map((d) => (
                        <div key={d} style={{ background: "#ede9ff", color: "#667eea", borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 700 }}>{d}曜日</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add new reminder */}
            <div style={{ background: "white", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 16 }}>＋ リマインダーを追加</div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>ゴミの種類</div>
                <select
                  value={newReminder.type}
                  onChange={(e) => setNewReminder((p) => ({ ...p, type: e.target.value }))}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #e5e0da", fontSize: 14, background: "#faf8f5", color: "#333" }}
                >
                  {TRASH_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>収集曜日（複数選択可）</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {DAYS.map((d) => (
                    <button
                      key={d}
                      onClick={() => toggleDay(d)}
                      style={{
                        width: 40, height: 40, borderRadius: "50%", border: "2px solid",
                        borderColor: newReminder.days.includes(d) ? "#667eea" : "#e5e0da",
                        background: newReminder.days.includes(d) ? "#667eea" : "white",
                        color: newReminder.days.includes(d) ? "white" : "#666",
                        fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>通知時間（前日）</div>
                <input
                  type="time"
                  value={newReminder.time}
                  onChange={(e) => setNewReminder((p) => ({ ...p, time: e.target.value }))}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #e5e0da", fontSize: 14, background: "#faf8f5", color: "#333", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ background: "#f0f9ff", borderRadius: 10, padding: 12, marginBottom: 16, fontSize: 12, color: "#0369a1" }}>
                💬 設定した時間に「明日は{newReminder.type}の日です！5分だけ片付けましょう」と通知されます
              </div>

              <button
                onClick={addReminder}
                style={{
                  width: "100%", padding: "14px", borderRadius: 12,
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white", border: "none", fontSize: 15, fontWeight: 700, cursor: "pointer",
                }}
              >
                リマインダーを追加する
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
          background: "#1a1a1a", color: "white", borderRadius: 20, padding: "10px 20px",
          fontSize: 13, fontWeight: 600, zIndex: 100, whiteSpace: "nowrap",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}>
          {toast}
        </div>
      )}
    </div>
  );
}
