import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routerArr from "./view/router";


const router = createBrowserRouter(routerArr)

function App() {


  return (
      <div className="app">
        <RouterProvider  router={router}/>
      </div>
  );
}

export default App;
