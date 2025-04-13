import React from "react";
import ReactDOM from "react-dom";
import SecondWave from "../SecondWave.jpg";
import "../App.css";

function ThanksWave() {
    return <>

<div className="text-center">
    <div className="ThanksWaveOverlay">
        <div className="ThanksWaveText">Thanks for Visiting!</div>
    </div>
        <img src={SecondWave} alt="Dog Waving" className="rounded" width="250" height="250"/>
</div>
</>
}

export default ThanksWave;