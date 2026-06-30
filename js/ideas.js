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
        <div class="product-group-title">${group.title}</div>
        ${group.note ? `<p class="product-group-note">${group.note}</p>` : ''}
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
