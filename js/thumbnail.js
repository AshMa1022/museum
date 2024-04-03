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

  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button',
  },
  thumbs: {
    swiper: swiper2,
  },
});

var swiper4 = new Swiper('.mySwiper4', {
  spaceBetween: 10,
  slidesPerView: 5,
  slidesPerGroup: 5,
  watchSlidesProgress: true,
});

var swiper3 = new Swiper('.mySwiper3', {
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

  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  navigation: {
    nextEl: '.swiper-next-button3',
    prevEl: '.swiper-prev-button3',
  },
  thumbs: {
    swiper: swiper4,
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

document
  .querySelector('.swiper-next-button4')
  .addEventListener('click', function () {
    swiper4.slideNext();
  });

document
  .querySelector('.swiper-prev-button4')
  .addEventListener('click', function () {
    swiper4.slidePrev();
  });
