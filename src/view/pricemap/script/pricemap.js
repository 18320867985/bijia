

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


            // tab �����Զ����¼�
            $(".v-tab").on("v-tab", function (e, btnEl, cntEl) {
                //console.log(btnEl, cntEl);
            });


            // ����ѡ��� ѡ��ť�������¼�
            $(".pricemap-cnt-slt .v-dropdown").on("v-dropdown-btn", function (e, el) {
                // el ѡ������Ԫ��
                console.log("el", $(el).parents(".v-dropdown").get(0));
            });

            // ����ѡ��� ѡ�񴥷����¼�
            $(".pricemap-cnt-slt .v-dropdown-menu").on("v-dropdown-select", function (e, el) {
                // el ѡ������Ԫ��
                console.log("el", el);

                // ����inpunt ��ֵ
                var v = $(el).html();
                var $p = $(el).parents(".v-dropdown");
                $(".v-dropdown-btn", $p).val(v).blur();

            });


        });

    }


};



