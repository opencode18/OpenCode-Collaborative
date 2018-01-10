$(document).ready(function () {
    $('.card').click(function () {

        var front = $(this).find('.front');
        var back = $(this).find('.back');
        front.toggleClass('front-turn');
        back.toggleClass('back-turn');

        setTimeout(function() {
            front.removeClass('front-turn');
            back.removeClass('back-turn');
        }, 3000);

    });
});