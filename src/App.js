import './App.css';
import Test from "./view";
import {Link, useLocation } from 'react-router-dom';
import Nav from "./view/nav";

function App( props: any ) {


  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
    </div>
  );
}

export default App;
