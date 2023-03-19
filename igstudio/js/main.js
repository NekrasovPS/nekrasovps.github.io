// $(window).scroll(function () {
//   let height = $(window).scrollTop();
//   if (height > 137) {
//     $("header").addClass("fixed");
//     $(".delivery").css("margin-top", "138px");
//   } else {
//     $("header").removeClass("fixed");
//     $(".delivery").css("margin-top", "0");
//   }
// });

$(".slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      },
    },
  ],
});

$(document).ready(function () {
  $("#accordeon .acc-head").on("click", f_acc);
});

function f_acc() {
  $("#accordeon .acc-body").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(700);
}

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("active");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animation");

for (let elm of elements) {
  observer.observe(elm);
}

$(document).ready(function () {
  $(".open__menu").click(function () {
    $(".menu__open").addClass("open");
    $(".menu__open.open").css("transition, 0.2s");
    $("body").addClass("open");
  });

  $(".close").click(function () {
    $(".menu__open").removeClass("open");
    $("body").removeClass("open");
  });
});
