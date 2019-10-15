
/*ellipsis 多行打点 -webkit-box-orient: vertical */

$(function () {

    var style = document.createElement("style");
    if (window.addEventListener) {
        style.innerText = "[class^=elp-] {-webkit-box-orient: vertical;}";
        $("head").append(style);
    }
        
});



