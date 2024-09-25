const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.querySelector('.header__menu');

openMenu.addEventListener('click', function(){
  menu.style.transform = 'translateY(0)';
});

closeMenu.addEventListener('click', function(){
  menu.style.transform = 'translateY(-250px)';
});

document.querySelectorAll('.select-wrapper select').forEach((select) => {

  select.addEventListener('focus', function() {
    this.parentNode.classList.add('open');
  });

  select.addEventListener('blur', function() {
    this.parentNode.classList.remove('open');
  });
});


const slider = document.getElementById("myRange");
const output = document.querySelector(".range-value");

output.innerHTML = slider.value + "%";

slider.oninput = function() {
  output.innerHTML = this.value + "%";
}