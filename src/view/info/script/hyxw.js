

export const hyxw = {

    init() {

        $(function () {

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



