$(document).ready(function() {
    console.log("Start!!!");

    $('.hides-answer').hide();

    $('.question').click(function(){
        $(this).toggleClass('question-open').next().slideToggle(300);
        return false;
    });

    // Onfocus input
    $('.form__item_input').focusout(function(){
        if ($(this).val().length == 0) {
            $(this).next().removeClass("input-no-empty");
        } else if ($(this).val() == "+7(___) ___-____") {
            $(this).next().removeClass("input-no-empty");
        }
        else {
            $(this).next().addClass("input-no-empty");
        }


    });

    <!-- Phone mask -->
    $(".tel").mask("+7(999) 999-9999");
    
    
    //Tabs 
    $('.service__tab_item').click(function () {
        $('.service__tab_item').removeClass("tab-active");
        $(this).addClass("tab-active");
        var tab = $(this).data("tab");
        $(".tab-content").removeClass("tab-content-active");
        jQuery.each($(".tab-content"),function(i,val){
            if (val.id == tab ) {
                $(val).addClass("tab-content-active");
            }
        });
    })

    //Points Car
    $('.point_item-label').click(function () {
        if($(this).next().css("display") == "none" ) {
            $(this).next().fadeIn("slow");
        } else {
            $(this).next().fadeOut("slow");
        }
    });
});