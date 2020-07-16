import React from "react";
import ResizePanel from "react-resize-panel";

import Notepad from "./notePad";

import style from "./resize.css";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

const Resize = () => {
  const handleRemove = () => {
    const sideHandle = document.querySelectorAll(
      ".ResizePanel-module_ResizeBarHorizontal__3TBZ5 > div"
    );
    const topHandle = document.querySelectorAll(
      ".ResizePanel-module_ResizeBarVertical__2LUZV > div"
    );
    for (let i of sideHandle) {
      i.style.opacity = "0";
    }

    for (let i of topHandle) {
      i.style.opacity = "0";
    }
  };

  setTimeout(() => {
    handleRemove();
  }, 50);

  return (
    <div className={cx("container1")}>
      <ResizePanel direction="s">
        <div className={cx("header", "panel")}>
          <span></span>
        </div>
      </ResizePanel>
      <div className={cx("body")}>
        <ResizePanel direction="e" style={{ flexGrow: "1" }}>
          <div className={cx("sidebar", "withMargin", "panel")}>
            <br /> <br />
          </div>
        </ResizePanel>
        <div className={cx("content", "panel")}>
          <Notepad />
        </div>
        <ResizePanel
          direction="w"
          style={{ width: "400px" }}
          handleClass={style.customHandle}
          borderClass={style.customResizeBorder}
        >
          <div className={cx("sidebar", "panel")}>
            <br />
            <br />
          </div>
        </ResizePanel>
      </div>

      <ResizePanel direction="n" style={{ height: "200px" }}>
        <div className={cx("footer", "panel")}>
          <div className={cx("footerArea")}>
            <div className={cx("footerAreaContent")}>
              <span></span>
            </div>
          </div>
          <div className={cx("footerBottomBar")}></div>
        </div>
      </ResizePanel>
    </div>
  );
};

export default Resize;
