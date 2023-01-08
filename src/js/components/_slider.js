import Swiper, { Navigation } from "swiper";
import { animateTextIn } from "../functions/animateHistoryLore";

Swiper.use([Navigation]);

const CharactersSwiper = new Swiper("#charactersSlider", {
  breakpoints: {
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: "auto",
    },
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const HistorySwiper = new Swiper("#historySlider", {
  slidesPerView: 1.05,
  spaceBetween: 5,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
});

HistorySwiper.on("slideChangeTransitionStart", () => {
  animateTextIn(HistorySwiper.activeIndex + 1);
});
