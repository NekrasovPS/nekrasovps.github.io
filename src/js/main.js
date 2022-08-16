jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 24) {
      $(".header").addClass("fixed");
      $(".inner__main-title").css("margin-top", "198px");
    } else if ($(this).scrollTop() < 24) {
      $(".header").removeClass("fixed");
      $(".inner__main-title").css("margin-top", "150px");
    }
  });
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    dots: true,
  });
});

$(document).ready(function () {
  $("#menu").click(function () {
    $("#mobile__menu").addClass("open");
    $("body").addClass("open");
  });

  $("#close").click(function () {
    $("#mobile__menu").removeClass("open");
    $("body").removeClass("open");
  });

  $("#tel").keyup(function (e) {
    this.value = this.value.replace(/[^0-9\.]/g, "");
  });
});

let time = 1800;
const countDownEl = document.getElementById("countDown");

setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${minutes}` + `:` + `${seconds}`;
  time--;
}
