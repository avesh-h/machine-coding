import React from "react";
import { forwardRef } from "react";

const Circle = forwardRef(({ XPosition, YPosition }, ref) => {
  return (
    <div
      style={{
        background: "red",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        position: "absolute",
        // top: YPosition || 0,
        // left: XPosition || 0,
      }}
      ref={ref}
    ></div>
  );
});

export default Circle;
