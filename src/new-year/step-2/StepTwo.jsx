import React from "react";
import "./StyleTwo.style.scss";
import arrayImgs from "../../imgs/new-year";

export default function StepTwo() {
    return <div className="step_two_new_year">
        <img id="boxLeft" src={arrayImgs.BoxLeft} alt="boxLeft"/>
        <img id="boxBig" src={arrayImgs.BoxBig} alt="boxBig"/>
        <img id="mobileBoxMain" src={arrayImgs.MobileBoxMain} alt="mobileBoxMain"/>
        <img id="mobileBoxTwoStep" src={arrayImgs.MobileBoxTwoStep} alt="mobileBoxTwoStep"/>
        <img id="mobileChristmasToy" src={arrayImgs.MobileChristmasToy} alt="mobileChristmasToy"/>
        <div className="wrapperImg">
            <img id="boy" src={arrayImgs.Boy} alt="boy"/>
            <img id="mobileBoy" src={arrayImgs.MobileBoy} alt="boy"/>
        </div>
        <div className="wrapperText">
            <h3> Він існує! </h3>
            <h3> І ми це доведемо! </h3>
            <p>Принаймні твоїй дитині )</p>
        </div>
    </div>
}