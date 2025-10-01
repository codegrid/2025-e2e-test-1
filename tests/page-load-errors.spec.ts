import { test, expect } from '@playwright/test';

test.describe('ページ読み込み時のエラーチェック', () => {
  const pages = [
    { name: 'ホーム', url: '/' },
    { name: 'このサイトについて', url: '/about.html' },
    { name: 'お問い合わせ', url: '/contact.html' },
  ];

  pages.forEach(({ name, url }) => {
    test(`${name}ページの読み込み時にエラーが発生しないこと`, async ({ page }) => {
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
      await page.waitForLoadState('networkidle');

      // エラーがないことを確認
      expect(errors).toHaveLength(0);
      if (errors.length > 0) {
        console.log(`${name}ページで検出されたエラー:`, errors);
      }
    });
  });
});

