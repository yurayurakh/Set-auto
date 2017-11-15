$(document).ready(function() {

    // Hidden Answer in the Question Block
    $('.hides-answer').hide();

    // Click by Question Item
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

    // Phone mask
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
    });

    //Points Car
    $('.point_item-label').click(function () {
        if($(this).next().css("display") == "none" ) {
            $(this).next().fadeIn("slow");
        } else {
            $(this).next().fadeOut("slow");
        }
    });

    //Modal logic
    $(".modal-order").click(function (e) {
        e.preventDefault();
        $("#modal-order").css("display","block");
        $("#typeForm").val($(this).data("modal"));
    });

    $(".modal-call").click(function (e) {
        e.preventDefault();
        $("#modal-recall").css("display","block");
        $("#typeFormCall").val($(this).data("modal"));
    });

    $(".close").click(function () {
        $(".modal").css("display","none");
    });

    $(".modal").click(function(e){
        if(e.target == this) {
            $(this).css("display","none");
        }
    });


    //Animation arrow




    //Hamburger Menu
    var scr_w=screen.width;
    if (scr_w < 768) {
        $( ".cross" ).hide();
        $( ".nav" ).hide();
        $( ".hamburger" ).click(function() {
            $( ".nav" ).slideToggle( 400, function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
            });
        });

        $( ".cross" ).click(function() {
            $( ".nav" ).slideToggle( 400, function() {
                $( ".cross" ).hide();
                $( ".hamburger" ).show();
            });
        });

        $(".service__tab_item").click(function(){
            var tabCategory = "#"+$(this).data("tab");
            if ($(tabCategory).length != 0) {
                $('html, body').animate({ scrollTop: $(tabCategory).offset().top - 180 }, 500);
            }
        });
    }

});