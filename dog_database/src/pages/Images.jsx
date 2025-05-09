import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavigationMenu from '../components/NavigationMenu.jsx';
import ImageLoad from '../components/ImageLoad.jsx';
// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

function Images() {
    return <div className="MainFont">
      <NavigationMenu />
      <ImageLoad />
      </div>
  }

export {Images}