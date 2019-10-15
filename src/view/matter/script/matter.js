


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


            //单选 vue-radiobt -group 自定事件

            // 品名
            $("#pinming").on("v-radiobtn-group", function (e, v, el) {
                console.log("pinming", v, el);
                $(".v-radiobtn-group-val").text(JSON.stringify(v));
            });

            // 厂商
            $("#chanshang").on("v-radiobtn-group", function (e, v, el) {
                console.log("chanshang", v, el);
                $(".v-radiobtn-group-val").text(JSON.stringify(v));
            });

            // 牌号
            $("#paihao").on("v-radiobtn-group", function (e, v, el) {
                console.log("paihao", v, el);
                $(".v-radiobtn-group-val").text(JSON.stringify(v));
            });


            // 删除筛选条件
            $("._result-item span").on("click", function () {
                $(this).closest("._result-item").remove();

            });

            // 下拉选择框 选择按钮触发的事件
            $(".matter-cnt-slt .v-dropdown").on("v-dropdown-btn", function (e, el) {
                // el 选择的项的元素
                console.log("el", $(el).parents(".v-dropdown").get(0));
            });

            // 下拉选择框 选择触发的事件
            $(".matter-cnt-slt .v-dropdown-menu").on("v-dropdown-select", function (e, el) {
                // el 选择的项的元素
                console.log("el", el);

                // 设置inpunt 的值
                var v = $(el).html();
                var $p = $(el).parents(".v-dropdown");
                $(".v-dropdown-btn", $p).val(v).blur();

            });




            // 分页
            paging.init({
                data: { txt: $(".txt").val() }, // 查询数据
                index: 1, //	当前页
                //pageItem: 5, //  每页条数
                allItem: 10, //  总条数
                showCount: 5, //  显示的页码数目
                selector: ".paging", //分页父元素
                isAnimation: true, //是否显示动画
                isShowSkip: true, // 是否显示跳转页
                //prevText: "&lt;&lt;",
                //nextText: "&gt;&gt;",
                isShowCount: false,  // 是否显示总页数
                isShowAllItems: false,  // 是否显示总条目
                isShowNumber: true,   //是否显示数字
                isShowPrevNext: true, // 是否显示上下页
                isShowFirstLast: true, // 是否显示第一页和后一页
                isShowPrevNextGroup: true, // 是否显示上下页组
                callback: callback
            });

            function callback(obj) {
                //console.log(obj.data);
                // obj.index; //当前页码
                obj.pageItem = 5; //  每页条数
                //obj.data        // 页面数据
                $.get("/static/json/product.json?id=" + obj.index, obj.data, function (res) {
                    // console.log(res);
                    if (res.allItem > 0) {

                        //$(".product-list-imgs").html(html);
                        // 成功之后赋值
                        obj.allItem = res.allItem; //  总条数
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



