$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('active');
});
$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
    $('.totop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
