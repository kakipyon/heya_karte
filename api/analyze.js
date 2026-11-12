const convert = require('heic-convert');

// 記事のtags（js/ideas.js の CONCERNS）と同じキー。mindset はAIに選ばせず、フロント側でスコア5以上のとき付与する
const ALLOWED_CATEGORIES = ['clothes', 'small_items', 'small_space', 'paper', 'mold', 'kitchen', 'furniture', 'cable'];

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, mediaType } = req.body;

let finalImage = image;
let finalMediaType = mediaType;

if (mediaType === 'image/heic' || mediaType === 'image/heif') {
  const inputBuffer = Buffer.from(image, 'base64');
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 0.7
  });
  finalImage = outputBuffer.toString('base64');
  finalMediaType = 'image/jpeg';
}

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: finalMediaType, data: finalImage }
            },
            {
              type: 'text',
              text: 'もしこの画像が部屋・クローゼットの写真でない場合は、必ず以下の形式のみで返してください。\n{"error":"部屋の写真をアップロードしてください"}\n\nこの部屋の写真を分析してください。散らかり度は以下の基準で厳密に採点してください。\n1-2: 物がほぼ床になく、生活感がない状態\n3-4: 多少の物はあるが、床の大部分が見えている\n5-6: 床の半分程度に物が散乱している\n7-8: 床のほとんどが物で覆われ、足の踏み場が限られる\n9-10: 床がほぼ見えず、移動に支障がある状態\n\ncategoriesには、写真から読み取れる悩みに当てはまるものを次のリストから選んで配列で返してください。複数可（最大3つ）、当てはまるものがなければ空配列。リスト以外の値は使わないでください。\nclothes: 服・衣類の収納が足りない、または散らかっている\nsmall_items: 小物・鞄・靴・アクセサリー・ぬいぐるみ・推し活グッズなどの収納\nsmall_space: 部屋が狭い、隙間やデッドスペースがある\npaper: 書類・郵便物・机まわりの散らかり\nmold: カビ・湿気が気になる\nkitchen: キッチン周りの散らかり\nfurniture: 家具の配置やサイズが合っていない\ncable: ケーブル・配線の乱れ\n\n必ず以下のJSON形式のみで返してください。JSONの前後に文字を入れないでください。\n{"score":7,"summary":"服が床に散乱","problems":["床に衣類が多い","収納が不足","通路が塞がれている"],"categories":["clothes","small_items"],"steps":[{"time":"15分","action":"ゴミだけ捨てる"},{"time":"30分","action":"服をハンガーにかける"},{"time":"1時間","action":"床のものを収納に移す"}],"tip":"ハンガーは同じ向きに揃えると取り出しやすくなります"}'
            }
          ]
        }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(500).json({ error: 'API error', detail: errText });
    }

    const data = await response.json();
    const text = data.content.map(i => i.text || '').join('');
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      return res.status(500).json({ error: 'JSON not found in response' });
    }
    const result = JSON.parse(match[0]);
    if (!result.error) {
      // AIが想定外の値を返しても記事の振り分けが壊れないよう、許可リストで絞る
      result.categories = Array.isArray(result.categories)
        ? result.categories.filter(c => ALLOWED_CATEGORIES.includes(c)).slice(0, 3)
        : [];
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message, detail: String(err) });
  }
} 
