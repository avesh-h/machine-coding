export const throttleFunction = (func, duration) => {
  let prevTime = 0;

  return (...args) => {
    const currentTime = new Date().getTime();
    if (currentTime - prevTime < duration) {
      return;
    }
    prevTime = currentTime;
    const vals = func(...args);
    return vals;
  };
};

export const debounceFunc = (func, duration) => {
  let timerId;

  return (...args) => {
    if (timerId) {
      // if timer is already there and continue and user keep clicking so again we will clear the current continued  timer by clearTimeout function and reset the new timer.(after if you can see we again set the setTimeout because user doesn't stop firing event.)
      clearTimeout(timerId);
    }
    // IF user is paused for the duration time that provided then only after the function will be called.
    timerId = setTimeout(() => func(...args), duration);
  };
};

export const throttleFuntionTwo = (fn, delay) => {
  let timer;

  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
