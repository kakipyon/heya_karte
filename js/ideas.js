// お部屋づくりアイデア - カテゴリデータ
const IDEAS = [
  {
    id: 'clothes',
    icon: '👗',
    title: '服・衣類の収納が追いつかない',
    sub: '手放す基準から収納術まで',
    column: `
      <div class="column-title">📖 まずは「手放す」ことから始めよう</div>
      <div class="column-h2">手放す基準を作る</div>
      <ul class="column-list">
        <li>3年間着ていない服</li>
        <li>サイズが合わない服</li>
        <li>着心地の悪い服</li>
      </ul>
      <div class="column-h2">「捨てる」以外の方法を選ぶ</div>
      <p class="column-text">ゴミ箱に入れることに抵抗がある場合は、以下の方法を検討してみましょう。</p>
      <ul class="column-list">
        <li>フリマアプリに出品</li>
        <li>リサイクルショップに持ち込む</li>
        <li>古着として寄付する</li>
      </ul>
    `,
    productGroups: [
      {
        title: 'ハンガーラック',
        products: [
          { name: 'ドウシシャ 2段ハンガーラック', sub: 'キャスター付き・頑丈', url: 'https://amzn.to/4a9pvcf' },
          { name: 'SONGMICS ハンガーラック', sub: 'キャスター付き', url: 'https://amzn.to/4vZ8mdM' },
        ]
      },
      {
        title: 'ハンガー',
        products: [
          { name: 'Amazonベーシック ハンガー 30本', sub: 'グレー', url: 'https://amzn.to/4uHsOi3' },
          { name: 'MIGABER ハンガー 20本', sub: 'ホワイト', url: 'https://amzn.to/4el5Mc6' },
        ]
      },
      {
        title: 'チェスト',
        products: [
          { name: 'アイリスオーヤマ チェスト 4段', sub: '', url: 'https://amzn.to/4esRyVb' },
          { name: '天馬 チェスト 4段', sub: '組み立て不要', url: 'https://amzn.to/4uHrT15' },
        ]
      },
      {
        title: 'ベッド下収納',
        products: [
          { name: 'Amazonベーシック 布製ベッド下収納', sub: '2個セット', url: 'https://amzn.to/4fVvhSu' },
          { name: 'アイリスオーヤマ 収納ケース', sub: 'クリア', url: 'https://amzn.to/3QrQvwW' },
        ]
      },
      {
        title: '圧縮袋',
        products: [
          { name: 'Amazonベーシック 衣類圧縮袋 15枚', sub: '掃除機不要・ハンドポンプ付き', url: 'https://amzn.to/4xIAmUE' },
          { name: 'WANALIT 圧縮袋 12枚', sub: 'コードレス充電式ポンプ付き', url: 'https://amzn.to/3Sxsk0A' },
        ]
      },
    ]
  },
  // 今後ここにカテゴリを追加していく
];

// アイデアタブを描画する関数
function renderIdeas() {
  const container = document.getElementById('ideas-container');
  if (!container) return;

  container.innerHTML = IDEAS.map(idea => `
    <div class="idea-card">
      <div class="idea-header" onclick="toggleIdea('${idea.id}')">
        <div>
          <div class="idea-icon">${idea.icon}</div>
          <div class="idea-title">${idea.title}</div>
          <div class="idea-sub">${idea.sub}</div>
        </div>
        <div class="idea-arrow" id="arrow-${idea.id}">▼</div>
      </div>
      <div class="idea-content" id="content-${idea.id}" style="display:none">
        <div class="column-section">${idea.column}</div>
        <div class="products-section">
          <div class="products-title">🛍️ 収納を整えるならこれ</div>
          ${idea.productGroups.map(group => `
            <div class="product-group-title">${group.title}</div>
            ${group.products.map(p => `
              <div class="idea-product-card" onclick="window.open('${p.url}','_blank')">
                <div class="idea-product-info">
                  <div class="idea-product-name">${p.name}</div>
                  <div class="idea-product-sub">${p.sub}</div>
                </div>
                <div class="idea-product-btn">Amazon →</div>
              </div>
            `).join('')}
          `).join('')}
          <div class="affiliate-note">※ 商品リンクはアフィリエイトリンクです（PR）</div>
        </div>
      </div>
    </div>
  `).join('') + '<div style="text-align:center;padding:20px;color:#ccc;font-size:13px">他のカテゴリも順次追加予定です</div>';
}

function toggleIdea(id) {
  const content = document.getElementById('content-' + id);
  const arrow = document.getElementById('arrow-' + id);
  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.textContent = '▲';
  } else {
    content.style.display = 'none';
    arrow.textContent = '▼';
  }
}

// ページ読み込み時に描画
document.addEventListener('DOMContentLoaded', renderIdeas);
