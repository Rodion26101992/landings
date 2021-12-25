import React, {useState} from "react";
import "./StepOne.style.scss";
import arrayImgs from "../../imgs/deliver/index";

export default function StepOneDeliver() {

    return <div className="step_one_deliver">
        <div className="wrapper_box_deliver">
            <img src={arrayImgs.Woman} alt="woman"/>
            <div className="wrapper_text">
                <h3>Які документи потрібні для отримання посилки?</h3>
            </div>
        </div>
        <hr/>
    </div>
}