# Playwright E2Eテスト デモアプリケーション

このプロジェクトは、Playwrightを使ったE2Eテストの学習用デモアプリケーションです。

## 📋 概要

3つのシンプルなHTMLページ（ホーム、このサイトについて、お問い合わせ）とタブ切り替え機能を持つWebアプリケーションで、Playwrightの基本的な使い方を学ぶことができます。

## 🚀 技術スタック

- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript
- **テストフレームワーク**: Playwright
- **CI/CD**: GitHub Actions
- **開発サーバー**: http-server

## 📁 プロジェクト構成

```
playwright-demo/
├── public/                        # フロントエンドファイル
│   ├── index.html                 # ホームページ
│   ├── about.html                 # このサイトについてページ  
│   ├── contact.html               # お問い合わせページ
│   ├── styles.css                 # 共通スタイル
│   └── script.js                  # タブ切り替え機能のJavaScript
├── tests/                         # テストファイル
│   ├── page-load-errors.spec.js   # ページ読み込み時のエラーチェック
│   └── tab-interaction-errors.spec.js # タブ操作時のエラーチェック
├── package.json                   # npm設定
├── playwright.config.js           # Playwright設定
└── .github/workflows/
    └── playwright.yml             # GitHub Actions設定（日本語コメント付き）
```

## 🛠️ セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. Playwrightブラウザのインストール

```bash
npm run install-playwright
```

### 3. 開発サーバーの起動

```bash
npm run serve
```

ブラウザで `http://localhost:3000` を開いてアプリケーションを確認できます。

## 🧪 テストの実行

### 基本的なテスト実行

```bash
npm test
```

### ブラウザを表示しながらテスト実行

```bash
npm run test:headed
```

### インタラクティブなテストUI

```bash
npm run test:ui
```

### デバッグモード

```bash
npm run test:debug
```

## 📝 実装されているテスト

### 1. ページ読み込み時のエラーチェック (`page-load-errors.spec.js`)
- 各ページ（ホーム、このサイトについて、お問い合わせ）の読み込み時にJavaScriptエラーが発生しないことを確認
- コンソールエラーとページエラーの両方を検出

### 2. タブ操作時のエラーチェック (`tab-interaction-errors.spec.js`)
- 各ページでタブをクリックした際にエラーが発生しないことを確認
- すべてのタブボタンを順番にクリックしてエラーをチェック

## 🔄 GitHub Actions CI

`.github/workflows/playwright.yml` により、以下のタイミングで自動テストが実行されます：

- `main` ブランチへのプッシュ時
- `main` ブランチへのプルリクエスト時

テスト結果はArtifactとして保存され、失敗時の詳細を確認できます。
ワークフローファイルには日本語の詳細なコメントが含まれており、CI/CDの仕組みを理解しやすくなっています。

## 📚 学習ポイント

このデモを通じて以下を学ぶことができます：

1. **基本的なE2Eテスト**: ページの読み込みとエラーがないことの確認
2. **エラー検出の分離**: ページ読み込み時とユーザー操作時のエラーを別々にテスト
3. **日本語でのテスト記述**: テスト名やメッセージを日本語で記述する方法
4. **CI/CD統合**: GitHub Actionsでの自動テスト実行

## 🌐 対応ブラウザ

Playwrightの設定により、以下のブラウザでテストが実行されます：

- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

## 💡 記事との対応

このデモプロジェクトは、E2Eテスト入門記事の実践例として作成されています。
記事で説明されている「画面を開いてエラーが無いことを確認するテスト」を実装しており、
実際のプロジェクトでの活用方法を示しています。
