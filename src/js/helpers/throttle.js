/**
 * Returns a function that will be called at most once per given delay.
 *
 * The returned function will invoke the given callback function with the
 * given arguments, but no more often than once per given delay. If the
 * returned function is called again before the given delay has passed, the
 * callback function will not be called until the given delay has passed.
 *
 * @param {Function} callback - The function to be called at most once per
 *   given delay.
 * @param {number} delay - The minimum time (in milliseconds) to wait between
 *   invocations of the given callback function.
 *
 * @returns {Function} A function that will be called at most once per given
 *   delay.
 */
const throttle = (callback, delay) => {
  let isThrottled = false;
  let lastRun;

  return (...args) => {
    if (!isThrottled) {
      callback(...args);
      isThrottled = true;
      lastRun = Date.now();
    } else {
      clearTimeout(lastRun);
      lastRun = setTimeout(() => {
        callback(...args);
        isThrottled = false;
      }, delay);
    }
  };
};

export default throttle;
