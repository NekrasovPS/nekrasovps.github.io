var swiper = new Swiper(".brend__swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 'auto'
});

const openList = document.querySelector('#openList');
const closeList = document.querySelector('#closeList');
const items = document.querySelector('.brend__items');
const rotImg = document.querySelector('.brend__btn');

const clickBtn = function(){
  openList.addEventListener('click', function(){
    items.style.height = "auto";
    openList.style.display = "none";
    closeList.style.display = "flex";
    rotImg.classList.add('active');
  });

  closeList.addEventListener('click', function(){
    items.style.height = "160px";
    openList.style.display = "flex";
    closeList.style.display = "none";
    rotImg.classList.remove('active');
  });
};

clickBtn();