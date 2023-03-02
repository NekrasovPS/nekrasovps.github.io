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
