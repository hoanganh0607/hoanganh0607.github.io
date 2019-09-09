$(document).ready(function () {
  $('.slide').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1085,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

$('.carousel').carousel({
  interval: 2000
})


/* login an, hien */

$(document).ready(function () {
  $("input[value='Đăng nhập']").click(function () {
    $(".hien").show();
    $(".an").hide();
    $(".login-input-2").css('background-color', '#558B9D');
    $(".login-input-2").css('color', '#FFFFFF');
    $(".login-input-1").css('color', '#000000');
    $(".login-input-1").css('background-color', '#FFFFFF');
  })
  $("input[value='Đăng kí']").click(function () {
    $(".hien").hide();
    $(".an").show();
    $(".login-input-1").css('background-color', '#558B9D');
    $(".login-input-1").css('color', '#FFFFFF');
    $(".login-input-2").css('color', '#000000');
    $(".login-input-2").css('background-color', '#FFFFFF');
  })
 
})
