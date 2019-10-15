
export const index = {

    init() {

        $(function () {
            $(".banner").banner();

            // 触发onbannershow事件
            //$(document).on("onbannershow", function (e, data) {
            //    //console.log(data);
            //});

            $(".index-cnt-swiper-float ._list-item").mouseenter(function (e) {
           
                var p = $(this).parents("._list");
                $("._list-item", p).removeClass("active");
                $(this).addClass("active");
                var id = $(this).attr("data-target");
                $(".index-cnt-swiper-float ._cont-item").hide(0);
                $(id).show(0);
             
            });

            // 删除active
            $(".index-cnt-swiper-float").mouseleave(function (e) {
            
                $(this).find("._list-item").removeClass("active");
            });

            // 添加 in
            $(".index-cnt-swiper-float ._list").mouseenter(function () {
              
                $(this).parents(".index-cnt-swiper-float").addClass("in");

            });

            $(".index-cnt-swiper-float ._list").mouseleave(function () {
             
                $(this).parents(".index-cnt-swiper-float").removeClass("in");
                $("._list-item", this).removeClass("active");
                $(".index-cnt-swiper-float ._cont-item").hide(0);
            });


        });


        $(window).scroll(function (e) {

            //console.log();
            var srpTop = $(window).scrollTop();
            var elTop = $("#lv1").offset().top-20;
          
            if (srpTop >= elTop) {
                $(".index-slide-box").addClass("in").removeClass("out init");
            
            } else {
                $(".index-slide-box").removeClass("in").addClass("out");
              
            }

        });

        //  click to scroll top
        $(".btn-top").click(function (e) {

            $("html,body").stop().animate({
                scrollTop:0
            },400);

        });

        $(".index-slide-box .spy-itm a").click(function (e) {
            var id = $(this).attr("href");
            var elTop = $(id).offset().top - 19;
            $("html,body").stop().animate({
                scrollTop: elTop
            }, 400);
        });



    }

};



