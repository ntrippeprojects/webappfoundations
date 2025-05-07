import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home.jsx';
import { Search } from './pages/Search.jsx';
import { Addbreed } from './pages/Addbreed.jsx';

// css and fonts
import "./App.css";
import "./static/fonts/DMSans.ttf";

// second component - accordion, below h2
import AccordionHome from './components/AccordionHome.jsx';

function Pages() {
  return <> 
  <div>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element ={<Home />} />
      <Route path="/search" element ={<Search />} />
      <Route path="/addbreed" element ={<Addbreed />} />
    </Routes>
  </BrowserRouter>
</div>  
</>
}

export default Pages;