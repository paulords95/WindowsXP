import React, { useEffect } from "react";
import "./ResizableComponent.css";
import { useWindowScroll } from "beautiful-react-hooks";

const ResizableComponent = () => {
  useEffect(() => {
    let isResizing = false;
    const resizeWrap = document.querySelector(".resizableWrap");
    const ne = document.querySelector(".ne");
    const nw = document.querySelector(".nw");
    const sw = document.querySelector(".sw");
    const se = document.querySelector(".se");

    const resizers = document.querySelectorAll(".resizer");
    let currentResizer;

    for (let resizer of resizers) {
      const mouseDown = (e) => {
        currentResizer = e.target;
        isResizing = true;
        let prevX = e.clientX;
        let prevY = e.clientY;
        const mouseMove = (e) => {
          const rect = resizeWrap.getBoundingClientRect();

          if (currentResizer.classList.contains("se")) {
            resizeWrap.style.width = rect.width - (prevX - e.clientX) + "px";
            resizeWrap.style.height = rect.height - (prevY - e.clientY) + "px";
          }

          prevX = e.clientX;
          prevY = e.clientY;
        };
        const mouseUp = () => {
          window.removeEventListener("mousemove", mouseMove);
          window.removeEventListener("mouseup", mouseUp);
          isResizing = false;
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
      };

      window.addEventListener("mousedown", mouseDown);
    }

    ////separador

    const mouseDown = (e) => {
      let prevX = e.clientX;
      let prevY = e.clientY;
      const mouseMove = (e) => {
        if (isResizing === true) {
          console.log("....");
          let newX = prevX - e.clientX;
          let newY = prevY - e.clientY;

          const rect = resizeWrap.getBoundingClientRect();
          resizeWrap.style.left = rect.left - newX + "px";
          resizeWrap.style.top = rect.top - newY + "px";

          prevX = e.clientX;
          prevY = e.clientY;
        }
      };
      const mouseUp = () => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("moveup", mouseUp);
      };
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    };
    resizeWrap.addEventListener("mousedown", mouseDown);
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
