import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ourDebounceLogic = (func, delay) => {
  let timerId;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func(...args), delay);
  };
};

const ourThrottleGunLogic = (func, delay) => {
  // let prevTime = 0;

  // return (...args) => {
  //   const currTime = new Date().getTime();
  //   console.log("pppppppppppp", prevTime);
  //   if (currTime - prevTime > delay) {
  //     func(...args);
  //     prevTime = currTime;
  //   }
  //   console.log("elseeeeeee");
  // };

  let timer;

  return (...args) => {
    console.log("timerrrrrrrrr", timer);
    if (!timer) {
      func(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

const BulletFireEx = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const debounceCalledRef = useRef(0);

  // const [debounceText, setDebounceText] = useState("");
  // const [throttleText, setThrottleText] = useState("");

  // Memoized Event Handlers
  // const handleDebounceCount = useMemo(() => {
  //   console.log("ddddddddddddd", debounceCalledRef.current);
  //   debounceCalledRef.current = debounceCalledRef.current + 1;
  //   return ourDebounceLogic(() => {
  //     setDebounceCount((c) => c + 1);
  //   }, 1000);
  // }, []);

  const handleThrottleCount = () => {
    setThrottleCount((c) => c + 1);
  };

  const handleDebounceCount = () => {
    setDebounceCount(debounceCalledRef.current);
  };

  // const handleThrottleText = useCallback(
  //   ourThrottleGunLogic((e) => {
  //     setThrottleText(e.target.value);
  //   }, 1000),
  //   []
  // );

  // So useMemo is use to memoize the value for not do re-computation while re-rendering but here in example you can see that we use useMemo and return the funtion value to memoize
  // const handleThrottleText = useMemo(
  //   () =>
  //     ourThrottleGunLogic((e) => {
  //       setThrottleText(e.target.value);
  //     }, 1000),
  //   []
  // );

  const debounceChange = useCallback(
    ourDebounceLogic(handleDebounceCount, 1000),
    []
  );

  const throttleChange = useCallback(
    ourThrottleGunLogic(handleThrottleCount, 1000),
    []
  );

  return (
    <div>
      <div>Normal Count:{normalCount}</div>
      <button onClick={() => setNormalCount((c) => c + 1)}>NormalInc</button>
      <div>Debounce Count:{debounceCount}</div>
      <button
        onClick={() => {
          debounceCalledRef.current = debounceCalledRef.current + 1;
          debounceChange();
        }}
      >
        DebounceInc
      </button>
      <div>Throttle Count:{throttleCount}</div>
      <button onClick={throttleChange}>ThrottleInc</button>

      {/* <input type="text" onChange={handleDebounceText} />
      <input type="text" onChange={handleThrottleText} />
      <div>{debounceText}</div>
      <div>{throttleText}</div> */}
    </div>
  );
};

export default BulletFireEx;
