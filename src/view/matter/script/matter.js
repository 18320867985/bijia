


export const matter = {

    init() {

        $(function () {

            $(".matter-cnt-srh ._item-btn").on("click", function () {
                var $p = $(this).closest("._item");
                if ($p.hasClass("active")) {
                    $p.removeClass("active");
                    $(this).find("span").eq(0).text($(this).attr("data-up"));

                } else {
                    $p.addClass("active");
                    $(this).find("span").eq(0).text($(this).attr("data-sub"));

                }

            });


            //��ѡ vue-radiobt -group �Զ��¼�

            // Ʒ��
            $("#pinming").on("v-radiobtn-group", function (e, v, el) {
                console.log("pinming", v, el);
                $(".v-radiobtn-group-val").text(JSON.stringify(v));
            });

            // ����
            $("#chanshang").on("v-radiobtn-group", function (e, v, el) {
                console.log("chanshang", v, el);
                $(".v-radiobtn-group-val").text(JSON.stringify(v));
            });

            // �ƺ�
            $("#paihao").on("v-radiobtn-group", function (e, v, el) {
                console.log("paihao", v, el);
                $(".v-radiobtn-group-val").text(JSON.stringify(v));
            });


            // ɾ��ɸѡ����
            $("._result-item span").on("click", function () {
                $(this).closest("._result-item").remove();

            });

            // ����ѡ��� ѡ��ť�������¼�
            $(".matter-cnt-slt .v-dropdown").on("v-dropdown-btn", function (e, el) {
                // el ѡ������Ԫ��
                console.log("el", $(el).parents(".v-dropdown").get(0));
            });

            // ����ѡ��� ѡ�񴥷����¼�
            $(".matter-cnt-slt .v-dropdown-menu").on("v-dropdown-select", function (e, el) {
                // el ѡ������Ԫ��
                console.log("el", el);

                // ����inpunt ��ֵ
                var v = $(el).html();
                var $p = $(el).parents(".v-dropdown");
                $(".v-dropdown-btn", $p).val(v).blur();

            });




            // ��ҳ
            paging.init({
                data: { txt: $(".txt").val() }, // ��ѯ����
                index: 1, //	��ǰҳ
                //pageItem: 5, //  ÿҳ����
                allItem: 10, //  ������
                showCount: 5, //  ��ʾ��ҳ����Ŀ
                selector: ".paging", //��ҳ��Ԫ��
                isAnimation: true, //�Ƿ���ʾ����
                isShowSkip: true, // �Ƿ���ʾ��תҳ
                //prevText: "&lt;&lt;",
                //nextText: "&gt;&gt;",
                isShowCount: false,  // �Ƿ���ʾ��ҳ��
                isShowAllItems: false,  // �Ƿ���ʾ����Ŀ
                isShowNumber: true,   //�Ƿ���ʾ����
                isShowPrevNext: true, // �Ƿ���ʾ����ҳ
                isShowFirstLast: true, // �Ƿ���ʾ��һҳ�ͺ�һҳ
                isShowPrevNextGroup: true, // �Ƿ���ʾ����ҳ��
                callback: callback
            });

            function callback(obj) {
                //console.log(obj.data);
                // obj.index; //��ǰҳ��
                obj.pageItem = 5; //  ÿҳ����
                //obj.data        // ҳ������
                $.get("/static/json/product.json?id=" + obj.index, obj.data, function (res) {
                    // console.log(res);
                    if (res.allItem > 0) {

                        //$(".product-list-imgs").html(html);
                        // �ɹ�֮��ֵ
                        obj.allItem = res.allItem; //  ������
                        obj.render();

                    } else {
                        obj.index = 0;
                        obj.render();

                    }

                });
            }



        });
    }

};



