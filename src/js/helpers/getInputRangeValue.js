import throttle from './throttle.js';

/**
 * @function getInputRangeValue
 * @description Returns a function that will be called when range input changes.
 *              The returned function will update the given element with the
 *              current value of the range input.
 * @param {string} elementToGet CSS selector of the range input element.
 * @param {string} elementToSet CSS selector of the element to set the value to.
 * @param {number} delay The minimum time (in milliseconds) to wait between
 *                       invocations of the returned function. If the returned
 *                       function is called again before the given delay has
 *                       passed, the returned function will not be called until
 *                       the given delay has passed.
 */
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
