import React from "react";

import Paint from "./paint";

const ResizablePaint = () => {
  const moveElement = () => {
    const mouseDown = (e) => {
      let prevX = e.clientX;
      let prevY = e.clientY;
      const mouseMove = (e) => {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = document
          .querySelector(".resizableWrap")
          .getBoundingClientRect();
        document.querySelector(".resizableWrap").style.left =
          rect.left - newX + "px";
        document.querySelector(".resizableWrap").style.top =
          rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
      };
      const mouseUp = () => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("moveup", mouseUp);
      };
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    };
    document
      .querySelector(".paintHeader")
      .addEventListener("mousedown", mouseDown);
  };

  setTimeout(() => {
    moveElement();
  }, 50);

  return (
    <div className="containerPaint">
      <div className="resizableWrap">
        <Paint />
      </div>
    </div>
  );
};

export default ResizablePaint;
