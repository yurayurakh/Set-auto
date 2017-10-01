$(document).ready(function() {
    $("a.scroll-to").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 80;
        if (screen.width < 768) {
            destination = $(elementClick).offset().top - 160;
        }

        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});