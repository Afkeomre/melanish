import { preloaderTime } from '../settings/constants';

const preloaderAnimation = () => {
  const preloader = document.querySelector('.preloader');

  preloader.classList.add('preloader-animation');
  document.body.classList.add('no-scroll');

  setTimeout(() => {
    preloader.classList.remove('preloader-animation');
    preloader.classList.add('preloader-hidden');
  }, 6000);

  setTimeout(() => {
    preloader.classList.add('preloader-none');
    document.body.classList.remove('no-scroll');
  }, preloaderTime);
};

export default preloaderAnimation;
