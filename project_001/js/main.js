function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value + " литров";
}

$(".slider-items-1").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
});

$(".slider-items-2").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: true,
});

$(".slider-items-3").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 137) {
    $("header").addClass("fixed");
    $(".delivery").css("margin-top", "138px");
  } else {
    $("header").removeClass("fixed");
    $(".delivery").css("margin-top", "0");
  }
});
