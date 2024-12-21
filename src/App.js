import { useEffect, useRef } from "react";
import Circle from "./Circle";
import NoFragment from "./NoFragment";
import UpdateTimer from "./UpdateTimer";
import BulletFireEx from "./BulletFireEx";
import Explorer from "./expolorer/Explorer";
// import { debounceFunc, throttleFunction } from "./utils/utils";

function App() {
  const circleRef = useRef();

  const handleMouseMovement = (e) => {
    const XPosition = `${e?.clientX}px`;
    const YPosition = `${e?.clientY}px`;
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
        {/* <Circle ref={circleRef} /> */}
      </div>
      {/* <NoFragment />
      <UpdateTimer />
      <BulletFireEx /> */}
      <Explorer />
    </div>
  );
}

export default App;
