$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});
