import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MainLogo from "../Logo2.png";
import "../App.css";

function NavigationMenu() {
  return <> 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img src={MainLogo} alt="Logo" width="25" height="50" class="d-inline-block align-text-top"/>
      <div className="SiteIcon">Dog Database</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="navbar-brand">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Search" className="navbar-brand">Search for Dog Breeds</Link>
          </li>
          <li className="nav-item">
            <Link to="/Content" className="navbar-brand">Dog Content</Link>
          </li>
        </ul>
    </div>
  </nav>

</>    
}

export default NavigationMenu;