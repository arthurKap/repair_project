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

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    569: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  
  slidesPerView: 3,
  autoHeight: true,
  spaceBetween: 30,

});


/*Валидация формы offer*/ 
$('#offer-form').validate({

  errorClass: "invalid",

  errorElement: "div",
  
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    }
  },
  messages: {
    username: {
      required:"Заполните поле",
      minlength: jQuery.validator.format("Минимум {0} символа!"),
      maxlength: jQuery.validator.format("Максимум 15 символов!")
    },
    phone: {
      required: "Заполните поле"
    }, 
  }
  
})



/*Валидация формы brif*/ 
$('#brif-form').validate({

  errorClass: "invalid-brif",

  errorElement: "div",
  
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    phone: {
      required: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    username: {
      required:"Заполните поле",
      minlength: jQuery.validator.format("Минимум {2} символа!"),
      maxlength: jQuery.validator.format("Максимум {15} символов!")
    },
    phone: {
      required: "Заполните поле"
    },
    email: {
      required: "Заполните поле",
      email: "Пример name@domain.com",
    } 
  }
  
})

$(".phone-input").mask("+38(099)999-99-99");
