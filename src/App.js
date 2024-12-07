import { useEffect, useRef } from "react";
import Circle from "./Circle";
// import { debounceFunc, throttleFunction } from "./utils/utils";

function App() {
  const circleRef = useRef();

  const handleMouseMovement = (e) => {
    const XPosition = `${e?.clientX - 30}px`;
    const YPosition = `${e?.clientY - 30}px`;
    if (circleRef.current) {
      setTimeout(() => {
        circleRef.current.style.top = YPosition;
        circleRef.current.style.left = XPosition;
      }, 200);
    }
  };

  return (
    <div
      className="App"
      onMouseMove={handleMouseMovement}
      style={{ height: "100vh", position: "relative" }}
    >
      <div>
        <h1>Hello</h1>
        <Circle ref={circleRef} />
      </div>
    </div>
  );
}

export default App;
