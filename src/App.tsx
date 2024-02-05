import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Router} from "./view/router";
import {BackHome} from "./view";


function App() {

  return (
      <div className="app">
        <BrowserRouter>
          <BackHome/>
          <Router/>
        </BrowserRouter>
      </div>
  );
}

export default App;
