import React from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cards from "./components/Cards"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home header="Hello World"/>
      <Cards/>
    </div>
  );
}

export default App;
