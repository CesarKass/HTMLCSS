const hamburger = document.querySelector('.hamburger');
const menu_mobile = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    menu_mobile.classList.toggle('menu-mobile');
});