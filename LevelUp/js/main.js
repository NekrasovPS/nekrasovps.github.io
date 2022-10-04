jQuery(function ($) {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function() {
$('#tel').bind("change keyup input click", function() {
if (this.value.match(/[^0-9]/g)) {
this.value = this.value.replace(/[^0-9]/g, '');
}
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
