$(document).ready(function () {
    $('.slick-banner').slick();

    $('.slick-img').slick({       
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 845,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    })

    /*menu fixed*/

    $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
        $('.header-top').addClass('header-top-fixed');
      } else {
        $('.header-top').removeClass('header-top-fixed');
      }
    });

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


