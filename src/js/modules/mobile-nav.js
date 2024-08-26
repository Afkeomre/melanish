const mobileNav = () => {
  const navBtn = document.querySelector('.burger');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.burger__icon');
  const fade = document.querySelector('.fade');

  navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav_open');
    fade.classList.toggle('fade_open');
    menuIcon.classList.toggle('burger__icon_active');
    document.body.classList.toggle('no-scroll');
  };

  fade.onclick = function () {
    nav.classList.toggle('mobile-nav_open');
    fade.classList.toggle('fade_open');
    menuIcon.classList.toggle('burger__icon_active');
    document.body.classList.toggle('no-scroll');
  };
};

export default mobileNav;
