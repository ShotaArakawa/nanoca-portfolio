# nanoca-portfolio

**なのか / nanoca** の音楽活動ポートフォリオサイト。  
Vue 3 + Vite + Tailwind CSS で構築し、Vercel で公開しています。

🔗 https://nanoca-portfolio.vercel.app/

---

## 技術スタック

| 役割 | 技術 |
|---|---|
| UI フレームワーク | Vue 3 (Composition API / `<script setup>`) |
| ビルドツール | Vite 8 |
| スタイリング | Tailwind CSS v3 |
| CSS 後処理 | PostCSS + Autoprefixer |
| 言語 | JavaScript (TypeScript なし) |
| ホスティング | Vercel |

---

## 画面構成

```
index.html
└── main.js
      └── App.vue
            ├── <header>  固定ナビゲーション
            └── <main>
                  ├── Hero.vue       #hero        プロフィール・アイコン・キャッチコピー
                  ├── Release.vue    #release     01: 最新曲・人気曲（YouTube 埋め込み）
                  ├── Works.vue      #works       02: 楽曲提供実績（YouTube 埋め込み）
                  ├── Products.vue   #it-portfolio 03: IT ポートフォリオリンク
                  └── SNS.vue        #sns         04: Contact（メール + SNS リンク + Footer）
```

---

## ディレクトリ構成

```
nanoca-portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── icon.png              # プロフィールアイコン
│   │   ├── music-tracker-mockup.png
│   │   ├── vite.svg
│   │   └── vue.svg
│   ├── components/
│   │   ├── Hero.vue
│   │   ├── Release.vue
│   │   ├── Works.vue
│   │   ├── Products.vue          # IT Portfolio セクション
│   │   └── SNS.vue
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## コンテンツの更新方法

### 最新曲・人気曲を変更する（Release.vue）

`src/components/Release.vue` の `releases` 配列の `youtubeId` を差し替えるだけです。

```js
const releases = [
  {
    label: 'Latest',
    title: '曲名',
    type: 'Original Song / MV',
    year: '2026',
    youtubeId: 'xxxxxxxxxx', // YouTube URL の v= 以降
  },
  ...
]
```

### 楽曲提供実績を追加する（Works.vue）

`src/components/Works.vue` の `works` 配列にオブジェクトを追加します。

```js
const works = [
  {
    date: '2026/5/28',
    label: 'Release',
    title: '曲名 ／ アーティスト名',
    role: '作詞・作編曲',
    youtubeId: 'xxxxxxxxxx',
  },
]
```

### SNS・連絡先を変更する（SNS.vue）

`src/components/SNS.vue` の `email` と `links` 配列を編集します。

---

## ローカル開発

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド確認
npm run build

# ビルド結果のプレビュー
npm run preview
```

---

## デプロイ

Vercel と GitHub リポジトリが連携済みです。  
`main` ブランチへ push すると自動でビルド・デプロイされます。

```bash
git add .
git commit -m "your message"
git push origin main
```
