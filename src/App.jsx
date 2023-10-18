import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Context from "./Store/CreateContext";

function App() {
  return (
    <div className="app">
      <Context>
      <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/results" Component={SearchResults} />
      </Routes>
      </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
