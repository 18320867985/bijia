

export const pricemap = {


    init() {

        $(function () {

            $(".pricemap-cnt-tab ._item-btn").on("click", function () {
                var $p = $(this).closest("._item");
                if ($p.hasClass("active")) {
                    $p.removeClass("active");
                    $(this).find("span").eq(0).text($(this).attr("data-up"));

                } else {
                    $p.addClass("active");
                    $(this).find("span").eq(0).text($(this).attr("data-sub"));

                }

            });


            // tab 触发自定义事件
            $(".v-tab").on("v-tab", function (e, btnEl, cntEl) {
                //console.log(btnEl, cntEl);
            });


            // 下拉选择框 选择按钮触发的事件
            $(".pricemap-cnt-slt .v-dropdown").on("v-dropdown-btn", function (e, el) {
                // el 选择的项的元素
                console.log("el", $(el).parents(".v-dropdown").get(0));
            });

            // 下拉选择框 选择触发的事件
            $(".pricemap-cnt-slt .v-dropdown-menu").on("v-dropdown-select", function (e, el) {
                // el 选择的项的元素
                console.log("el", el);

                // 设置inpunt 的值
                var v = $(el).html();
                var $p = $(el).parents(".v-dropdown");
                $(".v-dropdown-btn", $p).val(v).blur();

            });


        });

    }


};



