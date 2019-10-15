
// import {DatePicker} from 'element-ui';

export const join = {

    init() {
        //  alert("supper ie8");
        

        var nav = $(".content-nav li");
        var list = $(".list li");
        nav.click(function () {
            var index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            list.removeClass("active").eq(index).addClass("active");
        })

    }


};



