$(document).ready(function(){
			$('.bxslider').bxSlider({
				// スライド方法を設定('horizontal'/'vertical'/'fade')
				mode: 'fade',
				// オートスライド
				auto: true,
				// スライドの動く速さ
				speed: 2000,
				// 次のスライドまでの待ち時間
				pause: 4000,
				// スライドのループ
				infiniteLoop: true,
				// 前後のコントロールを表示
				controls: false,
				// titleプロパティ内のキャプションを表示
				captions: true
			});
		});

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '0px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

// <script>
//    window.onload = function() {
//      scroll_effect();
//
//      $(window).scroll(function() {
//        scroll_effect();
//      });
//
//      function scroll_effect() {
//        $('.fadein').each(function() {
//          var elemPos = $(this).offset().top,
//            scroll = $(window).scrollTop(),
//            windowHeight = $(window).height();
//          if (scroll > elemPos - windowHeight + 100) {
//            $(this).addClass('scrollin');
//          }
//        });
//      };
//    };
//  </script>