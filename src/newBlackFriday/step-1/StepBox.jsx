import React from "react";
import BoxImg from "../../imgs/svg/box_bomile.svg";
import Box from "../../imgs/new-black-friday/step_box/Big_BOX.png";
import Title from "../../imgs/new-black-friday/step_box/title.png";
import "./Box.style.scss";

export default function StepBoxComponent() {
    return <div className="black_friday_box">
        <div className="box_step_2">
            {/*<div className="wrapper_text">*/}
            {/*    <p>Обирай безкоштовну </p>*/}
            {/*    <p>доставку Justin</p>*/}
            {/*</div>*/}
            {/*<img src={Title} alt="title"/>*/}
            <img id="boxImg" src={Box} alt="boxImg"/>
        </div>
    </div>
}