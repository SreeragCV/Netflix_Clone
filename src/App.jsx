import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Route exact path="/">
       <Home />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
