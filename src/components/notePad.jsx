import React, { useState } from "react";
import "./notePad.css";
import OptionMenu from "./optionMenu";

const NotePad = (e) => {
  const [click, setClick] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  const showFileTabOptions = () => {
    if (click.menu1) {
      return (
        <OptionMenu
          option1="Novo"
          option2="Abrir"
          option3="Salvar"
          option4="Salvar Como"
          option5="Configurar Página"
          option6="Imprimir"
          option7="Sair"
        />
      );
    }
  };

  const showEditTabOptions = () => {
    if (click.menu2) {
      return (
        <OptionMenu
          option1="Desfazer"
          option2="Recortar"
          option3="Copiar"
          option4="Copiar"
          option5="Excluir"
          option6="Localizar"
          option7="Substituir"
        />
      );
    }
  };

  const hideMenuOnClick = () => {
    const notePad = document.querySelector(".notepadContainer");
    const desktop = document.querySelector(".desktop");
    notePad.addEventListener("click", () => {
      if (
        click.menu1 ||
        click.menu2 ||
        click.menu3 ||
        click.menu4 ||
        click.menu5
      ) {
        setClick({
          menu1: false,
          menu2: false,
          menu3: false,
          menu4: false,
          menu5: false,
        });
      }
    });

    desktop.addEventListener("click", () => {
      if (
        click.menu1 ||
        click.menu2 ||
        click.menu3 ||
        click.menu4 ||
        click.menu5
      ) {
        setClick({
          menu1: false,
          menu2: false,
          menu3: false,
          menu4: false,
          menu5: false,
        });
      }
    });
  };

  setTimeout(() => {
    hideMenuOnClick();
  }, 50);

  return (
    <div className="notepadContainer">
      <h3>Sem título - Bloco de Notas</h3>
      <div className="closePad">X</div>
      <div className="maximizePad">
        <span></span>
      </div>
      <div className="minimizePad">
        <span></span>
      </div>
      <div className="options">
        <ul className="fileTab">
          <li>
            <div
              className="file"
              onClick={() => {
                if (click.menu1 === false) {
                  setClick({
                    menu1: true,
                  });
                }

                if (click.menu1) {
                  setClick({
                    menu1: false,
                  });
                }
              }}
            >
              Arquivo
            </div>
            {showFileTabOptions()}
          </li>
          <li>
            <div
              className="edit"
              onClick={() => {
                if (click.menu2 === false) {
                  setClick({
                    menu2: true,
                  });
                }

                if (click.menu2) {
                  setClick({
                    menu2: false,
                  });
                }
              }}
            >
              Editar
              {showEditTabOptions()}
            </div>
          </li>
          <li>
            <div className="format">Formatar</div>
          </li>
          <li>
            <div className="view">Exibir</div>
          </li>
          <li>
            <div className="help">Ajuda</div>
          </li>
        </ul>
      </div>
      <div className="padContent">
        <textarea name="notes" id="note" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default NotePad;
