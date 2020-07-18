import React from "react";
import "./App.css";

import StartBar from "./components/startMenuBar";

import Resize from "./components/resize";
import ResizableComponent from "./components/ResizableComponent";

function App() {
  return (
    <div className="App">
      <StartBar />
      {/*<Resize />*/}
      <ResizableComponent />
    </div>
  );
}

export default App;
