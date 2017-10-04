// ナビゲーションバーのリンクをクリックしたら
// スムーズにスクロールしながら対象位置に移動
$("#navbar a").click(function() {
  var destination = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(destination).offset().top,
  }, 1400);

  // ハンバーガーメニューが開いている場合は閉じる
  $(".navbar-toggle:visible").click();

  // 本来のクリックイベントは処理しない
  return false;
});

// ボタンの表示／非表示を切り替える関数
function updateButton() {
    if ($(this).scrollTop() >= 300) { // 300px以上スクロールされた
        // ボタンを表示
        $(".bl-btn-BackToTop").fadeIn();
    } else {
        // ボタンを非表示
        $(".bl-btn-BackToTop").fadeOut();
    }
}

$(document).ready(function() {
    updateButton();

    // スクロールされる度にupdateButtonを実行
    $(window).scroll(updateButton);

    // ボタンをクリックしたらページトップにスクロールする
    $(".bl-btn-BackToTop").click(function() {
        // 600ミリ秒かけてトップに戻る
        $("html, body").animate({
            scrollTop: 0,
        }, 600);

        // ボタンのhrefに遷移しない
        return false;
    });
});
