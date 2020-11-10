import React, { Component } from "react";
import Header from "./components/header"
import Dish, { Flag } from "./components/dish"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dish/>
      <Flag/>
    </div>
  );
}

export default App;
