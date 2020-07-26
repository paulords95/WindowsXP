import React, { useState } from "react";
import "./App.css";

import StartBar from "./components/startMenuBar";

import Resize from "./components/resize";
import notepadLogo from "./imgs/notepad.png";
import paintLogo from "./imgs/paint.png";

import PaintResizable from "./components/paintResizable";

function App() {
  const [dclick, setDclick] = useState({
    notePad: false,
    paint: false,
  });

  const renderResize = () => {
    if (dclick.notePad) {
      return (
        <div className="notepadRender">
          <Resize />
        </div>
      );
    }

    if (dclick.paint) {
      return (
        <div className="paintRender">
          <PaintResizable load={dclick.paint} />
        </div>
      );
    }

    if (!dclick.notePad || dclick.paint) {
      return <div></div>;
    }
  };

  const actionsMenuNotepad = () => {
    const close = document.querySelector(".closePad");
    close.addEventListener("click", () => {
      setDclick({
        notePad: false,
      });
    });
  };

  const actionsMenuPaint = () => {
    const close = document.querySelector(".closePaint");
    close.addEventListener("click", () => {
      setDclick({
        paint: false,
      });
    });
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="App">
        <div className="appSpace">{renderResize()}</div>
        <StartBar />
        <div
          className={`${
            dclick.notePad ? "containerIconClicked" : "containerIcon"
          } `}
        >
          <h1 className="iconName noselect">Bloco de Notas</h1>
          <img
            src={notepadLogo}
            alt="logo"
            onDoubleClick={() => {
              if (!dclick.notePad) {
                setDclick({
                  notePad: true,
                });
                setTimeout(() => {
                  actionsMenuNotepad();
                }, 50);
              }
            }}
            className={`notepadNormal ${
              dclick.notePad ? "notepadClicked" : ""
            }`}
          ></img>
        </div>
        <div
          className={`${
            dclick.paint ? "containerIconClickedPaint" : "containerIconPaint"
          } `}
        >
          <h1 className="iconNamePaint noselect">Paint</h1>
          <img
            src={paintLogo}
            alt="logo"
            onDoubleClick={() => {
              if (!dclick.paint) {
                setDclick({
                  paint: true,
                });
                setTimeout(() => {
                  actionsMenuPaint();
                }, 50);
              }
            }}
            className={`paintNormal`}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
