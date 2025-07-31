const { test, expect } = require("@playwright/test");

test.describe("JavaScriptエラー検出テスト", () => {
  test("正常なscript.jsでエラーが発生しないこと", async ({ page }) => {
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

    // 各ページでエラーがないことを確認
    const pages = [
      { name: "ホーム", url: "/" },
      { name: "About", url: "/about.html" },
      { name: "Contact", url: "/contact.html" },
    ];

    for (const { url } of pages) {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      // タブをクリックしてJavaScriptを実行
      const tabButtons = page.locator(".tab-button");
      const tabCount = await tabButtons.count();

      for (let i = 0; i < tabCount; i++) {
        await tabButtons.nth(i).click();
        await page.waitForTimeout(100); // 少し待機
      }
    }

    // エラーがないことを確認
    expect(errors).toHaveLength(0);
    if (errors.length > 0) {
      console.log("検出されたエラー:", errors);
    }
  });
});
