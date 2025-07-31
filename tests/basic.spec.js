const { test, expect } = require('@playwright/test');

test.describe('基本的なページ読み込みテスト', () => {
  const pages = [
    { name: 'ホームページ', url: '/', title: 'Playwrightデモ - HOME' },
    { name: 'Aboutページ', url: '/about.html', title: 'Playwrightデモ - About' },
    { name: 'Contactページ', url: '/contact.html', title: 'Playwrightデモ - Contact' }
  ];

  pages.forEach(({ name, url, title }) => {
    test(`${name}が正常に読み込まれること`, async ({ page }) => {
      // ページに移動
      await page.goto(url);
      
      // ページタイトルが正しいことを確認
      await expect(page).toHaveTitle(title);
      
      // h1要素が存在することを確認
      await expect(page.locator('h1')).toBeVisible();
      
      // ナビゲーションメニューが存在することを確認
      await expect(page.locator('nav')).toBeVisible();
      
      // フッターが存在することを確認
      await expect(page.locator('footer')).toBeVisible();
      
      // JavaScriptエラーがないことを確認
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.log(`Console error on ${name}:`, msg.text());
        }
      });
      
      // ページが完全に読み込まれるまで待機
      await page.waitForLoadState('networkidle');
    });
  });

  test('すべてのページのナビゲーションリンクが機能すること', async ({ page }) => {
    // ホームページから開始
    await page.goto('/');
    
    // Aboutページへのリンクをクリック
    await page.click('a[href="about.html"]');
    await expect(page).toHaveTitle('Playwrightデモ - About');
    
    // Contactページへのリンクをクリック
    await page.click('a[href="contact.html"]');
    await expect(page).toHaveTitle('Playwrightデモ - Contact');
    
    // ホームページへのリンクをクリック
    await page.click('a[href="index.html"]');
    await expect(page).toHaveTitle('Playwrightデモ - HOME');
  });
});