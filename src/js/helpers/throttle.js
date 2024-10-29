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
