$(document).ready(function(){
    $('.main_menu').on('mouseover', function(){
        $(this).children().children('img').css({'filter': 'brightness(0.3)'});
        $(this).children().children('p').css({'display': 'block'});
    });
    $('.main_menu').on('mouseout', function(){
        $(this).children().children('img').css({'filter': 'brightness(1)'});
        $(this).children().children('p').css({'display': 'none'});
    });
});