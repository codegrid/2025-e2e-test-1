const { test, expect } = require('@playwright/test');

test.describe('タブ機能のテスト', () => {
  const pages = [
    { name: 'ホームページ', url: '/' },
    { name: 'Aboutページ', url: '/about.html' },
    { name: 'Contactページ', url: '/contact.html' }
  ];

  pages.forEach(({ name, url }) => {
    test(`${name}のタブ切り替えが正常に動作すること`, async ({ page }) => {
      await page.goto(url);
      
      // タブコンテナが存在することを確認
      await expect(page.locator('.tab-container')).toBeVisible();
      
      // タブボタンが3つ存在することを確認
      const tabButtons = page.locator('.tab-button');
      await expect(tabButtons).toHaveCount(3);
      
      // 最初のタブがアクティブであることを確認
      await expect(tabButtons.first()).toHaveClass(/active/);
      
      // 2番目のタブをクリックして切り替え
      await tabButtons.nth(1).click();
      await expect(tabButtons.nth(1)).toHaveClass(/active/);
      await expect(tabButtons.first()).not.toHaveClass(/active/);
      
      // タブパネルの表示が切り替わることを確認
      const tabPanels = page.locator('.tab-panel');
      await expect(tabPanels.nth(1)).toHaveClass(/active/);
      await expect(tabPanels.first()).not.toHaveClass(/active/);
      
      // 3番目のタブをクリックして切り替え
      await tabButtons.nth(2).click();
      await expect(tabButtons.nth(2)).toHaveClass(/active/);
      await expect(tabButtons.nth(1)).not.toHaveClass(/active/);
      
      // 対応するパネルが表示されることを確認
      await expect(tabPanels.nth(2)).toHaveClass(/active/);
      await expect(tabPanels.nth(1)).not.toHaveClass(/active/);
    });
  });

  test('テストヘルパー関数が正常に動作すること', async ({ page }) => {
    await page.goto('/');
    
    // testHelper関数が利用可能であることを確認
    const activeTab = await page.evaluate(() => window.testHelper.getActiveTab());
    expect(activeTab).toBeTruthy();
    
    // タブクリック機能のテスト
    const clickResult = await page.evaluate(() => window.testHelper.clickTab('tab2'));
    expect(clickResult).toBe(true);
    
    // タブの可視性チェック機能のテスト
    const isVisible = await page.evaluate(() => window.testHelper.isTabVisible('tab2'));
    expect(isVisible).toBe(true);
  });
});