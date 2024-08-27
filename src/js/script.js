import './../index.html';
import './../scss/main.scss';

import preloaderAnimation from './modules/preloader-animation';
import mobileNav from './modules/mobile-nav';
import headerAnimation from './modules/header-animation';
import heroAnimation from './modules/hero-animation';
import infoAnimation from './modules/info-animation';
import horizontalAnimation from './modules/horizontal-animation';
import verticalAnimation from './modules/vertical-animation';
import nextAnimation from './modules/next-animation';
import slider from './modules/slider';

window.addEventListener('load', () => {
  preloaderAnimation();
  mobileNav();
  headerAnimation();
  heroAnimation();
  infoAnimation();
  horizontalAnimation();
  verticalAnimation();
  nextAnimation();
  slider();
});
