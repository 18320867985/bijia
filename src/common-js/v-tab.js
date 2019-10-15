
/**jq extend

            <div class="v-tab">
                <!--tab ��ť�б�-->
                <ul class="v-tab-btns">
                    <li class="v-tab-btn active" data-toggle="v-tab" data-target="#a">
                        ͨ������
                    </li>
                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#b">
                        ��������
                    </li>

                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#c">
                        ��������
                    </li>
                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#d">
                        ��������
                    </li>
                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#e">
                        ���Ϲܲ�
                    </li>

                </ul>

                <!--tab ���� -->
                <div class="v-tab-cnt">
                    <!--tab ����ÿһ�� -->
                    <div class="v-tab-cnt-item active" id="a">
                        ͨ������
                    </div>

                    <!--tab ����ÿһ�� -->
                    <div class="v-tab-cnt-item" id="b">
                        ��������
                    </div>

                    <!--tab ����ÿһ�� -->
                    <div class="v-tab-cnt-item" id="c">
                        ��������
                    </div>

                    <!--tab ����ÿһ�� -->
                    <div class="v-tab-cnt-item" id="d">
                        ��������
                    </div>

                    <!--tab ����ÿһ�� -->
                    <div class="v-tab-cnt-item" id="e">
                        ���Ϲܲ�
                    </div>
                </div>

            </div>

**/

+function () {

    $(document).on("click", "[data-toggle=v-tab]", function (e) {
        e.preventDefault();

        // btns
        var $p = $(this).closest(".v-tab");
        $(".v-tab-btn", $p).removeClass("active");
        $(this).addClass("active");
        var target = $(this).attr("data-target")||"";

        //  content
       $(".v-tab-cnt-item", $p).removeClass("active");
       $(target, $p).addClass("active");

        // �Զ����¼�
        $(this).trigger("v-tab", [this, $(target, $p).get(0)]);
     

    });

}();

