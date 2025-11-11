// タブ切り替え機能の実装
document.addEventListener("DOMContentLoaded", function () {
  // タブボタンの取得
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  // タブボタンにクリックイベントを追加
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // すべてのタブボタンからactiveクラスを削除
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // すべてのタブパネルからactiveクラスを削除
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // クリックされたボタンにactiveクラスを追加
      this.classList.add("active");

      // 対応するパネルにactiveクラスを追加
      const targetPanel = document.getElementById(targetTab);
      targetPanel.classList.add("active");
    });
  });
});
