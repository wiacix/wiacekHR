$(document).ready(function(){
    $('#oMnie_1').slideDown(500);
    $('nav ul li a').first().addClass('active_link');
    $('nav ul li a').on('click', function(){
        $('nav ul li a').removeClass('active_link');
        $(this).addClass('active_link');
        $('main > div').slideUp(500);
        $($(this).attr('href')).slideDown(500);
    });
});
