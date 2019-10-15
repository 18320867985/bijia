
// import {DatePicker} from 'element-ui';

export const review = {

    init() {
      //  alert("supper ie8");

        var submit = $(".submit");
        submit.click(function () {
            $("html,body").scrollTop(0);
            $(".success-wrap").addClass("active");
            var timer = setTimeout(function () {
                $(".success-wrap").removeClass("active");

            }, 8000)
        })
        
    }


};



