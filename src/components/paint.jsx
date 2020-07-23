import React from "react";
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
        <div className="paintOptions">
          <div className="drawingSelector"></div>
          <div className="colorSelector">
            <div className="colorPallet">
              <div id="one"></div>
              <div id="two"></div>
              <div id="three"></div>
              <div id="four"></div>
              <div id="five"></div>
              <div id="six"></div>
              <div id="seven"></div>
              <div id="eigth"></div>
              <div id="nine"></div>
              <div id="ten"></div>
              <div id="eleven"></div>
              <div id="twelve"></div>
              <div id="thirteen"></div>
              <div id="fourteen"></div>
              <div id="fifteen"></div>
              <div id="sixteen"></div>
              <div id="seventeen"></div>
              <div id="eighteen"></div>
              <div id="nineteen"></div>
              <div id="twenty"></div>
              <div id="twentyOne"></div>
              <div id="twentyTwo"></div>
              <div id="twentyThree"></div>
              <div id="twentyFour"></div>
              <div id="twentyFive"></div>
              <div id="twentySix"></div>
              <div id="twentySeven"></div>
              <div id="twentyEight"></div>
              <div id="twentyNine"></div>
              <div id="thirty"></div>
              <div id="thirtyOne"></div>
              <div id="thirtyTwo"></div>
            </div>
          </div>
          <div className="selectedColor"></div>
        </div>
        <div className="drawingBoard"></div>
        <canvas style={{ zIndex: 10 }} className="canvas"></canvas>
      </div>
    </div>
  );
};

export default Paint;
