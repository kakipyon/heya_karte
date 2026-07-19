// お部屋づくりアイデア - カテゴリデータ
const IDEAS = [
 {
    id: 'danshari',
    icon: '✨',
    title: '断捨離・片付けのメリットを知ろう',
    sub: '片付けが変える、毎日の気持ち',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80',
    column: `
      <div class="column-title">断捨離とは</div>
      <div class="column-h2">⚫︎「断・捨・離」それぞれの意味</div>
      <p class="column-text">「断」は新しいものを断つ、「捨」は不要なものを捨てる、「離」はものへの執着から離れること。物を減らすだけでなく、ものとの向き合い方を変える考え方。</p>
      <div class="column-title">片付けによる心理変化</div>
      <div class="column-h2">⚫︎部屋が片付くと気持ちが楽になる</div>
      <p class="column-text">散らかった部屋は視覚的なノイズが多く、無意識にストレスをかけている。片付けるだけで頭の中もすっきりする。</p>
      <div class="column-h2">⚫︎自己肯定感が上がる</div>
      <p class="column-text">「やった」という達成感が積み重なると、自分への自信につながる。小さな片付けでも十分。</p>
      <div class="column-title">片付けのメリット</div>
      <div class="column-h2">⚫︎探し物がなくなる</div>
      <p class="column-text">定位置が決まっていれば、どこに何があるか把握できる。毎朝の「あれどこ？」がなくなる。</p>
      <div class="column-h2">⚫︎掃除がしやすくなる</div>
      <p class="column-text">床に物がなければ掃除機をかけるのも拭き掃除も一瞬で終わる。</p>
      <div class="column-h2">⚫︎お金の無駄遣いが減る</div>
      <p class="column-text">何を持っているか把握できると、同じものを二重買いしなくなる。必要なものだけに囲まれた生活になる。</p>
    `,
    productGroups: []
  },
  {
    id: 'clothes',
    icon: '👗',
    title: '服・衣類の収納が追いつかない',
    sub: '手放す基準から収納術まで',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    column: `
      <div class="column-title">手放す基準を作る</div>
      <div class="column-h2">⚫︎２年間着ていない服</div>
      <p class="column-text">今日何着よう？と考えてその服を選ばないなら、自分の中で理由があるはず。</p>
      <div class="column-h2">⚫︎サイズが合わない服</div>
      <p class="column-text">「痩せたら着る」は要注意。もし痩せたら、その時にはまた新しい服が欲しくなるかも？</p>
      <div class="column-h2">⚫︎着心地の悪い服</div>
      <p class="column-text">チクチクする、生地が合わないなど、肌に合わない服は思い切って手放してみて。</p>
      <div class="column-title">「捨てる」以外の方法を選ぶ</div>
      <div class="column-h2">⚫︎捨てることに抵抗がある場合は、以下の方法を検討してみては</div>
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
          { name: 'ドウシシャ 2段ハンガーラック', sub: '工具不要で組立可能 夏服約68着収納可能', url: 'https://amzn.to/4a9pvcf' },
          { name: 'SONGMICS ハンガーラック', sub: 'フレキシブル調整 組立簡単', url: 'https://amzn.to/4vZ8mdM' },
        ]
      },
      {
        title: 'ハンガー',
        note: 'ハンガーラックと合わせて揃えるのがおすすめ。素材や色を統一すると、見た目の統一感がアップ。',
        products: [
          { name: 'Amazonベーシック ハンガー 30本', sub: 'ベルベット素材 超薄型', url: 'https://amzn.to/4uHsOi3' },
          { name: 'MIGABER ハンガー 20本', sub: '滑り止めPVCコーティング', url: 'https://amzn.to/4el5Mc6' },
        ]
      },
      {
        title: 'チェスト',
        note: '洋服を畳んでしまうのに便利。Tシャツやニットなど、干すと型崩れしやすい衣類の収納にぴったり。',
        products: [
          { name: 'アイリスオーヤマ チェスト 4段', sub: '豊富なサイズ展開 組み立て不要', url: 'https://amzn.to/4esRyVb' },
          { name: '天馬 チェスト 4段', sub: '豊富なサイズ展開 組み立て不要 安心ロック機能', url: 'https://amzn.to/4uHrT15' },
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
      <div class="column-title">なぜ床に物が散乱するのか</div>
      <div class="column-h2">⚫︎定位置がないから</div>
      <p class="column-text">床に物が散らかる一番の原因は「定位置がないこと」。置く場所が決まっていないと、床が一番楽な置き場所になってしまう。</p>
      <div class="column-title">定位置を作る2つの方法</div>
      <div class="column-h2">⚫︎物を減らす</div>
      <p class="column-text">定位置がない＝今の収納に対して物が多すぎるサイン。まず手放せるものがないか見直してみよう。</p>
      <div class="column-h2">⚫︎収納を増やす</div>
      <p class="column-text">どうしても減らしたくない物には、置き場所を作ることで解決できる。ただし収納を買う前に、今ある空きスペースを確認してから。</p>
      <div class="column-title">定位置を決めるコツ</div>
      <div class="column-h2">⚫︎「使う場所の近く」に置き場を作る</div>
      <p class="column-text">リモコンはソファの横、カバンは玄関の近くなど、使う場所のそばに定位置を作ると自然と戻せるようになる。</p>
      <div class="column-h2">⚫︎戻すのが楽な仕組みにする</div>
      <p class="column-text">蓋あり収納より蓋なし、引き出しより棚の方が戻すハードルが下がる。「めんどくさくない」が続けるコツ。</p>
      <div class="column-h2">⚫︎床に直置きしないルールを作る</div>
      <p class="column-text">「床には何も置かない」と決めるだけで意識が変わる。</p>
      <div class="column-title">まず今日できること</div>
      <div class="column-h2">⚫︎床のものを全部拾って分類する</div>
      <p class="column-text">まず全部拾って「いる・いらない・置き場所が必要」の3つに分けてみよう。</p>
      <div class="column-h2">⚫︎「ここに置く」と決めるだけでOK</div>
      <p class="column-text">収納グッズは後から。まず定位置を決めることが先。</p>
    `,
    productGroups: [
      {
        title: '収納バスケット',
        note: '定位置作りに最適な収納アイテム。蓋なしで取り出しやすく、戻すハードルが低いのがポイント。',
        products: [
          { name: '不二貿易 折りたたみコンテナ かご', sub: 'ブラック・取っ手付き', url: 'https://amzn.to/4bqRpkm' },
          { name: 'X XUNTAO 収納ボックス 折り畳み', sub: '蓋付き・積み重ね可能', url: 'https://amzn.to/4az6BLY' },
          { name: '山善 どこでも収納ボックス 3個セット', sub: 'カラーボックス対応', url: 'https://amzn.to/4aURgWr' },
        ]
      },
      {
        title: 'フック・壁面収納',
        note: 'カバンや上着など「とりあえず置きがち」なものの定位置作りに。壁を使えば床が広くなる。',
        products: [
          { name: '山崎実業 ジョイントハンガー リングス', sub: 'ブラック', url: 'https://amzn.to/4y0uhD2' },
          { name: 'umbra フリップフック 壁掛けフック', sub: 'シャインホワイト', url: 'https://amzn.to/3RfLsQw' },
          { name: '萩原 突っ張りラック 壁面収納', sub: '木目調スリム・ブラウン', url: 'https://amzn.to/44Jt4CB' },
        ]
      },
    ]
  },
  {
    id: 'oshi',
    icon: '🌟',
    title: '推し活・見せる収納がしたい',
    sub: '推し達がもっと輝く場所を作ろう',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    column: `
      <p class="column-text">あなたのお部屋だから、推し達がもっと輝く場所であってほしい！まずは推しの区画にするために場所を用意。</p>
      <div class="column-title">※ まず「推し区画」の場所を決める</div>
      <div class="column-h2">⚫︎ 専用スペースを作ることが大切</div>
      <p class="column-text">推し達を飾るには、まず「ここが推し区画」と決める場所が必要。棚一段・壁一面・デスクの一角など、どこでもOK。スペースを決めることで、それ以外の場所に広がるのを防げる。</p>
      <div class="column-title">※ 見せる収納のコツ</div>
      <div class="column-h2">⚫︎ 高さをそろえると美しく見える</div>
      <p class="column-text">グッズの高さをある程度そろえると、まとまりが出てスッキリ見える。アクリルスタンドや小さなイーゼルを使うと高さ調整がしやすい。</p>
      <div class="column-h2">⚫︎ 色でまとめるとさらにおしゃれに</div>
      <p class="column-text">推しのイメージカラーに合わせた背景や小物を添えると、一気に「魅せる収納」になる。推しカラーの布やポスターを背景に敷いたり、LEDテープライトで推しカラーに染めるのもおすすめ。</p>
      <div class="column-title">※ グッズが増えすぎたら</div>
      <div class="column-h2">⚫︎ 「今推してるもの」だけ飾る</div>
      <p class="column-text">全部飾ろうとすると収拾がつかなくなる。今一番推しているものだけ飾って、他はボックスに収納するのがおすすめ。</p>
    `,
    productGroups: [
      {
        title: 'ぬいぐるみ収納',
        note: 'ハンモック式なら壁に取り付けるだけで、ぬいぐるみをおしゃれに飾れる。床置きしなくて済むので部屋もスッキリ。',
        products: [
          { name: 'Honeyera ぬいぐるみ収納ハンモック', sub: 'ハンモック式', url: 'https://amzn.to/4v87GC1' },
        ]
      },
      {
        title: 'フィギュア・ディスプレイケース',
        note: 'ホコリから守りながらおしゃれに飾れる。アクリルケースは透明で中身が見えるのがポイント。',
        products: [
          { name: 'OOLTAKU フィギュアケース', sub: '組み立て式アクリルケース', url: 'https://amzn.to/4fgS8XM' },
          { name: '不二貿易 コレクションケース 3段', sub: 'ホワイト・強化ガラス', url: 'https://amzn.to/4eFJMsw' },
        ]
      },
      {
        title: '棚・ラック',
        note: '推し区画を作るための土台。大容量でグッズをまとめて飾れる。',
        products: [
          { name: 'LOWYA 推し活グッズ収納 コミックラック', sub: 'スリム・大容量・ホワイト', url: 'https://amzn.to/4wmYV7Q' },
          { name: 'チチロバ ワイヤー収納棚', sub: '大容量・組立簡単', url: 'https://amzn.to/44vvxRj' },
        ]
      },
      {
        title: '小物・缶バッジ収納',
        note: '缶バッジやキーホルダーなど細かいグッズの収納に。まとめて飾れるのでコレクションが映える。',
        products: [
          { name: 'Leap Raupe キーホルダー めじるしチャーム 120個掛け', sub: '卓上タイプ', url: 'https://amzn.to/4xYyTJP' },
          { name: 'VENGOO 缶バッジカバー 収納ファイル', sub: '缶バッジ・キーホルダー対応', url: 'https://amzn.to/4vHD1fJ' },
        ]
      },
      {
        title: '照明',
        note: '推しカラーのライトで区画を演出。RGB対応なのでどんな推しカラーにも対応できる。',
        products: [
          { name: 'Lepro LEDテープライト 5m RGB', sub: '間接照明・テープライト', url: 'https://amzn.to/4p79iKP' },
        ]
      },
    ]
  },
  {
    id: 'sukima',
    icon: '📐',
    title: '隙間収納を活用したい',
    sub: 'この隙間どうにかしたい…を解決',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    column: `
      <p class="column-text">この隙間どうにかしたい、、そんな悩みはありませんか？実は隙間こそ、使い方次第で便利な収納スペースになる。</p>
      <div class="column-title">隙間収納が活躍する場所</div>
      <div class="column-h2">⚫︎冷蔵庫・洗濯機の横</div>
      <p class="column-text">キッチンや洗面所の数センチの隙間に、スリムワゴンを入れるだけで収納量が大幅にアップする。</p>
      <div class="column-h2">⚫︎デスクや棚の隙間</div>
      <p class="column-text">本や書類など縦に収納できるものに向いている。薄型ラックを入れるとデッドスペースが活きる。</p>
      <div class="column-h2">⚫︎トイレ・洗面台の横</div>
      <p class="column-text">ストック品や掃除グッズの置き場として最適。取り出しやすいキャスター付きがおすすめ。</p>
      <div class="column-title">隙間収納を選ぶポイント</div>
      <div class="column-h2">⚫︎まず幅を測ってから買う</div>
      <p class="column-text">隙間収納は数センチの差で入らないことがある。買う前に必ず幅・奥行き・高さを測ろう。</p>
      <div class="column-h2">⚫︎キャスター付きが便利</div>
      <p class="column-text">掃除のときに動かせるので、キャスター付きがおすすめ。奥の掃除もラクになる。</p>
      <div class="column-title">何を入れる？</div>
      <div class="column-h2">⚫︎ストック品・掃除用具など出番が少ないものに向いている</div>
      <p class="column-text">隙間収納は取り出す頻度が低いものと相性がいい。シャンプーの詰め替えや掃除グッズなど、まとめ買いしたストック品の置き場として活躍する。</p>
      <div class="column-h2">⚫︎毎日使うものは手前に置こう</div>
      <p class="column-text">毎日使うものは取り出しやすい場所に置くのが基本。隙間収納に詰め込みすぎないのがコツ。</p>
    `,
    productGroups: [
      {
        title: 'スリム収納ワゴン',
        note: 'キャスター付きで移動が簡単。冷蔵庫横・洗面所の隙間にぴったり。幅13〜14cmの超スリムタイプ。',
        products: [
          { name: 'SPACEKEEPER キッチンワゴン 3段', sub: '工具不要・キャスター付き・幅13cm', url: 'https://amzn.to/4uLqCpU' },
          { name: 'ライクイット キッチン収納 4段', sub: '組立済み・キャスター付き・幅14cm', url: 'https://amzn.to/4vnmXje' },
        ]
      },
      {
        title: 'スリム棚・ラック',
        note: '幅30cmのスリムタイプ。本・書類・洗面用品など縦に収納したいものに最適。',
        products: [
          { name: 'SoBuy 洗面所 隙間収納 ランドリーラック', sub: '幅30cm・組立時プラスドライバー必須', url: 'https://amzn.to/4wqOald' },
          { name: 'ぼん家具 本棚 薄型ラック', sub: '幅30cm・木製・組立時ドライバー＆ハンマー必要', url: 'https://amzn.to/4gVOVhw' },
        ]
      },
    ]
  },
  {
    id: 'noassembly',
    icon: '📦',
    title: '組立不要の家具がほしい',
    sub: '届いてすぐ使える家具をご紹介',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    column: `
      <p class="column-text">めんどくさい！得意じゃない！一人じゃできない！そんなお悩みの方に届いてすぐ使える家具をご紹介。</p>
      <div class="column-title">組立家具のデメリット</div>
      <div class="column-h2">⚫︎買ったはいいが箱のまま放置</div>
      <p class="column-text">説明書を広げて、パーツを確認して、工具を用意して…それだけでやる気が失せることも。組立不要ならその日のうちに使いはじめられる。</p>
      <div class="column-title">組立不要家具のメリット</div>
      <div class="column-h2">⚫︎届いてすぐ使える</div>
      <p class="column-text">開梱したらそのまま設置できる。組立の手間がないので、買った日に部屋が片付く。</p>
      <div class="column-h2">⚫︎引越しのときも楽</div>
      <p class="column-text">折りたたみ式や軽量タイプなら引越し時の解体・再組立も不要。一人暮らしの強い味方。</p>
      <div class="column-h2">⚫︎一人暮らしでも安心</div>
      <p class="column-text">重い板を持ち上げたり、二人がかりで作業したりする必要がない。一人でも安全に設置できる。</p>
    `,
    productGroups: [
      {
        title: '収納ワゴン',
        note: '折りたたみ式で組立不要。使わないときはコンパクトに収納できる。',
        products: [
          { name: 'Hamone キッチンワゴン スチールラック 3段', sub: '折りたたみ式・組立不要', url: 'https://amzn.to/4y450Yv' },
        ]
      },
      {
        title: 'カラーボックス・本棚',
        note: '組立不要で届いてすぐ使える本棚。リビング・寝室・子供部屋にも。',
        products: [
          { name: 'ぼん家具 カラーボックス 木製本棚', sub: '収納ボックス・組立不要', url: 'https://amzn.to/4eX9K9T' },
        ]
      },
      {
        title: 'チェスト',
        note: '組立済みで届くチェスト。引き出しがすぐ使えるので衣類収納にそのまま活用できる。',
        products: [
          { name: '天馬 チェスト 4段タンス', sub: '組立不要・組立済み', url: 'https://amzn.to/4p8TbfU' },
        ]
      },
      {
        title: 'シューズボックス',
        note: '3秒で組み立て完了の透明シューズボックス。靴の中身が見えるので取り出しやすい。',
        products: [
          { name: 'AP LAB 折りたたみシューズボックス', sub: '3秒組立・透明', url: 'https://amzn.to/4vM1WPg' },
        ]
      },
    ]
  },
  {
    id: 'horyubox',
    icon: '🧺',
    title: '保留ボックスのすすめ（捨てるか迷ったら）',
    sub: '迷ったら捨てなくていい、一度保管しよう',
    image: 'https://images.unsplash.com/photo-1586892478025-2b5472316994?w=600&q=80',
    column: `
      <p class="column-text">片付けをしていると必ず出てくる「捨てるか迷うもの」。そんなときは無理に決断しなくていい。一度「保留ボックス」に入れて、時間をおいてから判断しよう。</p>
      <div class="column-title">保留ボックスとは</div>
      <div class="column-h2">⚫︎捨てるか迷ったものを一時的に入れておく箱</div>
      <p class="column-text">捨てるかどうかすぐ決められないものを、とりあえず箱に入れておく仕組み。「捨てる」「残す」の二択で悩む時間を減らせる。いらない箱や紙袋がおすすめ。</p>
      <div class="column-title">使い方</div>
      <div class="column-h2">⚫︎期限を決めて保管する</div>
      <p class="column-text">箱に入れたら3ヶ月〜半年の期限を決めよう。期限が来ても使わなかったものは、なくても困らなかった証拠。</p>
      <div class="column-h2">⚫︎箱から出して使ったら「必要なもの」</div>
      <p class="column-text">保留期間中に取り出して使ったものは、ちゃんと定位置を作ってあげよう。</p>
      <div class="column-title">保留ボックスのポイント</div>
      <div class="column-h2">⚫︎箱は一つだけにする</div>
      <p class="column-text">保留ボックスが増えると結局片付かない。箱一つに収まる量だけにするのがルール。</p>
      <div class="column-h2">⚫︎思い出の品は別で保管</div>
      <p class="column-text">写真や手紙など思い出の品は別枠でOK。保留ボックスは「使うかどうか迷うもの」専用にしよう。</p>
      <div class="column-title">まとめ</div>
      <p class="column-text">片付けは一度で完璧にしなくていい。迷ったら保留、期限が来たら判断。その繰り返しで少しずつ部屋は整っていく。</p>
    `,
    productGroups: []
  },
  {
    id: 'desk',
    icon: '🖥️',
    title: '机周りの収納',
    sub: '作業スペースを確保しながらすっきり整理',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    column: `
      <div class="column-title">机周り収納を選ぶポイント</div>
      <div class="column-h2">⚫︎机と色・材質をそろえる</div>
      <p class="column-text">机本体と同じ色や材質のものを選ぶと統一感が出る。バラバラだと片付いていても雑然とした印象になりやすい。</p>
      <div class="column-h2">⚫︎作業スペースを確保する</div>
      <p class="column-text">収納を増やしすぎて作業スペースがなくなっては本末転倒。机の上に何も置いていない状態で、どのくらいのスペースが使えるか確認してから選ぼう。</p>
      <div class="column-h2">⚫︎しまうものを分けて考える</div>
      <p class="column-text">書類・ガジェット・文房具など、種類ごとに置き場所を分けると取り出しやすくなる。</p>
    `,
    productGroups: [
      {
        title: '机に取り付けるタイプ',
        note: '机の表面積を減らさずに収納を増やせる。スペースを有効活用したい人におすすめ。',
        products: [
          { name: 'Hoshinoi 卓上ラック 有孔ボード付き', sub: '木製・大容量', url: 'https://amzn.to/4ffr1wd' },
          { name: 'VOOCYE 後付け引き出し テーブル下収納', sub: '穴あけ不要', url: 'https://amzn.to/4fnlrXJ' },
        ]
      },
      {
        title: '机に置くタイプ',
        note: '手軽に設置できる卓上収納。よく使うものをまとめて置くのに便利。',
        products: [
          { name: 'Aibiju 卓上本棚 デスク収納 2段', sub: '棚板高さ調節可・工具不要', url: 'https://amzn.to/4p8P4jY' },
          { name: 'QIYVLOS デスクオーガナイザー 小物入れ', sub: '組立不要・大容量', url: 'https://amzn.to/4fjUlSg' },
        ]
      },
      {
        title: '書類管理',
        note: '書類や雑誌が散らかりがちな人に。立てて収納するだけで机の上がすっきり。',
        products: [
          { name: 'ALIOBC 伸縮自在ブックエンド 卓上本棚', sub: '倒れない・金属製', url: 'https://amzn.to/4p0R8Kx' },
          { name: 'ライクイット A4ファイルボックス', sub: 'A4対応', url: 'https://amzn.to/4ve4CUK' },
        ]
      },
    ]
  },
  {
    id: 'closet',
    icon: '👔',
    title: 'クローゼット収納術',
    sub: '衣類を上手に整理してクローゼットをすっきり',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80',
    column: `
      <div class="column-title">※ クローゼット収納の基本</div>
      <div class="column-h2">⚫︎ ハンガーにかけるものと畳むものを分ける</div>
      <p class="column-text">シワになりやすいシャツやブラウスはハンガーへ。ニットなど型崩れしやすい衣類は畳んで収納しよう。</p>
      <div class="column-h2">⚫︎ 風通しを良くしてカビ対策</div>
      <p class="column-text">クローゼットは湿気がこもりやすい場所。詰め込みすぎず、除湿剤や防虫剤を活用しよう。</p>
    `,
    productGroups: [
      {
        title: 'カバン収納',
        note: 'カバンを床に置かず立てて収納。型崩れ防止にもなり、取り出しやすさもアップ。',
        products: [
          { name: '山崎実業 バッグ収納スタンド 2個組', sub: 'ホワイト', url: 'https://amzn.to/4p4UyvN' },
          { name: 'Hongmeru 吊り下げ収納 折りたたみ', sub: '省スペース・防湿・取り付け簡単', url: 'https://amzn.to/4fjF2sH' },
        ]
      },
      {
        title: '下着・靴下収納',
        note: '引き出しの中を仕切るだけで取り出しやすさが格段にアップ。毎日使うものだからこそ整えよう。',
        products: [
          { name: 'Amazonベーシック 引き出し収納オーガナイザー', sub: 'グレー・下着類用', url: 'https://amzn.to/4gmyXwS' },
          { name: 'Lifewit 引き出し調節可能仕切り', sub: 'プラスチック製', url: 'https://amzn.to/4ykESsO' },
        ]
      },
      {
        title: '多機能ハンガー',
        note: '省スペースで効率的に収納できるハンガー。クローゼットの限られたスペースを最大限に活用しよう。',
        products: [
          { name: 'チチロバ パンツ・スラックスハンガー', sub: 'ステンレス・省スペース', url: 'https://amzn.to/4wrir3o' },
          { name: 'DOIOWN ハンガー かたくずれ防止', sub: 'ステンレス・縦横両用・360°回転フック', url: 'https://amzn.to/4p12E8J' },
        ]
      },
      {
        title: '湿気対策',
        note: '湿気は衣類の大敵。カビや虫食いを防ぐために除湿剤・防虫剤は必須アイテム。',
        products: [
          { name: 'ドライペット 備長炭 除湿剤 タンクタイプ', sub: 'どこでも用', url: 'https://amzn.to/4ya12Ok' },
          { name: 'ムシューダ 衣類用防虫剤 防カビ剤配合', sub: '衣装ケース用・無香タイプ', url: 'https://amzn.to/3TjIaMD' },
          { name: 'ムシューダ 衣類用防虫剤 防カビ剤配合', sub: 'クローゼット用・無香タイプ', url: 'https://amzn.to/4eMM2hC' },
        ]
      },
    ]
  },
 {
    id: 'furima',
    icon: '💰',
    title: 'フリマアプリの活用',
    sub: '売れやすいもの10選と出品時の注意点',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    column: `
      <p class="column-text">いらないけどまだ使えそう、と思ったらフリマアプリを活用しよう。売れやすいもの10選と利用する際の注意点をまとめた。</p>
      <div class="column-title">※ 家によくある売れやすいもの10選</div>
      <ul class="column-list">
        <li>使っていない化粧品・スキンケア（未開封が特に人気）</li>
        <li>試供品・サンプルセット（旅行用サイズをまとめ売り）</li>
        <li>着なくなった服（季節の少し前に出品すると有利）</li>
        <li>バッグ・財布・ポーチ（ブランド不問でも状態が良ければ売れる）</li>
        <li>本・漫画・雑誌（全巻セットは特に売れやすい）</li>
        <li>キッチン用品（未使用のタッパー、弁当箱、マグカップなど）</li>
        <li>タオル・ハンカチ・シーツ（贈答品の未使用品は定番）</li>
        <li>文房具（ノート、ペン、シール、マステをまとめ売り）</li>
        <li>スマホ関連小物（充電器、ケーブル、ケース・動作確認を記載）</li>
        <li>空き箱・付属品（ゲーム機、ブランド品の箱や説明書だけでも需要あり）</li>
      </ul>
      <div class="column-title">※ どこを探せばいい？場所別チェックリスト</div>
      <p class="column-text">片付けのついでに、こんな場所を見直してみよう。意外と売れるものが眠っているかも。</p>
      <ul class="column-list">
        <li>洗面所 → 未開封の化粧品・試供品</li>
        <li>押し入れ → 贈答用タオル・食器</li>
        <li>本棚 → 読み終えた本・漫画</li>
        <li>クローゼット → 1年着ていない服・バッグ</li>
        <li>引き出し → 充電ケーブル・スマホケース・文房具</li>
      </ul>
      <div class="column-title">※ 出品する時に気をつける6点</div>
      <div class="column-h2">⚫︎ 発送期限を守る</div>
      <p class="column-text">忙しくてすぐ送れないなら、最初から発送日数を長めに設定しよう。</p>
      <div class="column-h2">⚫︎ 商品の状態を正直に書く</div>
      <p class="column-text">傷や汚れは隠さず写真に撮る。正直に書いておく方がトラブルになりにくい。</p>
      <div class="column-h2">⚫︎ 写真は明るく複数枚載せる</div>
      <p class="column-text">全体・正面・裏面・傷・タグや型番を撮っておくと売れやすくなる。</p>
      <div class="column-h2">⚫︎ 梱包を丁寧にする</div>
      <p class="column-text">水濡れ防止にビニール袋、壊れやすいものはプチプチを使おう。</p>
      <div class="column-h2">⚫︎ 発送したら一言連絡する</div>
      <p class="column-text">「本日発送しました」の一言で購入者も安心できる。</p>
      <div class="column-h2">⚫︎ 送料を確認する</div>
      <p class="column-text">送料込みで出品する場合は、送料を引いても利益が残るか確認しよう。</p>
    `,
    productGroups: []
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
    ${idea.productGroups.length > 0 ? `
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
        <div class="affiliate-note">※ 商品リンクはアフィリエイトリンクです（PR）<br>※ サイズ・カラー・品番などは商品ページでよくご確認のうえ、ご購入ください</div>
      </div>
    ` : ''}
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
