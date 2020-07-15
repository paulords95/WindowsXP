import React from 'react';
import './App.css';
import NotePad from '../src/components/notePad'


import StartBar from './components/startMenuBar'


function App() {


  return (
    <div className="App">
        <StartBar />
        <NotePad />
    </div>
  );
}

export default App;
