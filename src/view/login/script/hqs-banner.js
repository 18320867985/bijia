/**jq extend**/
$.fn.extend({

    banner: function () {

        for (var i = 0; i < this.length; i++) {
            checkObj(this[i]);
        }

        function checkObj(obj) {

            obj.index = 0;
            obj.length = $(".banner-wrap .cont li", $(obj)).length;
            obj.clearAutoId = 0;
            obj.time = Number($(obj).attr("data-time"));
            setImgBackground(obj);
            auto(obj.time);

            function auto(time) {

                obj.clearAutoId = setInterval(function () {
                    obj.index = (obj.index + 1) % (obj.length);
                    fadeImg(obj, obj.index);
                }, time);

            }

            //$(obj).mouseenter(function () {
               
            //    $(".banner-btn", $(obj)).stop().fadeIn();
            //    clearInterval(obj.clearAutoId);
            //});

            //$(obj).mouseleave(function () {
            //    $(".banner-btn", $(obj)).stop().fadeOut();
            //    auto(obj.time);
            //});

            //$(".banner-btn-l", $(obj)).on("click", function () {

            //    if (obj.index <= 0) {
            //        obj.index = obj.length - 1;
            //    } else {
            //        obj.index = obj.index - 1;
            //    }
            //    fadeImg(obj, obj.index);

            //});

            //$(".banner-btn-r", $(obj)).on("click", function () {

            //    obj.index = (obj.index + 1) % (obj.length);
            //    fadeImg(obj, obj.index);

            //});

            //$(".radius-list span", $(obj)).mouseenter(function () {
            //    obj.index = Number($(this).index());
            //    fadeImg(obj, obj.index);
            //});


            function setImgBackground(el) {
                var els = $(".banner-wrap .cont li", $(el));
                els.each(function () {
                    if ($(this).hasClass("init")) {
                        var color = $(this).attr("data-bg") || "#fff";
                        var banner = $(this).closest(".banner");
                        banner.css("background", color);
                        //banner.css("-webkit-transition", ".2s");
                        //banner.css("-o-transition", ".2s");
                        //banner.css("-zom-transition", ".2s");
                        //banner.css("-ms-transition", ".2s");
                        //banner.css("transition", ".2s");
                        $(this).siblings().css("opacity", 0);

                        return false;
                    }
                });

            }

            function fadeImg(el, index) {
                var banner = $(el).closest($(obj));
                var lis = $(".banner-wrap ul li", banner);

                var color = lis.eq(index).attr("data-bg") || "#fff";
                banner.css("background", color);

                lis.eq(index).siblings().stop().animate({
                    "opacity": 0
                }, 1000).hide();
                lis.eq(index).siblings().removeClass("active init");

                lis.eq(index).stop().show(0).animate({
                    "opacity": 1
                }, 1000);
                lis.eq(index).addClass("active");
                setRadius(index);

                // 触发自定义事件
                lis.eq(index).trigger("onbannershow", lis.eq(index));

            }

            function setRadius(index) {
                $(".radius-list span", obj).removeClass("active");
                $(".radius-list span", obj).eq(index).addClass("active");
            }
        }

    }

});
