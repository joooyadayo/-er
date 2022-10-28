//=========================================================================================
//タイピングアニメーション

//設定
var typSpeed        = 50;    //ミリ秒
var typLikeHuman    = false; //人間のようなタイピング動作にするかどうか
var endBlink        = false; //タイピング中も常に点滅させるかどうか

//ページ読み込み時にタイピングアニメーションを開始する
$(window).on('load',function() {
    $(".js-typeTarget").addClass("js-startTyping");
    $(".js-typeTarget").removeClass("js-beforeTyping");
    $('.js-startTyping').t({
        speed           : typSpeed,
        speed_vary      : typLikeHuman,
        blink_perm      : endBlink,
    });
});

//要素が画面内中央に入った時にタイピングアニメーションを開始する
$(window).scroll(function (){
    $(".js-typeTarget").each(function(){
        var hit     = $(".js-typeTarget").offset().top;
        var scroll  = $(window).scrollTop();
        var wHeight = $(window).height();
        if (scroll >= hit - wHeight + wHeight/100){
            $(".js-typeTarget").addClass("jsTyping");
            $(".js-typeTarget").removeClass("js-beforeTyping");
            $('.js-startTyping').t({
                speed           : typSpeed,
                speed_vary      : typLikeHuman,
                blink_perm      : endBlink,
            });
        }
    });
});
//=========================================================================================




//=========================================================================================
//スクロールに応じてラインが伸びるアニメーション

//js-scrollLine
$(function () {
    $('div.js-scrollLine').each(function () {
      var $win = $(window),
          $winH = $win.height(),
          $connect = $(this),
          position = $connect.offset().top,
          current = 0,
          scroll;
      $win.on('load scroll', function () {
        scroll = $win.scrollTop();
        // ” * 1” を小さくするほど画面上部で値が100になる。(線の幅が画面幅になる)
        current = (1 - (position - scroll) / $winH) * 1 * 100;
        if (current > 99.9) {
          current = 100;
        }
        if (scroll > position - $winH) {
          $connect.css({width: current + '%'});
        }
      });
    });
  });

//js-scrollLineSub
  $(function () {
    $('div.js-scrollLineSub').each(function () {
      var $win = $(window),
          $winH = $win.height(),
          $connect = $(this),
          position = $connect.offset().top,
          current = 0,
          scroll;
      $win.on('load scroll', function () {
        scroll = $win.scrollTop();
        // ” * 1” を小さくするほど画面上部で値が100になる。(線の幅が画面幅になる)
        current = (1 - (position - scroll) / $winH) * 1 * 50;
        if (current > 99.9) {
          current = 100;
        }
        if (scroll > position - $winH) {
          $connect.css({width: current + '%'});
        }
      });
    });
  });
//=========================================================================================


//=========================================================================================
//クリックで要素表示するスクリプト

//element_left : secList
  $(function(){
    $('.element_left').hide();
    $('.secList').on('click',function(){
      $('.element_left').not($($(this).attr('href'))).hide();
      // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
      $($(this).attr('href')).fadeToggle(1000);
      // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
      // $($(this).attr('href')).show();
    });
  });
//=========================================================================================
