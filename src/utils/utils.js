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
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func(...args), duration);
  };
};
