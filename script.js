// タブ切り替え機能の実装
document.addEventListener('DOMContentLoaded', function() {
    // タブボタンの取得
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // タブボタンにクリックイベントを追加
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // すべてのタブボタンからactiveクラスを削除
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // すべてのタブパネルからactiveクラスを削除
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // クリックされたボタンにactiveクラスを追加
            this.classList.add('active');
            
            // 対応するパネルにactiveクラスを追加
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // フォーム送信の処理（Contact ページのみ）
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータを取得
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 簡単なバリデーション
            if (!name || !email || !message) {
                alert('すべての項目を入力してください。');
                return;
            }
            
            // 送信成功のメッセージ（実際には送信されません）
            alert('お問い合わせありがとうございます。\n（これはデモアプリケーションのため、実際には送信されません）');
            
            // フォームをリセット
            this.reset();
        });
    }

    // ページ読み込み完了をコンソールに出力（テスト用）
    console.log('ページが正常に読み込まれました:', document.title);
    
    // テスト用の関数（Playwrightテストで使用可能）
    window.testHelper = {
        getActiveTab: function() {
            const activeButton = document.querySelector('.tab-button.active');
            return activeButton ? activeButton.getAttribute('data-tab') : null;
        },
        
        clickTab: function(tabId) {
            const button = document.querySelector(`[data-tab="${tabId}"]`);
            if (button) {
                button.click();
                return true;
            }
            return false;
        },
        
        isTabVisible: function(tabId) {
            const panel = document.getElementById(tabId);
            return panel ? panel.classList.contains('active') : false;
        }
    };
});