# Playwright E2Eテスト デモアプリケーション

このプロジェクトは、Playwrightを使ったE2Eテストの学習用デモアプリケーションです。

## 📋 概要

3つのシンプルなHTMLページ（ホーム、About、Contact）とタブ切り替え機能を持つWebアプリケーションで、Playwrightの基本的な使い方を学ぶことができます。

## 🚀 技術スタック

- **フロントエンド**: HTML5, CSS3, Vanilla JavaScript
- **テストフレームワーク**: Playwright
- **CI/CD**: GitHub Actions
- **開発サーバー**: http-server

## 📁 プロジェクト構成

```
playwright-demo/
├── index.html                  # ホームページ
├── about.html                  # Aboutページ  
├── contact.html                # Contactページ
├── styles.css                  # 共通スタイル
├── script.js                   # 正常なJavaScript
├── package.json                # npm設定
├── playwright.config.js        # Playwright設定
├── tests/                      # テストファイル
│   ├── basic.spec.js           # 基本的なページ読み込みテスト
│   ├── error-detection.spec.js # JavaScriptエラーが検出されないことを確認するテスト
│   └── tabs.spec.js            # タブ機能テスト
└── .github/workflows/
    └── playwright.yml          # GitHub Actions設定
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

### 1. 基本的なページ読み込みテスト (`basic.spec.js`)
- 各ページが正常に読み込まれることを確認
- ページタイトルの確認
- 基本的なHTML要素の存在確認
- ナビゲーションリンクの動作確認

### 2. タブ機能テスト (`tabs.spec.js`)
- タブ切り替え機能の動作確認
- アクティブタブの状態確認
- タブパネルの表示切り替え確認
- テストヘルパー関数の動作確認

### 3. エラー検出テスト (`error-detection.spec.js`)
- JavaScriptエラーが発生しないことの確認

## 🔄 GitHub Actions CI

`.github/workflows/playwright.yml` により、以下のタイミングで自動テストが実行されます：

- `main`, `master`, `develop` ブランチへのプッシュ時
- 上記ブランチへのプルリクエスト時

テスト結果はArtifactとして保存され、失敗時の詳細を確認できます。

## 📚 学習ポイント

このデモを通じて以下を学ぶことができます：

1. **基本的なE2Eテスト**: ページの読み込みとエラーがないことの確認
2. **UI操作のテスト**: タブクリックのテスト
3. **エラー検出**: JavaScriptエラーの自動検出
4. **CI/CD統合**: GitHub Actionsでの自動テスト実行

## 💡 次のステップ

より複雑なテストを実装したい場合は以下を検討してみてください：

- APIモックを使用したテスト
- 複数ページにまたがるユーザージャーニーテスト
- アクセシビリティテスト
- パフォーマンステスト
- ビジュアルリグレッションテスト

## 🤝 貢献

このデモプロジェクトへの改善提案やバグ報告は、GitHubのIssueやPull Requestでお願いします。

## 📄 ライセンス

MIT License