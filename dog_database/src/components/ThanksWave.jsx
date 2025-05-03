import React from "react";
import ReactDOM from "react-dom";
import Puppy from "../Puppy.jpg";
import "../App.css";

function ThanksWave() {
    return <>

<div className="text-center">
    <div className="ThanksWaveOverlay">
        <div className="ThanksWaveText">Thanks for Visiting!</div>
    </div>
        <img src={Puppy} alt="Dog Smiling" className="rounded" width="250" height="336"/>
</div>
</>
}

export default ThanksWave;