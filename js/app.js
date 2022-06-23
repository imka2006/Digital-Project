const burger__menu = document.querySelector(".burger");


burger__menu.addEventListener("click", () => {
  burger__menu.classList.toggle("active");
});



const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return `<span class="test${index}">` + 0 + (index + 1) + "</span>";
    },
  },

  navigation: {
    nextEl: '.swiper__button--prev',
    prevEl: '.swiper__button--next',
  },
});



const photo__swiper = new Swiper('.photo__swiper', {
  loop: true,
  pagination: {
    el: '.photo__pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper__button--prev',
    prevEl: '.swiper__button--next',
  },
});




const project__swiper = new Swiper('.project__swiper', {
  loop: true,
  pagination: {
    el: '.project__pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper__button--prev',
    prevEl: '.swiper__button--next',
  },
});



const certificate__swiper = new Swiper(".certificate__swiper", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.certificate__pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },

  spaceBetween: 0,
  breakpoints: {
      
      320: {
          slidesPerView:1,
      },
     

      1000: {
          slidesPerView: 3,
      },
  },
});

