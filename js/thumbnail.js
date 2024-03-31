var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  slidesPerView: 5,
  slidesPerGroup: 5,
  watchSlidesProgress: true,
});

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 0,
  coverflowEffect: {
    stretch: 0,
    depth: 20,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  speed: 900,
  /*
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },*/
  navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button',
  },
  thumbs: {
    swiper: swiper2,
  },
});

document
  .querySelector('.swiper-next-button2')
  .addEventListener('click', function () {
    swiper2.slideNext();
  });

document
  .querySelector('.swiper-prev-button2')
  .addEventListener('click', function () {
    swiper2.slidePrev();
  });
