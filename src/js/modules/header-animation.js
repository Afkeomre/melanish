import { gsap } from 'gsap';
import { preloaderTime } from '../settings/constants';

const headerAnimation = () => {
  const desktopNav = document.querySelector('.header__nav');
  let tl = gsap.timeline();

  if (getComputedStyle(desktopNav).display === 'none') {
    tl.from('.header__mobile-view a', {
      delay: function () {
        return preloaderTime / 1000 + 0.5;
      },
      opacity: 0,
      x: -30,
      duration: 2,
    }).from(
      '.burger',
      {
        opacity: 0,
        x: 30,
        duration: 2,
      },
      '-=2'
    );
  } else {
    tl.from('.header__nav-list li:nth-child(1)', {
      delay: function () {
        return preloaderTime / 1000 + 0.5;
      },
      opacity: 0,
      x: -100,
      duration: 2,
    })
      .from(
        '.header__nav-list li:nth-child(2)',
        {
          opacity: 0,
          scale: 1.1,
          duration: 2,
        },
        '-=2'
      )
      .from(
        '.header__nav-list li:nth-child(3)',
        {
          opacity: 0,
          x: 100,
          duration: 2,
        },
        '-=2'
      );
  }
};

export default headerAnimation;
