

export const hyzx = {

    init() {

        $(function () {

            $(".v-slide").find("._span3").html($(".v-slide .v-slide-wrap li").length);
            $(".v-slide").vslide();

            // ´¥·¢onbannershowÊÂ¼þ
            $(document).on("v-slideshow", function (e, el, index, size) {
                var p = $(el).parents(".v-slide");
               // console.log("el", el, "index:", index, size);
                $("._span1",p).html(index + 1);
                $("._span3",p).html(size);

            });
        
        });
    }

};



