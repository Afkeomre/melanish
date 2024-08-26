import { gsap } from 'gsap';
import { preloaderTime } from '../settings/constants';

const heroAnimation = () => {
  let tl = gsap.timeline();

  tl.from('.hero__img', {
    opacity: 0,
    scale: 1.15,
    duration: 3,
    delay: function () {
      return preloaderTime / 1000 + 1.5;
    },
    ease: 'back',
  }).from(
    '.hero__title',
    {
      opacity: 0,
      y: -150,
      duration: 2.5,
      ease: 'back',
    },
    '-=3'
  );
};

export default heroAnimation;
