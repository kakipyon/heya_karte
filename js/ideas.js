// お部屋づくりアイデア - カテゴリデータ
const IDEAS = [
  {
    id: 'clothes',
    icon: '👗',
    title: '服・衣類の収納が追いつかない',
    sub: '手放す基準から収納術まで',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    column: `
      <div class="column-title">手放す基準を作る</div>
      <div class="column-h2">⚫︎ 3年間着ていない服</div>
      <p class="column-text">今日何着よう？と考えて選ばないなら、自分の中で理由があるはずです。</p>
      <div class="column-h2">⚫︎ サイズが合わない服</div>
      <p class="column-text">「痩せたら着る」は要注意。もし痩せたら、その時にはまた新しい服が欲しくなりますよね？</p>
      <div class="column-h2">⚫︎ 着心地の悪い服</div>
      <p class="column-text">チクチクする、生地が合わないなど、肌に合わない服は思い切ってやめましょう。</p>
      <div class="column-title">「捨てる」以外の方法を選ぶ</div>
      <div class="column-h2">⚫︎ 捨てることに抵抗がある場合は、以下の方法を検討してみましょう</div>
      <ul class="column-list">
        <li>フリマアプリに出品</li>
        <li>リサイクルショップに持ち込む</li>
        <li>古着として寄付する</li>
      </ul>
    `,
  
    productGroups: [
      {
        title: 'ハンガーラック',
        note: 'お気に入りの洋服を掛けて収納できる便利アイテム。クローゼットがなくても、見せる収納としておしゃれに使える。',
        products: [
          { name: 'ドウシシャ 2段ハンガーラック', sub: 'キャスター付き・頑丈', url: 'https://amzn.to/4a9pvcf' },
          { name: 'SONGMICS ハンガーラック', sub: 'キャスター付き', url: 'https://amzn.to/4vZ8mdM' },
        ]
      },
      {
        title: 'ハンガー',
        note: 'ハンガーラックと合わせて揃えるのがおすすめ。素材や色を統一すると、見た目の統一感がアップ。',
        products: [
          { name: 'Amazonベーシック ハンガー 30本', sub: 'グレー', url: 'https://amzn.to/4uHsOi3' },
          { name: 'MIGABER ハンガー 20本', sub: 'ホワイト', url: 'https://amzn.to/4el5Mc6' },
        ]
      },
      {
        title: 'チェスト',
        note: '洋服を畳んでしまうのに便利。Tシャツやニットなど、干すと型崩れしやすい衣類の収納にぴったり。',
        products: [
          { name: 'アイリスオーヤマ チェスト 4段', sub: '', url: 'https://amzn.to/4esRyVb' },
          { name: '天馬 チェスト 4段', sub: '組み立て不要', url: 'https://amzn.to/4uHrT15' },
        ]
      },
      {
        title: 'ベッド下収納',
        note: 'デッドスペースを有効活用できる収納アイテム。購入前にベッド下の高さを確認しておくのが必須。',
        products: [
          { name: 'Amazonベーシック 布製ベッド下収納', sub: '2個セット', url: 'https://amzn.to/4fVvhSu' },
          { name: 'アイリスオーヤマ 収納ケース', sub: 'クリア', url: 'https://amzn.to/3QrQvwW' },
        ]
      },
      {
        title: '圧縮袋',
        note: 'オフシーズンの衣類をコンパクトに収納できる便利グッズ。衣替えのタイミングでまとめて使うのがおすすめ。',
        products: [
          { name: 'Amazonベーシック 衣類圧縮袋 15枚', sub: '掃除機不要・ハンドポンプ付き', url: 'https://amzn.to/4xIAmUE' },
          { name: 'WANALIT 圧縮袋 12枚', sub: 'コードレス充電式ポンプ付き', url: 'https://amzn.to/3Sxsk0A' },
        ]
      },
    ],
  },
  {
    id: 'floor',
    icon: '🛋️',
    title: '床にものが散乱している',
    sub: '定位置を作る考え方',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    column: `
      <div class="column-title">※ なぜ床に物が散乱するのか</div>
      <div class="column-h2">⚫︎ 定位置がないから</div>
      <p class="column-text">床に物が散らかる一番の原因は「定位置がないこと」。置く場所が決まっていないと、床が一番楽な置き場所になってしまう。</p>
      <div class="column-title">※ 定位置を作る2つの方法</div>
      <div class="column-h2">⚫︎ 物を減らす</div>
      <p class="column-text">定位置がない＝今の収納に対して物が多すぎるサイン。まず手放せるものがないか見直してみよう。</p>
      <div class="column-h2">⚫︎ 収納を増やす</div>
      <p class="column-text">どうしても減らしたくない物には、置き場所を作ることで解決できる。ただし収納を買う前に、今ある空きスペースを確認してから。</p>
      <div class="column-title">※ 定位置を決めるコツ</div>
      <div class="column-h2">⚫︎ 「使う場所の近く」に置き場を作る</div>
      <p class="column-text">リモコンはソファの横、カバンは玄関の近くなど、使う場所のそばに定位置を作ると自然と戻せるようになる。</p>
      <div class="column-h2">⚫︎ 戻すのが楽な仕組みにする</div>
      <p class="column-text">蓋あり収納より蓋なし、引き出しより棚の方が戻すハードルが下がる。「めんどくさくない」が続けるコツ。</p>
      <div class="column-h2">⚫︎ 床に直置きしないルールを作る</div>
      <p class="column-text">「床には何も置かない」と決めるだけで意識が変わる。</p>
      <div class="column-title">※ まず今日できること</div>
      <div class="column-h2">⚫︎ 床のものを全部拾って分類する</div>
      <p class="column-text">まず全部拾って「いる・いらない・置き場所が必要」の3つに分けてみよう。</p>
      <div class="column-h2">⚫︎ 「ここに置く」と決めるだけでOK</div>
      <p class="column-text">収納グッズは後から。まず定位置を決めることが先。</p>
    `,
    productGroups: [
      {
        title: 'カゴ・ボックス',
        note: '定位置作りに最適な収納アイテム。蓋なしで取り出しやすく、戻すハードルが低いのがポイント。',
        products: [
          { name: 'IKEA KALLAX インサート', sub: 'ボックス収納', url: 'https://www.ikea.com/jp/ja/p/kallax-insert-with-2-drawers-white-90278167/' },
          { name: 'tower 収納ボックス', sub: 'スタッキング可能', url: 'https://amzn.to/3QrQvwW' },
        ]
      },
      {
        title: 'フック・壁面収納',
        note: 'カバンや上着など「とりあえず置きがち」なものの定位置作りに。壁を使えば床が広くなる。',
        products: [
          { name: '山崎実業 マグネットフック', sub: '玄関・冷蔵庫に', url: 'https://amzn.to/3Sxsk0A' },
          { name: 'DRAW A LINE 壁面収納', sub: 'つっぱり棒タイプ', url: 'https://amzn.to/4xIAmUE' },
        ]
      },
    ]
  },
  // 今後ここにカテゴリを追加していく
];

