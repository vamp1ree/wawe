$(function() {
    $(".menu a, .header__icon, .footer__logo").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.menu__btn, .menu a').on('click', function() {
        $('.menu__list').toggleClass('menu_list--active')
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".header__top").addClass("header__top--background");
        } else {
            $(".header__top").removeClass("header__top--background");
        }
    });

    var mixer = mixitup('.gallery__content');
});