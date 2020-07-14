import React, { useState } from "react";
import "./startMenuBar.css";
import logo from "../imgs/logo.png";
import soundlogo from "../imgs/soundlogo.png";
import defender from "../imgs/defender.png";
import StartMenu from "./startMenu";

const updateTime = () => {
  let date = new Date();

  const hour = () => {
    if (date.getHours() < 10) {
      return "0" + date.getHours().toString();
    } else {
      return date.getHours();
    }
  };

  const minutes = () => {
    if (date.getMinutes() < 10) {
      return "0" + date.getMinutes().toString();
    } else {
      return date.getMinutes();
    }
  };

  return hour() + ":" + minutes();
};

const MenuBar = (props) => {
  const [time, setTime] = useState({
    time: updateTime(),
  });

  const [startMenu, setStartMenu] = useState(false);

  setTimeout(() => {
    setTime({
      time: updateTime(),
    });
  }, 1000);

  const RenderStarMenu = () => {
    if (startMenu) {
      console.log('foi')
      return <StartMenu />;
    }
  };

  return (
    <div className="container">
      <div className='desktop' onClick={()=> {
        setStartMenu(false)
      }}></div>
      <div>{RenderStarMenu()}</div>
      <div className="menubar">
        <div
          className="startMenu noselect"
          onClick={() => {
            if (startMenu) {
              setStartMenu(false);
            } else {
              setStartMenu(true);

            }
          }}
        >
          <img alt="logo" src={logo}></img>
          <h1>Inciar</h1>
        </div>
        <div className="toolsWrap">
          <img alt="defender" id="defender" src={defender}></img>
          <img alt="sound" id="sound" src={soundlogo}></img>
          <div>{time.time}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
