// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  /* 並列でテストを実行 */
  fullyParallel: true,
  /* CI環境でのみテストが失敗した場合の再実行 */
  forbidOnly: !!process.env.CI,
  /* CIでの再実行回数 */
  retries: process.env.CI ? 2 : 0,
  /* 並列実行するワーカーの数 */
  workers: process.env.CI ? 1 : undefined,
  /* レポーターの設定 */
  reporter: "html",
  /* 全テストで共通する設定 */
  use: {
    /* ベースURL - ローカルサーバーのURL */
    baseURL: "http://localhost:3000",
    /* アクション実行時のスクリーンショット */
    screenshot: "only-on-failure",
    /* テスト実行時のビデオ録画 */
    video: "retain-on-failure",
    /* トレース収集（失敗時のみ） */
    trace: "on-first-retry",
  },

  /* テスト対象のブラウザを設定 */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /* テスト実行前にローカルサーバーを起動 */
  webServer: {
    command: "npx http-server -p 3000",
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
