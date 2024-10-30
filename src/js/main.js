import toggleMenu from './helpers/toggleMenu.js';
import getHeaderHeight from './helpers/getHeaderHeight.js';
import customSelect from './modules/customSelect.js';
import getInputRangeValue from './helpers/getInputRangeValue.js';

getHeaderHeight();
toggleMenu('hamburger', 'nav');

const customSelectElement = document.querySelectorAll('.custom-select');
if (customSelectElement) {
  customSelect();
}

getInputRangeValue('.range__input', '.range__percent');
