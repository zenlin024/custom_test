//觸發彈窗底部頁面禁止滑動
function fixed(){
  var scrollTop = document.body.scrollTop;//設定背景元素的位置
  $('#md-content').attr('data-top',scrollTop);
  var contentStyle = document.getElementById("md-content").style;//content是可以滾動的背景元素id名稱
  contentStyle.position = 'fixed'; //contentStyle是第二步的變數，設定背景元素的position屬性為‘fixed’
  contentStyle.width = '100%';
  contentStyle.top = "-"+scrollTop+"px";
}

//關閉彈窗底部頁面恢復滑動
function fixed_cancel(){
  var contentStyle = document.getElementById("md-content").style;
  var scrollTop = $('#md-content').attr('data-top');//設定背景元素的位置
  contentStyle.top = '0px';//恢復背景元素的初始位置
  contentStyle.position ="static";//恢復背景元素的position屬性
  $(document).scrollTop(scrollTop);//scrollTop,設定滾動條的位置
}
$(document).ready(function () {

  //活动说明彈窗
    $(".rule_bth").click(function () {
        $(".rule").addClass("active");
        fixed();
    });

    //影片彈窗
    $(".video_bth").click(function () {
        $(".md_video").addClass("active");
        fixed();
    });

  //彈窗取消
    $(".md-close,.md .md-overlay").click(function () {
        $(".md").removeClass("active");
        fixed_cancel();
    });

  //gotop
    $('.gotop').click(function () {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    });
  //高度200 gotop出現
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });

    $(document).ready(function () {
        $('.menu-main a').click(function (event) {
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        });
    });


  //手機選單
    $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
        $("header").toggleClass("active");
        $(".menu_mob").slideToggle();
    });

  //規則錨點移動



    $(window).on('load', function () {
        let $this = $(this);
        let scroll;
        autoScrollDown();

        function autoScrollDown()
        {
            if ($this.width() > 768) {
                scroll = $('#banner-bottom').height() - 40;
            } else {
                scroll = 0;
            };
            $("html,body").animate({ scrollTop:scroll }, 800);
        };
    });

  //lightbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});





