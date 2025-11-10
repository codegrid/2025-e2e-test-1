import { test, expect } from '@playwright/test';

test.describe('タブクリック時のエラーチェック', () => {
  const pages = [
    { name: 'ホーム', url: '/' },
    { name: 'このサイトについて', url: '/about.html' },
    { name: 'お問い合わせ', url: '/contact.html' },
  ];

  pages.forEach(({ name, url }) => {
    test(`${name}ページのタブ操作時にエラーが発生しないこと`, async ({ page }) => {
      const errors: string[] = [];

      // コンソールエラーを収集
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // ページエラーを収集
      page.on('pageerror', (error: Error) => {
        errors.push(error.message);
      });

      // ページを読み込む
      await page.goto(url);

      // タブボタンが存在する場合のみテスト実行
      const tabButtons = page.locator('.tab-button');
      const tabCount = await tabButtons.count();

      // タブが存在しない場合はスキップする
      if (tabCount === 0) test.skip();

      // 各タブをクリックしてエラーをチェック
      // エラーが発生すると先に記述したpage.onで収集される
      for (let i = 0; i < tabCount; i++) {
        await tabButtons.nth(i).click();
      }

      // エラーがないことを確認
      expect(errors).toHaveLength(0);
      if (errors.length > 0) {
        console.log(`${name}ページのタブ操作で検出されたエラー:`, errors);
      }
    });
  });
});
