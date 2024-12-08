import React, { useState } from "react";

const UpdateTimer = () => {
  const [count, setCount] = useState(0);
  const startTimer = () => {
    setInterval(() => {
      setCount(count + 1);
    }, 500);
  };
  return (
    <div>
      count : {count}
      <button onClick={startTimer}>Start increment</button>
    </div>
  );
};

export default UpdateTimer;
