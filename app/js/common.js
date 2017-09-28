$(document).ready(function() {
    console.log("Start!!!");

    $('.hides-answer').hide();

    $('.question').click(function(){
        $(this).toggleClass('question-open').next().slideToggle(300);
        return false;
    });

});