import Swiper from "swiper";

export const mySwiper = () => new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});