// 一覧を描画
function renderIdeas() {
  const container = document.getElementById('ideas-container');
  if (!container) return;
  container.innerHTML = IDEAS.map(idea => `
    <div class="idea-card" onclick="openIdea('${idea.id}')">
      <div class="idea-header">
        <div>
          <div class="idea-icon">${idea.icon}</div>
          <div class="idea-title">${idea.title}</div>
          <div class="idea-sub">${idea.sub}</div>
        </div>
        <div class="idea-arrow">›</div>
      </div>
    </div>
  `).join('') + '<div style="text-align:center;padding:20px;color:#ccc;font-size:13px">他のカテゴリも順次追加予定です</div>';
}

// 詳細ページを開く
function openIdea(id) {
  const idea = IDEAS.find(i => i.id === id);
  if (!idea) return;

  const detail = document.getElementById('idea-detail');
  const body = document.getElementById('idea-detail-body');

  body.innerHTML = `
    ${idea.image ? `<img src="${idea.image}" class="idea-detail-image" alt="${idea.title}">` : ''}
    <div class="idea-detail-header">
      <div class="idea-detail-icon">${idea.icon}</div>
      <div class="idea-detail-title">${idea.title}</div>
      <div class="idea-detail-sub">${idea.sub}</div>
    </div>
    <div class="column-section">${idea.column}</div>
    <div class="action-btn-section">
        <button class="action-btn" onclick="switchTab(0)">📷 部屋を撮って片付けをはじめる</button>
      </div>
      <div class="warning-box">
        <div class="warning-title">⚠️ 新しくものを買う前に確認</div>
        <p class="warning-text">置く場所がない場合、物を増やす前に手放してから。</p>
        <p class="warning-text">買う前には必ずサイズを測り、ゴミを買わないように。</p>
      </div>
    <div class="products-section">
      <div class="products-title">🛍️ 収納を整えるならこれ</div>
      ${idea.productGroups.map(group => `
        <div class="product-group"><div class="product-group-title">${group.title}</div>
        ${group.note ? `<p class="product-group-note">${group.note}</p>` : ''}
        ${group.products.map(p => `
          <div class="idea-product-card" onclick="window.open('${p.url}','_blank')">
            <div class="idea-product-info">
              <div class="idea-product-name">${p.name}</div>
              <div class="idea-product-sub">${p.sub}</div>
            </div>
            <div class="idea-product-btn">Amazon →</div>
          </div>
        `).join('')}</div>
      `).join('')}
      <div class="affiliate-note">※ 商品リンクはアフィリエイトリンクです（PR）</div>
    </div>
  `;

  detail.style.display = 'block';
  history.pushState({ ideaId: id }, '', '');
  window.scrollTo(0, 0);
  // 他の記事一覧を追加
  const others = IDEAS.filter(i => i.id !== id);
  if (others.length > 0) {
    body.innerHTML += `
      <div class="other-ideas-section">
        <div class="other-ideas-title">他の記事を読む</div>
        ${others.map(o => `
          <div class="idea-card" onclick="openIdea('${o.id}')">
            <div class="idea-header">
              <div>
                <div class="idea-icon">${o.icon}</div>
                <div class="idea-title">${o.title}</div>
                <div class="idea-sub">${o.sub}</div>
              </div>
              <div class="idea-arrow">›</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// 戻るボタン対応
window.addEventListener('popstate', function(e) {
  const detail = document.getElementById('idea-detail');
  if (detail && detail.style.display === 'block') {
    detail.style.display = 'none';
    window.scrollTo(0, 0);
  }
});

document.addEventListener('DOMContentLoaded', renderIdeas);
