$(function () {
    $(window).scroll(function (e) {

        //console.log();
        var srpTop = $(window).scrollTop();
     
        if (srpTop >= 750) {
            $(".zhiding.self").addClass("in");

        } else {
            $(".zhiding.self").removeClass("in");

        }

    });

 
    //  click to scroll top
    var setTimeoutid = 0;

    $(".zhiding").click(function (e) {
        $(".zhiding").addClass("out").removeClass("self");

        $("html,body").stop().animate({
            scrollTop: 0
        }, 600);

        clearTimeout(setTimeoutid);
        setTimeoutid = setTimeout(function () {
      
            $(".zhiding").addClass("self").removeClass("out in" );
       
        },600);

    });
});
