import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const nextAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.next__img', {
    scrollTrigger: {
      trigger: '.next',
      start: 'top center',
    },
    yPercent: function () {
      return gsap.utils.random(-100, 100);
    },
    xPercent: function () {
      return gsap.utils.random(-100, 100);
    },
    rotation: 0,
    duration: 4,
    ease: 'back',
    opacity: 0,
    stagger: {
      from: 'random',
      opacity: 0,
      each: 0.8,
    },
  });

  gsap.from('.next__title', {
    scrollTrigger: {
      trigger: '.next',
      start: 'top center',
    },
    delay: 4,
    opacity: 0,
    duration: 2,
    scaleY: 0.6,
    scaleX: 1.2,
    ease: 'back.out(2.6)',
  });
};

export default nextAnimation;
