

//placeholder  兼容 ie9

$(function () {

    var list = $("input[type='text'],input[type='password'],textarea");
    list.each(function () {
        var place = $(this).attr("placeholder");

        if ($(this).attr("type") === "password") {
            $(this).attr("isPassword", true);
            $(this).attr("type", "text");

        }
        $(this).val("");
        $(this).addClass("ie-focus");
        $(this).val(place);

    });
    list.focus(function () {

        var place = $(this).attr("placeholder");
        var val = $.trim($(this).val());

        if ($(this).attr("isPassword")) {
            $(this).attr("type", "password");
        }
        if (place === val) {
            $(this).val("");
            $(this).removeClass("ie-focus");

        }
    });

    list.blur(function () {
        var place = $(this).attr("placeholder");
        var val = $.trim($(this).val());
        if ($(this).attr("isPassword")) {
            if ($.trim(val) === "") {
                $(this).attr("type", "text");
            } else {
                $(this).attr("type", "password");
            }

        }

        if ($.trim(val) === "") {
            $(this).val(place);
            $(this).addClass("ie-focus");
        }


    });

});

