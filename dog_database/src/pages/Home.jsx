import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavigationMenu from '../components/NavigationMenu.jsx';
import HomeHeadings from '../components/HomeHeadings.jsx';
import AccordionHome from '../components/AccordionHome.jsx';
import ThanksWave from '../components/ThanksWave.jsx';

// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

function Home() {
  return <div className="MainFont">
    <NavigationMenu />
    <HomeHeadings />
    <AccordionHome />
    <ThanksWave />
    </div>
}

export {Home};