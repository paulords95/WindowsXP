import React, { useState } from "react";
import "./App.css";

import StartBar from "./components/startMenuBar";

import Resize from "./components/resize";
import notepadLogo from "./imgs/notepad.png";

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
    <div className="App">
      <div className="appSpace">{renderResize()}</div>
      <StartBar />
      <div className="containerIcon">
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
    </div>
  );
}

export default App;
