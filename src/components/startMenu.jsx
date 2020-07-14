import React, { useState } from "react";
import "./startMenu.css";
import github from "../imgs/github.png";
import linkedin from "../imgs/linkedin.png";
import avatar from "../imgs/avatar.jfif";
import waldo from "../imgs/wally.png";

const StartMenu = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="startMenuWrapper">
      <div className="userName noselect">
        <img alt="avatar" id="userAvatar" src={avatar}></img>
        <h1 id="avatarName">Paulo Ricardo da Silva</h1>
      </div>
      <div className="startContentLeft noselect">
        <ul>
          <li
            className="itemList"
            onClick={() => {
              let url = "https://github.com/paulords95";
              const win = window.open(url, "_blank");
              win.focus();
            }}
          >
            <img alt="logo" id="gh" src={github}></img>
            <div className="titleWrap">
              <h1 className="leftTitle">GitHub</h1>
              <h2 className="leftDescription">Meu GitHub</h2>
            </div>
          </li>
          <li
            className="itemList"
            onClick={() => {
              let url = "https://www.linkedin.com/in/paulo-ricardo-97360573/";
              const win = window.open(url, "_blank");
              win.focus();
            }}
          >
            <img alt="logo" id="linkedin" src={linkedin}></img>
            <div className="titleWrap">
              <h1 className="leftTitle">Linkedin</h1>
              <h2 className="leftDescription">Meu Linkedin</h2>
            </div>
          </li>
          <hr></hr>
          <li className="itemList projects">
            <div className="titleWrap">
              <h1 className="leftTitle ">Projetos</h1>
            </div>
          </li>
          <li
            className="itemList waldo"
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseOver={() => {
              if (hover === false) {
                setHover(true);
              }
            }}
          >
            <img alt="logo" id="linkedin" src={waldo}></img>
            <div className="titleWrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://paulords95.github.io/WhereIsWaldo/"
                className="leftTitle"
              >
                Onde está Waldo?
              </a>
              <a
                alt="link"
                id="waldoCode"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/paulords95/WhereIsWaldo"
              > </a>
            </div>
            <a
              alt="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/paulords95/WhereIsWaldo"
              className={` ${hover ? "infoTextShow" : "infoTextHide"}`}
            >
              Repositório no GitHub
            </a>
            <div className={`${hover ? "waldoInfo" : ""}`}></div>
          </li>
        </ul>
      </div>
      <div className="startContentRight"></div>
    </div>
  );
};

export default StartMenu;
