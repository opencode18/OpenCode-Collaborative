$(document).ready(function($) {
    var Body = $('body');
    setTimeout(function(){
        Body.addClass('preloader-site');
    },10000);
    
});    



$(window).on('load',function(){
    setTimeout(function(){
        killPreload();
    },3000);
});

function killPreload () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
}
