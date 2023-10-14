import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import RowPost from "./Components/RowPost/RowPost";
import { Originals, Action, Comedy, Horror } from "./urls";


function App() {
  return (
    <div className="app">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title={'Trending'} />
     <RowPost url={Action} title={'Action'} isSmall />
     <RowPost url={Horror} title={'Horror'} isSmall />
     <RowPost url={Comedy} title={'Comedy'} isSmall />
    </div>
  );
}

export default App;
