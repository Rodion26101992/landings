import React from "react";
import BoxImg from "../../imgs/svg/box_bomile.svg";
import ArrowImg from "../../imgs/black-friday/arrow-bottom.svg";
import "./StepTwo.scss";
import PresentComponent from "../present/Present";

export default function StepTwoBlackComponent() {
    return <div className="black_friday_step_2">
        <div className="box_step_2">
            <div className="wrapper_text">
                <p>Обирай безкоштовну</p>
            <p>доставку Justin</p>
            </div>
            <img id="boxImg" src={BoxImg} alt="boxImg"/>
        </div>
        <p>Вигравай призи</p>
        <PresentComponent/>
        <div className="wrapperLink">
            <img src={ArrowImg} alt="arrowImg"/>
            <a href="https://docs.google.com/document/d/19Wl_8e7VjHwqOCvYqTiPm_u49_nIA8GjuZ1z9ei3iPM/edit"
               target="_blank">
                <button>
                    Деталі акції
                </button>
            </a>
        </div>
    </div>
}