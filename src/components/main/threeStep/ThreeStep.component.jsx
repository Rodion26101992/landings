import React from "react";
import ThreeNumberImg from "../../../imgs/svg/three-number.svg"
import ArrowImg from "../../../imgs/svg/arrow_bottom.svg"
import FireImg from "../../../imgs/svg/fire.svg";
import ShopImg from "../../../imgs/svg/shops.svg";
import MiniDollarImg from "../../../imgs/svg/mini_dollar.svg";
import BigDollarImg from "../../../imgs/svg/angel.svg";
import "./ThreeStep.scss";


export default function ThreeStepComponent() {
    return <div className="three_step">
        <div className="wrapper_box">
            <img className="mini_dollar" src={MiniDollarImg} alt={MiniDollarImg.toString()}/>
            <img className="big_dollar" src={BigDollarImg} alt={BigDollarImg.toString()}/>
            <img className="shop" src={ShopImg} alt={ShopImg.toString()}/>
        </div>
        <div className="wrapper_info">
            <img className="three_number" src={ThreeNumberImg} alt={ThreeNumberImg.toString()}/>
            <div className="wrapper_title">
                <h3>Вигравай призи
                    <img className="fire_three" src={FireImg} alt={FireImg.toString()}/>
                </h3>
            </div>
            <div>
                <img className="arrow_bottom" src={ArrowImg} alt={ArrowImg.toString()}/>
            </div>
        </div>

    </div>
}