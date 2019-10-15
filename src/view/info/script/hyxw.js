

export const hyxw = {

    init() {

        $(function () {

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



