import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
