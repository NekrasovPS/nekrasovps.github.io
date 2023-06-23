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

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


$(document).ready(function () {
  $(".phone").mask("+7(999) 999-99-99");
  $(".modal-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: $(".modal-form").serialize(),
      success: function (html) {
        $("#request").modal("toggle");
        $("#t").modal("toggle");
        $("#t2").modal("toggle");
      },
    });
    return false;
  });
  $(".form2").validate({
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "/mail.php",
        data: $(".form2").serialize(),
        success: function (html) {
          $("#t").modal("toggle");
        },
      });
      return false;
    },
  });
});

$("#request").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("whatever");
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('input[name="formname"]').val(recipient); // передача данных формы в value
  modal.find("h4").text(recipient);
});

$(document).ready(function () {
  $.get("https://www.cloudflare.com/cdn-cgi/trace", function (data) {
    data = data
      .trim()
      .split("\n")
      .reduce(function (obj, pair) {
        pair = pair.split("=");
        return (obj[pair[0]] = pair[1]), obj;
      }, {});
    let ip = data.ip;
    console.log(ip);

    $("form").each(function (el, e) {
      $(e).append("<input type='hidden' name='ip' value='" + ip + "' >");
    });
  });
});

setTimeout(function () {
  document.getElementById("setT").click(); // Замените "myButton" на соответствующий идентификатор вашей кнопки
}, 20000); // Здесь 1000 - время в миллисекундах (1 секунда)



let bg = document.querySelector('.mouse-parallax-bg');
let fog1 = document.querySelector('.mouse-parallax-fog-1');
let fog2 = document.querySelector('.mouse-parallax-fog-2');
let fog3 = document.querySelector('.mouse-parallax-fog-3');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    fog1.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
    fog2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    fog3.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});


