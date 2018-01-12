$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
 $(document).on('load', function () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');  
 });
