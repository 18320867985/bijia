
/**jq extend

            <div class="v-tab">
                <!--tab 按钮列表-->
                <ul class="v-tab-btns">
                    <li class="v-tab-btn active" data-toggle="v-tab" data-target="#a">
                        通用塑料
                    </li>
                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#b">
                        工程塑料
                    </li>

                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#c">
                        塑料助剂
                    </li>
                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#d">
                        再生塑料
                    </li>
                    <li class="v-tab-btn" data-toggle="v-tab" data-target="#e">
                        塑料管材
                    </li>

                </ul>

                <!--tab 内容 -->
                <div class="v-tab-cnt">
                    <!--tab 内容每一项 -->
                    <div class="v-tab-cnt-item active" id="a">
                        通用塑料
                    </div>

                    <!--tab 内容每一项 -->
                    <div class="v-tab-cnt-item" id="b">
                        工程塑料
                    </div>

                    <!--tab 内容每一项 -->
                    <div class="v-tab-cnt-item" id="c">
                        塑料助剂
                    </div>

                    <!--tab 内容每一项 -->
                    <div class="v-tab-cnt-item" id="d">
                        再生塑料
                    </div>

                    <!--tab 内容每一项 -->
                    <div class="v-tab-cnt-item" id="e">
                        塑料管材
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

        // 自定义事件
        $(this).trigger("v-tab", [this, $(target, $p).get(0)]);
     

    });

}();

