import { preloaderTime } from '../settings/constants';

const preloaderAnimation = () => {
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');

    if (preloader.classList.contains('none')) {
      return;
    }

    preloader.classList.add('preloader-animation');
    document.body.classList.add('no-scroll');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-hidden');
    }, 6000);

    setTimeout(() => {
      //startAnimation();
      preloader.classList.add('preloader-none');
      document.body.classList.remove('no-scroll');
    }, preloaderTime);
  });
};

export default preloaderAnimation;
