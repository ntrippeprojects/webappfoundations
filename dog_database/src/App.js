import React from "react";
import ReactDOM from "react-dom";
import Link from "react-router-dom";
import NavigationMenu from './components/NavigationMenu.jsx';
import ThanksWave from './components/ThanksWave.jsx';

// css and fonts
import "./App.css";
import "./static/fonts/DMSans.ttf";

// second component - accordion, below h2
import AccordionHome from './components/AccordionHome.jsx';

function App() {
  return <div className="MainFont">
    <NavigationMenu />
    <AccordionHome />
    <ThanksWave />
    </div>;
}

export default App