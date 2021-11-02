let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let close = document.querySelector('#close');

const toTop = document.querySelector(".scrollTop");
// Скролл на вверх

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});

setInterval(function() {
   modal.classList.remove('modal_active');
}, 5000);
//Модальное окно

window .addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else {
    toTop.classList.remove("active");
  }

})
//Скролл на вверх



const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-left',
    prevEl: '.swiper-button-right',
  },
  
  slidesPerView: 3,
  autoHeight: true,
  spaceBetween: 30,

});