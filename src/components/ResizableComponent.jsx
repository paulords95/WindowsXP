import React, { useEffect } from "react";
import "./ResizableComponent.css";

const dragAndDrop = () => {
  const resizeWrap = document.querySelector(".resizableWrap");
  const ne = document.querySelector(".ne");
  const nw = document.querySelector(".nw");
  const sw = document.querySelector(".sw");
  const se = document.querySelector(".se");

  const mouseDown = (e) => {
    let prevX = e.clientX;
    let prevY = e.clientY;
    const mouseMove = (e) => {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      const rect = resizeWrap.getBoundingClientRect();
      resizeWrap.style.left = rect.left - newX + "px";
      resizeWrap.style.top = rect.top - newY + "px";

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
  resizeWrap.addEventListener("mousedown", mouseDown);
};

const ResizableComponent = () => {
  useEffect(() => {
    dragAndDrop();
  });

  return (
    <div className="sizeContainer">
      <div className="resizableWrap">
        <div className="resizer ne"></div>
        <div className="resizer nw"></div>
        <div className="resizer sw"></div>
        <div className="resizer se"></div>
      </div>
    </div>
  );
};

export default ResizableComponent;
