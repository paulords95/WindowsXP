import React, { useState } from "react";
import "./App.css";

import StartBar from "./components/startMenuBar";

import Resize from "./components/resize";
import notepadLogo from "./imgs/notepad.png";
import paintLogo from "./imgs/paint.png";

import Paint from "./components/paint";

function App() {
  const [dclick, setDclick] = useState(false);

  const renderResize = () => {
    if (dclick) {
      return (
        <div className="notepadRender">
          <Resize />
        </div>
      );
    }

    if (!dclick) {
      return <div></div>;
    }
  };

  const actionsMenu = () => {
    const close = document.querySelector(".closePad");
    close.addEventListener("click", () => {
      setDclick(false);
    });
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="App">
        <div className="appSpace">{renderResize()}</div>
        {/*<Paint />*/}
        <StartBar />
        <div
          className={`${dclick ? "containerIconClicked" : "containerIcon"} `}
        >
          <h1 className="iconName noselect">Bloco de Notas</h1>
          <img
            src={notepadLogo}
            alt="logo"
            onDoubleClick={() => {
              if (!dclick) {
                setDclick(true);
                setTimeout(() => {
                  actionsMenu();
                }, 50);
              }
            }}
            className={`notepadNormal ${dclick ? "notepadClicked" : ""}`}
          ></img>
        </div>
        <div
          className={`${
            dclick ? "containerIconClickedPaint" : "containerIconPaint"
          } `}
        >
          <h1 className="iconNamePaint noselect">Paint</h1>
          <img
            src={paintLogo}
            alt="logo"
            onDoubleClick={() => {
              if (!dclick) {
                setDclick(true);
                setTimeout(() => {
                  actionsMenu();
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
