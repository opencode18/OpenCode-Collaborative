
$(window).on('load',function(){

    var Body = $('body');
    setTimeout(function(){
        Body.addClass('preloader-site');
    },10000);

    setTimeout(function(){
        killPreload();
    },3000);
});

function killPreload () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
}
