import throttle from './throttle.js';
const getHeaderHeight = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  hero.style = `--header-height: ${header.offsetHeight}px`;
};

window.addEventListener('resize', throttle(getHeaderHeight, 200));

export default getHeaderHeight;
