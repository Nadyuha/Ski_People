import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import Swiper from 'swiper';

import { Navigation, Pagination, Thumbs } from 'swiper/modules';

  Swiper.use([
    Navigation,
    Pagination,
    Thumbs
]);

const swiper = new Swiper(".product__slider-thumbnails", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".product__slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".product__slider--next",
    prevEl: ".product__slider--prev",
  },
  thumbs: {
    swiper: swiper,
  },
  
});