const { test, expect } = require("@playwright/test");

test.describe("タブクリック時のエラーチェック", () => {
  const pages = [
    { name: "ホーム", url: "/" },
    { name: "このサイトについて", url: "/about.html" },
    { name: "お問い合わせ", url: "/contact.html" },
  ];

  pages.forEach(({ name, url }) => {
    test(`${name}ページのタブ操作時にエラーが発生しないこと`, async ({ page }) => {
      const errors = [];

      // コンソールエラーを収集
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          errors.push(msg.text());
        }
      });

      // ページエラーを収集
      page.on("pageerror", (error) => {
        errors.push(error.message);
      });

      // ページを読み込む
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      // タブボタンが存在する場合のみテスト実行
      const tabButtons = page.locator(".tab-button");
      const tabCount = await tabButtons.count();

      if (tabCount > 0) {
        // 各タブをクリックしてエラーをチェック
        for (let i = 0; i < tabCount; i++) {
          await tabButtons.nth(i).click();
          await page.waitForTimeout(100); // 少し待機
        }
      }

      // エラーがないことを確認
      expect(errors).toHaveLength(0);
      if (errors.length > 0) {
        console.log(`${name}ページのタブ操作で検出されたエラー:`, errors);
      }
    });
  });
});