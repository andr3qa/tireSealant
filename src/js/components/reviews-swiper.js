import Swiper from 'swiper';
import {
  Navigation
} from 'swiper/modules';

Swiper.use([Navigation]);

const reviewsSwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".reviews-swiper-button_next",
    prevEl: ".reviews-swiper-button_prev",
  },
  breakpoints: {
    900: {
      slidesPerView: 2,
    },
  },
});
