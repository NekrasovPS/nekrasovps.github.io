$(".slider").slick({
  infinite: true,
  dots: true,
  autoplay: true,
});

$(".brands-items").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2048,
      settings: "unslick",
    },
  ],
});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if (height > 137) {
    $("header").addClass("header-fixed");
    $(".inner-slider").css("margin-top", "137px");
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $("header").removeClass("header-fixed");
    $(".inner-slider").css("margin-top", "0");
  }
});

$(document).ready(function () {
  $("#open").click(function () {
    $(".header-top-right-menu-mb").addClass("open");
    $("body").addClass("open");
  });

  $("#close").click(function () {
    $(".header-top-right-menu-mb").removeClass("open");
    $("body").removeClass("open");
  });
});
