import React, {useState, useEffect} from "react";
import "./paint.css";



const Paint = () => {
  const [color, setColor] = useState('#010000')
  
  const colorChange = (clr) => {
    setColor(clr)
    const ctx = document.querySelector(".canvas").getContext("2d");
    console.log(color)
    ctx.strokeStyle = color
    
  }

  useEffect(()=> {
      colorChange(color)
  }, [color])

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
  
    const draw = (e, clr) => {
      if (!painting) return;
      ctx.lineWidth = "10";
      ctx.lineCap = "round"
    
      
  
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
  useEffect (()=> {
    document.querySelector('.selectedColor').style.backgroundColor = color
  })

  return (
    <div className="paintContainer">
      <div className="paintApp">
        <div className="paintHeader"></div>
        <div className="paintOptions">
          <div className="drawingSelector"></div>
          <div className="colorSelector">
            <div className="colorPallet">
              <div id="one" onClick={()=> {colorChange('#010000')}}></div>
              <div id="two" onClick={()=> {colorChange('#858182')}}></div>
              <div id="three" onClick={()=> {colorChange('#8C0212')}}></div>
              <div id="four" onClick={()=> {colorChange('#EE221B')}}></div>
              <div id="five" onClick={()=> {colorChange('#E2EEFC')}}></div>
              <div id="six" onClick={()=> {colorChange('#FFF410')}}></div>
              <div id="seven" onClick={()=> {colorChange('#21B350')}}></div>
              <div id="eigth" onClick={()=> {colorChange('#00A7E6')}}></div>
              <div id="nine" onClick={()=> {colorChange('#08A5F4')}}></div>
              <div id="ten" onClick={()=> {colorChange('#404AD0')}}></div>
              <div id="eleven" onClick={()=> {colorChange('#A949AD')}}></div>
              <div id="twelve" onClick={()=> {colorChange('#FFFDFC')}}></div>
              <div id="thirteen" onClick={()=> {colorChange('#C9C7C8')}}></div>
              <div id="fourteen" onClick={()=> {colorChange('#BD7C60')}}></div>
              <div id="fifteen" onClick={()=> {colorChange('#FFAFD0')}}></div>
              <div id="sixteen" onClick={()=> {colorChange('#F5D504')}}></div>
              <div id="seventeen" onClick={()=> {colorChange('#F5E8B4')}}></div>
              <div id="eighteen" onClick={()=> {colorChange('#BAE345')}}></div>
              <div id="nineteen" onClick={()=> {colorChange('#9FDEF0')}}></div>
              <div id="twenty" onClick={()=> {colorChange('#6F98C6')}}></div>
              <div id="twentyOne" onClick={()=> {colorChange('#CCC3EE')}}></div>
              <div id="twentyTwo" onClick={()=> {colorChange('#7387fb')}}></div>
              <div id="twentyThree" onClick={()=> {colorChange('#9f962c')}}></div>
              <div id="twentyFour" onClick={()=> {colorChange('#f77f1d')}}></div>
              <div id="twentyFive" onClick={()=> {colorChange('#588e6e')}}></div>
              <div id="twentySix" onClick={()=> {colorChange('#99f4d6')}}></div>
              <div id="twentySeven" onClick={()=> {colorChange('#54a5d0')}}></div>
              <div id="twentyEight" onClick={()=> {colorChange('#8b3609')}}></div>
              <div id="twentyNine" onClick={()=> {colorChange('#6eca59')}}></div>
              <div id="thirty" onClick={()=> {colorChange('#ceb37f')}}></div>
              <div id="thirtyOne" onClick={()=> {colorChange('#550ad2')}}></div>
              <div id="thirtyTwo" onClick={()=> {colorChange('#4668ea')}}></div>
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
