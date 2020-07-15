import React from "react";
import "./App.css";

import StartBar from "./components/startMenuBar";

import Resize from "./components/resize";

function App() {
  return (
    <div className="App">
      <StartBar />
      <Resize />
    </div>
  );
}

export default App;
