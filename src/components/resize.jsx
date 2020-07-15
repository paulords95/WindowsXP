import React from "react";
import { Resizable } from "re-resizable";
import NotePad from "./notePad";
import "./resize.css";

//usa essa biblioteca https://github.com/bokuweb/re-resizable

const style = {
  display: "flex",
  alignItems: "center",
  top: 40,
  margin: "0 auto",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};
const Resize = () => {
  return (
    <div className="wrap">
      <Resizable
        style={style}
        minHeight="100"
        minWidth="320"
        defaultSize={{
          width: "20%",
          height: 200,
        }}
      >
        <NotePad />
      </Resizable>
    </div>
  );
};

export default Resize;
