import React, {useState} from "react";
import "./StepOne.style.scss";
import arrayImgs from "../../imgs/deliver/index";

export default function StepOneDeliver() {

    return <div className="step_one_deliver">
        <hr/>
        <div className="wrapper_box_deliver">
            <img src={arrayImgs.Message} alt="latter"/>
            <div className="wrapper_text">
                <h3>Для отримання посилки потрібно
                    мати один з цих документів:</h3>
            </div>
        </div>
    </div>
}