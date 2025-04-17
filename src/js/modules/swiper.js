import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import Swiper from 'swiper';

import { Navigation, Pagination, Thumbs } from 'swiper/modules';

export const slider = () => {
  
    Swiper.use([
      Navigation,
      Pagination,
      Thumbs
  ]);
  
  setTimeout(() => {
    console.log("this is the second message");
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
  }, 500);
}


// const swiper = new Swiper(".product__slider-thumbnails", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });

// const swiper2 = new Swiper(".product__slider", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".product__slider--next",
//     prevEl: ".product__slider--prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
  
// });