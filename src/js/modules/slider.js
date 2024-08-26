import '../../libs/swiped-events.min.js';

const slider = () => {
  const slidesWrapper = document.querySelector('.slides__content');
  const slidesField = document.querySelector('.slides__images');
  const slides = Array.from(document.querySelectorAll('.slides__img-wrapper'));
  const slidesBacks = document.querySelectorAll('.slides__back-text');

  const containerWidth = parseInt(getComputedStyle(slidesWrapper).width);

  const everySlideWidth = slides.map((slide) => {
    return parseInt(getComputedStyle(slide).width);
  });

  const allSlidesWidth = everySlideWidth.reduce((acc, item) => {
    return acc + parseInt(item);
  }, 0);

  const gap = parseInt(getComputedStyle(slidesField).gap);

  slidesField.style.width = allSlidesWidth + gap * (slides.length - 1) + 'px';

  let offset = containerWidth / 2;
  let currentIndex = 0;
  let flag = true;
  let timeoutId;
  let isInViewport = false;

  slidesField.style.transform = `translateX(${offset}px)`;

  slidesField.addEventListener('swiped-left', goNext);
  slidesField.addEventListener('swiped-right', goPrev);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isInViewport = entry.isIntersecting;

        if (isInViewport) {
          slidesWrapper.addEventListener('wheel', handleWheelEvent);
        } else {
          slidesWrapper.removeEventListener('wheel', handleWheelEvent);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(slidesWrapper);

  window.addEventListener('keydown', handleKeydownEvent);

  slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
      if (i < currentIndex) {
        goPrev();
      } else if (i > currentIndex) {
        goNext();
      }
    });
  });

  function goNext() {
    if (currentIndex < slides.length - 1) {
      offset -= everySlideWidth[currentIndex] + parseInt(gap);
      slidesField.style.transform = `translateX(${offset}px)`;
      slidesBacks.forEach((back, i) => {
        i === currentIndex + 1
          ? back.classList.add('slides__back-text_white')
          : back.classList.remove('slides__back-text_white');
      });
      currentIndex++;
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      offset += everySlideWidth[currentIndex] + parseInt(gap);
      slidesField.style.transform = `translateX(${offset}px)`;
      slidesBacks.forEach((back, i) => {
        i === currentIndex
          ? back.classList.add('slides__back-text_white')
          : back.classList.remove('slides__back-text_white');
      });
    }
  }

  function handleWheelEvent(e) {
    e.preventDefault();

    if (flag) {
      flag = false;

      let delta = e.deltaY;

      if (delta > 0) {
        goNext();
      } else {
        goPrev();
      }

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        flag = true;
      }, 1000);
    }
  }

  function handleKeydownEvent(e) {
    if (isInViewport) {
      if (e.key == 'ArrowRight') {
        goNext();
      }
      if (e.key == 'ArrowLeft') {
        goPrev();
      }
    }
  }
};

export default slider;
