import React from "react";
import "./StepTwoStyle.scss";
import BoxImg from "../../imgs/halloween/box-halloween.svg";
import WebImg from "../../imgs/halloween/left-web.png";


export default function StepTwoComponent() {
    return <div className="step_two_component_halloween">
        <img className="web_step" src={WebImg} alt="WebImg"/>
        <img src={BoxImg} alt="boxImg"/>
        <div className="boxTitle">
            <h3>2 крок</h3>
            <p className="whiteColor">Обирай безкоштовну</p>
            <p className="wrapperBlue">доставку justin</p>
        </div>
    </div>
}