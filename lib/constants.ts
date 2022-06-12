export const HAS_VISITED = 'jyw.has.visited';

export const WORKS = [
  {
    id: 'tabs',
    href: '/works/tabs/',
    src: '/works/tabs/thumbnail.png',
    alt: '',
    title: 'tabs (Chrome extension)',
    descJp:
      '「tabs」はブラウザーのタブ情報の一覧性とタブ管理のUX向上を目指して開発した、実験的なChrome用ブラウザー拡張機能です。',
    descEn:
      '"tabs" is an experimental tab manager browser extension for Chrome. It is aimed to improve UX for tab management and provides better overview of tabs information.',
    siteUrl: 'http://www.github.com/ysjn/tabs/',
    gallery: [
      { src: '/works/tabs/1.png', thSrc: '/works/tabs/th_1.png' },
      { src: '/works/tabs/2.gif', thSrc: '/works/tabs/th_2.png' },
      { src: '/works/tabs/3.gif', thSrc: '/works/tabs/th_3.png' },
      { src: '/works/tabs/4.gif', thSrc: '/works/tabs/th_4.png' },
    ],
    tags: ['Individual work', 'Chrome extension', 'TypeScript', 'React'],
  },
  {
    id: 'boldit',
    href: '/works/boldit/',
    src: '/works/boldit/thumbnail.png',
    alt: '',
    title: 'bold-it (Sketch.app plugin)',
    descJp:
      '「Bold-it」は Sketch.app用のプラグインです。複数のテキストレイヤー中の任意のキーワードを一括で太字に変換することができます。既存の機能では実現できないため、プラグインとして独自に開発しました。',
    descEn:
      '"Bold-it" is a super simple Sketch.app plugin that bolds user-specified keyword in selected text layers. It\'s something that is not supported out of the box, so I implemented by myself as a plugin.',
    siteUrl: 'http://www.github.com/ysjn/bold-it/',
    gallery: [
      { src: '/works/boldit/1.png', thSrc: '/works/boldit/th_1.png' },
      { src: '/works/boldit/2.png', thSrc: '/works/boldit/th_2.png' },
      { src: '/works/boldit/3.png', thSrc: '/works/boldit/th_3.png' },
      { src: '/works/boldit/4.png', thSrc: '/works/boldit/th_4.png' },
    ],
    tags: ['Individual work', 'Sketch'],
  },
  {
    id: 'atsum',
    href: '/works/atsum/',
    src: '/works/atsum/thumbnail.png',
    alt: '',
    title: 'あつまったー / atsumatter',
    descJp:
      '「ツイートする人々を視覚化する」というコンセプトで制作したインタラクティブなウェブサイトです。好きな単語やハッシュタグを入力し、ツイートを検索すると小さなキャラクターがあつまってきます。ツイートの数により木や草等の画面内のオブジェクトが変化します。',
    descEn:
      'This was a small project on visualizing social media. An interactive website that uses twitter search API. Search for tweet and little characters will "gather" as a result. Objects in the field will change according to the number of tweets.',
    siteUrl: '',
    gallery: [
      { src: '/works/atsum/1.png', thSrc: '/works/atsum/th_1.png' },
      { src: '/works/atsum/2.png', thSrc: '/works/atsum/th_2.png' },
      { src: '/works/atsum/3.png', thSrc: '/works/atsum/th_3.png' },
      { src: '/works/atsum/4.png', thSrc: '/works/atsum/th_4.png' },
    ],
    tags: ['Web', 'Individual work', 'Undergraduate', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'fbm',
    href: '/works/fbm/',
    src: '/works/fbm/thumbnail.png',
    alt: '',
    title: 'FBmonsters',
    descJp:
      'FacebookのAPIを使ったゲームウェブサイトです。Facebookアカウントでログインするとランダムでモンスターを召喚し、友達と対戦することができます。Facebookアカウントより情報を取得し、勝敗をウォールに書き込みます。',
    descEn:
      'Little game app for Facebook. Log in with your facebook account to summon your monster and fight against your friends. Post your game results on your facebook wall.',
    siteUrl: '',
    gallery: [
      { src: '/works/fbm/1.png', thSrc: '/works/fbm/th_1.png' },
      { src: '/works/fbm/2.png', thSrc: '/works/fbm/th_2.png' },
      { src: '/works/fbm/3.png', thSrc: '/works/fbm/th_3.png' },
      { src: '/works/fbm/4.png', thSrc: '/works/fbm/th_4.png' },
    ],
    tags: ['Web', 'Individual work', 'Undergraduate', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '2032',
    href: '/works/2032/',
    src: '/works/2032/thumbnail.png',
    alt: '',
    title: '#2032',
    descJp:
      '「ゲームの世界に囚われた友達を助ける為、呪われたゲームをプレイする主人公。ステージが進む毎に画面がどんどんバグってゆき・・・・。」ドットで表現されたゲームの世界と3D で表現された現実世界を行き来するアクションホラーゲームです。',
    descEn: 'Retro,Pop, Cute, pixelated side-scrolling action game with a taste of horror.',
    siteUrl: '',
    gallery: [
      { src: '/works/2032/1.png', thSrc: '/works/2032/th_1.png' },
      { src: '/works/2032/2.png', thSrc: '/works/2032/th_2.png' },
      { src: '/works/2032/3.png', thSrc: '/works/2032/th_3.png' },
      { src: '/works/2032/4.png', thSrc: '/works/2032/th_4.png' },
    ],
    tags: ['Flash', 'Group work', 'Undergraduate', 'ActionScript3'],
  },
  {
    id: 'blks',
    href: '/works/blocks/',
    src: '/works/blks/thumbnail.jpg',
    alt: '',
    title: 'Blocks',
    descJp:
      'arduinoを使ったインタラクティブなインスタレーションです。赤外線センサーに手をかざし次々と落ちてくる輪郭のないブロックに触れる事でブロックは様々な方向に回転し、落ちてきた時には見えなかった輪郭を魅せます。',
    descEn:
      'Intuitive installation. Interact with blocks by waving over IR sensor. When the blocks are bumped together, they randomly spin around and fly away. Interacting with blocks reveals the shape of the falling blocks.',
    siteUrl: 'https://vimeo.com/96424638',
    gallery: [
      { src: '/works/blks/1.png', thSrc: '/works/blks/th_1.png' },
      { src: '/works/blks/2.png', thSrc: '/works/blks/th_2.png' },
      { src: '/works/blks/3.png', thSrc: '/works/blks/th_3.png' },
      { src: '/works/blks/4.png', thSrc: '/works/blks/th_4.png' },
    ],
    tags: ['arduino', 'Individual work', 'Undergraduate'],
  },
  {
    id: 'bfp',
    href: '/works/bfp/',
    src: '/works/bfp/thumbnail.jpg',
    alt: '',
    title: 'Binary Fingerprints : Ubiquitous Archiving',
    descJp:
      '私達が日々利用しているSNSにはプライバシー情報が漏洩する危険が潜んでいます。そんな見えない危険を可視化し、ユーザーに喚起するインスタレーション・コンセプトです。',
    descEn:
      'Social Networking sites that we use everyday, are full of our personal information. This is an installation concept aiming to visualize and call an attention for risks of leaking private information.',
    siteUrl: '',
    gallery: [
      { src: '/works/bfp/1.jpg', thSrc: '/works/bfp/th_1.png' },
      { src: '/works/bfp/2.jpg', thSrc: '/works/bfp/th_2.png' },
      { src: '/works/bfp/3.jpg', thSrc: '/works/bfp/th_3.png' },
      { src: '/works/bfp/4.jpg', thSrc: '/works/bfp/th_4.png' },
    ],
    tags: ['arduino', 'Group work', 'Undergraduate'],
  },
  {},
  {},
];

// remove duplicate from string array
const dedupe = (arr: string[]) => {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
};

// generate unique strings array from works.tags
export const FILTERS = dedupe(
  WORKS.map((work) => (work.tags ? work.tags : [])).reduce((prev, cur) => [...prev, ...cur], []),
);

export const SLIDE_SHOW = [
  { href: '/works/blocks', src: '/slideshow/blocks1.jpg', alt: '' },
  { href: '/works/blocks', src: '/slideshow/blocks2.jpg', alt: '' },
  { href: '/works/2032', src: '/slideshow/2032.jpg', alt: '' },
  { href: '/works/bfp', src: '/slideshow/bfp.jpg', alt: '' },
  { href: '/works/tabs', src: '/slideshow/tabs.png', alt: '' },
];
