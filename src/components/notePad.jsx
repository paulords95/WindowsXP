import React from "react";
import "./notePad.css";

const NotePad = (e) => {
  return (
    <div className="notepadContainer">
      <h3>Sem títuo - Bloco de Notas</h3>
      <div className="closePad">X</div>
      <div className="maximizePad">
        <span></span>
      </div>
      <div className="minimizePad">
        <span></span>
      </div>
      <div className="options">
        <ul className="fileTab">
          <li>Arquivo</li>
          <li>Editar</li>
          <li>Formatar</li>
          <li>Exibir</li>
          <li>Ajuda</li>
        </ul>
      </div>
      <div className="padContent">
        <textarea name="notes" id="note" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default NotePad;
