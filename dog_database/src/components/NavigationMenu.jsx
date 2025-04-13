import React from "react";
import ReactDOM from "react-dom";
import MainLogo from "../Logo2.png";
import "../App.css";

function NavigationMenu() {
  return <> 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img src={MainLogo} alt="Logo" width="25" height="50" class="d-inline-block align-text-top"/>
      <a className="navbar-brand" href="#">Dog Database</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Search for Dog Breeds</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Dog Content</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <h1 className="Title">Welcome to the Dog Database!</h1>
  <h2 className="FirstSection">For my ITMD504 project, I'll share data and content on some of my favorite dog breeds.</h2>
</>    
}

export default NavigationMenu;