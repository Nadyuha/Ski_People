import "normalize.css";
import '../scss/style.scss';

import "../js/modules/swiper";

import { initRouter } from "./modules/router";

const init = () => {
  initRouter();
};

init();