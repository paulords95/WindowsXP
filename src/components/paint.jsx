import React, { useEffect } from "react";
import "./paint.css";

window.addEventListener("load", () => {
  const canvas = document.querySelector(".canvas");
  const board = document.querySelector(".drawingBoard");
  const ctx = canvas.getContext("2d");

  const setSize = () => {
    canvas.width = board.offsetWidth;
    canvas.height = board.offsetHeight;
  };

  setSize();

  let painting = false;

  const startPaint = () => {
    painting = true;
  };

  const stopPainting = () => {
    painting = false;
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!painting) return;
    ctx.lineWidth = "10";
    ctx.lineCap = "round";
    ctx.strokeStyle = "red";

    var xy = getMousePos(e);

    ctx.lineTo(xy.x, xy.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xy.x, xy.y);
  };

  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mousemove", draw);
});

function getMousePos(evt) {
  const canvasName = document.querySelector(".canvas");
  var rect = canvasName.getBoundingClientRect();

  var X =
    (evt.clientX - rect.left) / (canvasName.clientWidth / canvasName.width);
  var Y =
    (evt.clientY - rect.top) / (canvasName.clientHeight / canvasName.height);
  X = Math.ceil(X);
  Y = Math.ceil(Y);

  return {
    x: X,
    y: Y,
  };
}

const setSize = () => {
  const canvas = document.querySelector(".canvas");
  const board = document.querySelector(".drawingBoard");
  canvas.width = board.offsetWidth;
  canvas.height = board.offsetHeight;
};

window.addEventListener("resize", setSize);

const Paint = () => {
  return (
    <div className="paintContainer">
      <div className="paintApp">
        <div className="paintHeader"></div>
        <div className="paintOptions"></div>
        <div className="drawingBoard"></div>
        <canvas style={{ zIndex: 10 }} className="canvas"></canvas>
      </div>
    </div>
  );
};

export default Paint;
