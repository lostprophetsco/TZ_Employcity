import throttle from './throttle.js';
/**
 * Updates the CSS custom property `--header-height` on the `.hero` element
 * based on the current height of the `.header` element.
 *
 * This function selects the `.header` and `.hero` elements from the document,
 * calculates the height of the header, and sets it as a CSS variable
 * `--header-height` on the hero element. This is useful for dynamically
 * adjusting layout or styles that depend on the header's height.
 */
const getHeaderHeight = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  hero.style = `--header-height: ${header.offsetHeight}px`;
};

window.addEventListener('resize', throttle(getHeaderHeight, 200));

export default getHeaderHeight;
