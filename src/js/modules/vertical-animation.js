import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const verticalAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.gallery-vertical__img:nth-child(1)', {
    scrollTrigger: {
      trigger: '.gallery-vertical__img:nth-child(1)',
      start: 'top center',
      end: 'center center',
      scrub: 4,
    },
    opacity: 0.2,
    yPercent: -20,
    xPercent: 20,
  });

  gsap.from('.gallery-vertical__img:nth-child(2)', {
    scrollTrigger: {
      trigger: '.gallery-vertical__img:nth-child(2)',
      start: 'center bottom',
      end: 'center center',
      scrub: 4,
    },
    opacity: 0.2,
    yPercent: -20,
    xPercent: -20,
  });

  gsap.from('.gallery-vertical__img:nth-child(3)', {
    scrollTrigger: {
      trigger: '.gallery-vertical__img:nth-child(3)',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 4,
    },
    opacity: 0.2,
    yPercent: -20,
    xPercent: 15,
  });
};

export default verticalAnimation;
