$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});    
var timeoutID = window.setTimeout(killPreload, 4000);
$(window).on('load',killPreload );
function killPreload () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
}
