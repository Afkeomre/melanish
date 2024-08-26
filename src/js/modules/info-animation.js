import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const infoAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.info__employees-list li span:nth-child(odd)', {
    scrollTrigger: {
      trigger: '.info',
      start: 'top bottom',
    },
    y: -10,
    opacity: 0,
    duration: 0.8,
    stagger: {
      each: 0.8,
    },
  });

  gsap.from('.info__employees-list li span:nth-child(even)', {
    scrollTrigger: {
      trigger: '.info',
      start: 'top bottom',
    },
    delay: 2.4,
    y: 50,
    opacity: 0,
    duration: 1.8,
    stagger: {
      each: 1,
      from: 'end',
    },
  });
};

export default infoAnimation;
