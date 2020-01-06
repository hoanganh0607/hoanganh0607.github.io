$(document).ready(function () {
    $('.slick-banner').slick();

    $('.slick-img').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    })

    /*menu mobile*/

    $(".menu-mobile").hide();

    $(".icon-click-show").click(function () {
        $(".menu-mobile").toggle();

    })

    

    $('.outdoor').hide()
    $('#menu-back').hide()
    $('.outdoor-show').click(function () {
        $('.outdoor').show()
        $('#menu-back').show()
        $('.hide').hide()
    })
    $('#menu-back').click(function () {
        $('.outdoor').hide()
        $('#menu-back').hide()
        $('.hide').show()
    })

    





});


