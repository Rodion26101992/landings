import React from "react";
import TwoNumberImg from "../../../imgs/svg/two-number.svg"
import ArrowImg from "../../../imgs/svg/arrow_bottom.svg"
import AvailableImg from "../../../imgs/svg/available_box.svg";
import SnowflakeImg from "../../../imgs/svg/snowflake.svg";
import SnowflakeMobileImg from "../../../imgs/svg/snowflake_mobail.svg";
import AngelImg from "../../../imgs/svg/angel.svg";
import BoxMobileImg from "../../../imgs/svg/box_bomile.svg";
import "./TwoStep.scss";


export default function TwoStepComponent() {

    return <div className="two_step">
        <img className="snowflake" src={SnowflakeImg} alt={SnowflakeImg.toString()}/>
        <img className="snowflake_mobile" src={SnowflakeMobileImg} alt={SnowflakeImg.toString()}/>
        <img className="angel" src={AngelImg} alt={AngelImg.toString()}/>
        <div className="wrapper_info">
            <img className="number_two" src={TwoNumberImg} alt={TwoNumberImg.toString()}/>
            <h3>Обирай безкоштовну доставку Justin</h3>
            <div>
                <img className="arrow_bottom" src={ArrowImg} alt={ArrowImg.toString()}/>
            </div>
        </div>
        <div className="wrapper_box">
            <img className="box" src={AvailableImg} alt={AvailableImg.toString()}/>
            <img className="box_mobile" src={BoxMobileImg} alt={BoxMobileImg.toString()}/>
        </div>
    </div>
}