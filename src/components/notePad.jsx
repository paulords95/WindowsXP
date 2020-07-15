import React from "react";
import "./notePad.css";

const NotePad = (e) => {
  return (
    <div className="notepadContainer">
      {/* <div id="borderOne" />
      <div id="borderTwo" />
      <div id="borderThree" />
      <div id="borderFour" /> */}
      <h3>Sem títuo - Bloco de Notas</h3>
      <div className="closePad">X</div>
      <div className="maximizePad">
        <span></span>
      </div>
      <div className="minimizePad">
        <span></span>
      </div>
      <div className="options"></div>
      <div className="padContent"></div>
    </div>
  );
};

export default NotePad;
