import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const horizontalAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.gallery-horizontal__img:nth-child(1)', {
    scrollTrigger: {
      trigger: '.gallery-horizontal__img:nth-child(1)',
      start: 'center bottom',
      end: 'center center',
      scrub: 6,
    },
    opacity: 0.5,
    xPercent: 150,
  });

  gsap.from('.gallery-horizontal__img:nth-child(2)', {
    scrollTrigger: {
      trigger: '.gallery-horizontal__img:nth-child(2)',
      start: 'center bottom',
      end: 'center center',
      scrub: 6,
    },
    xPercent: -150,
  });

  gsap.from('.gallery-horizontal__img:nth-child(3)', {
    scrollTrigger: {
      trigger: '.gallery-horizontal__img:nth-child(3)',
      start: 'center bottom',
      end: 'center center',
      scrub: 6,
    },
    opacity: 0.5,
    xPercent: 150,
  });

  gsap.from(':root', {
    scrollTrigger: {
      trigger: '.gallery-horizontal__img:nth-child(2)',
      start: 'top center',
      scrub: 6,
    },
    '--back-opacity': 0,
    duration: 2,
  });
};

export default horizontalAnimation;
