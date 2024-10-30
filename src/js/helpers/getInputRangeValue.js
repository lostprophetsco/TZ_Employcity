import throttle from './throttle.js';

const getInputRangeValue = (elementToGet, elementToSet, delay = 0) => {
  const inputRange = document.querySelector(elementToGet);
  const rangeValue = document.querySelector(elementToSet);
  inputRange.addEventListener(
    'input',
    throttle(() => {
      rangeValue.textContent = inputRange.value + ' %';
    }, delay),
  );
};

export default getInputRangeValue;
