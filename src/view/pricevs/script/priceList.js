

export const priceList = {

    init() {

        $(function () {

            // 收藏商品
            $("._cltn ._df").on("click", function () {
                $.confirm("", "确认收藏商品？",
                    // success
                    function (e) {
                        console.log("点击了确认");
                        $.info("收藏商品成功！", "success");
                    },
                    
                );
            });

            //// 立即洽谈
            $(".pricelist-cnt-tb").on("click", "tbody .td-4 span", function (e) {
               
                $(".qiatan").VModal("show", this);
            });

            // 询价
            $(".pricelist-cnt-tb").on("click", "tbody .td-5 span", function (e) {

                $(".xunjia").VModal("show", this);
            });

        });

    }


};



