import React from "react";
import "./optionMenu.css";

const OptionMenu = (props) => {
  return (
    <div>
      <ul id="fileList">
        <li>{props.option1}</li>
        <li>{props.option2}</li>
        <li>{props.option3}</li>
        <li>{props.option4}</li>
        <hr></hr>
        <li>{props.option5}</li>
        <li>{props.option6}</li>
        <hr></hr>
        <li style={{ color: "black" }}>{props.option7}</li>
      </ul>
    </div>
  );
};
export default OptionMenu;
