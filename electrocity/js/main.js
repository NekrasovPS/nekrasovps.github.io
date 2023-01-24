$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 100) {
    $(".mobile__center").addClass("fixed");
    $(".mobile__top-inner").css("padding-bottom", "50px");
  } else {
    $(".mobile__center").removeClass("fixed");
    $(".mobile__top-inner").css("padding-bottom", "12px");
  }
});

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

const list = document.querySelectorAll(".nav-items .items a");
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    list.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});

$(document).ready(function(){
  $(".button").click(function(){
    var value = $(this).attr("data-filter");
    var elem = $(".elem");
    if(value == "all"){
      $(elem).show("500");
    }
    else{
      $(elem).not("."+value).hide("500");
      $(elem).filter("."+value).show("500");
    }
  });
})
