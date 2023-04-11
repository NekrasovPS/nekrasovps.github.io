// $(window).scroll(function () {
//   let height = $(window).scrollTop();
//   if (height > 104) {
//     $("header").addClass("fix");
//     $("body").css("margin-top", "104px");
//   } else {
//     $("header").removeClass("fix");
//     $("body").css("margin-top", "0");
//   }
// });

$(document).ready(function () {
  $(".mobile__menu").click(function () {
    $(".mobile__open").addClass("open");
    $(".mobile__open.open").css("transition, 0.2s");
    $("body").addClass("open");
  });

  $(".mobile__close").click(function () {
    $(".mobile__open").removeClass("open");
    $("body").removeClass("open");
  });

  // // Обработчик клика по бургер-меню
  // $(".burger-menu").click(function () {
  //   $(this).toggleClass("open");
  //   $("nav").toggleClass("active");
  // });

  // Обработчик клика по ссылке в меню
  $("nav a").click(function (event) {
    event.preventDefault();
    $("body").removeClass("open");
    $(".mobile__open").removeClass("open");
    $("nav").removeClass("active");

    var target = $(this).data('target'); // получаем значение атрибута data-target
  
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(target).offset().top // плавно скроллим до элемента с нужным id
      });
    }, 700)
    // window.location.href = $(this).attr("href");
  });
});

$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".elips, .colors",
});

$(".elips").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider, .colors",
  centerMode: true,
  focusOnSelect: true,
});

$(".colors").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".elips",
});

(function ($) {
  $.fn.HvrSlider = function () {
    return this.each(function () {
      var el = $(this);
      if (el.find("img").length > 1) {
        var hvr = $("<div>", {
          class: "hvr",
          append: [
            $("<div>", {
              class: "hvr__images",
              append: $("<div>", {
                class: "hvr__sectors",
              }),
            }),
            $("<div>", {
              class: "hvr__dots",
            }),
          ],
          insertAfter: el,
          prepend: el,
        });
        var hvrImages = $(".hvr__images", hvr);
        var hvrImage = $("img", hvr);
        var hvrSectors = $(".hvr__sectors", hvr);
        var hvrDots = $(".hvr__dots", hvr);
        el.prependTo(hvrImages);
        hvrImage.each(function () {
          hvrSectors.prepend('<div class="hvr__sector"></div>');
          hvrDots.append('<div class="hvr__dot"></div>');
        });
        $(".hvr__dot:first", hvrDots).addClass("hvr__dot--active");
        var setActiveEl = function (el) {
          hvrImage.hide().eq(el.index()).show();
          $(".hvr__dot", hvrDots)
            .removeClass("hvr__dot--active")
            .eq(el.index())
            .addClass("hvr__dot--active");
        };
        $(".hvr__sector", hvrSectors).hover(function () {
          setActiveEl($(this));
        });
        hvrSectors.on("touchmove", function (e) {
          var position = e.originalEvent.changedTouches[0];
          var target = document.elementFromPoint(
            position.clientX,
            position.clientY
          );
          if ($(target).is(".hvr__sector")) {
            setActiveEl($(target));
          }
        });
      }
    });
  };
})(jQuery);

$(".images").HvrSlider();

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


$(document).ready(function() {
  // Плавное открытие модального окна
  $('.open-modal').click(function() {
    $('.modal').fadeIn();
    // $("body").addClass('open-mod');
  });

  // Плавное закрытие модального окна
  $('.close-modal').click(function() {
    $('.modal').fadeOut();
    // $("body").removeClass('open-mod');
  });
});



