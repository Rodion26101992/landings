import React from "react";
import "./StepThreeStyle.scss";
import Ghost from "../../imgs/halloween/ghost-three-step_new.png";
import GhostMobile from "../../imgs/halloween/ghost-three-step_mobile.png";
import Pumpkin from "../../imgs/halloween/pumpkin.png";
import TV from "../../imgs/halloween/prizes/tv.png";
import Card from "../../imgs/halloween/prizes/card.png";
import Sandboard from "../../imgs/halloween/prizes/sandboard.png";
import Headphone from "../../imgs/halloween/prizes/headphone.png";
import Moyo from "../../imgs/halloween/moyo-three-step.svg";
import Scull from "../../imgs/halloween/scull.png";
import ScullMobile from "../../imgs/halloween/scull_mobile.png";


export default function StepThreeComponent() {
    return <div className="step_three_component_halloween">
        <img id="scull-mobile" src={ScullMobile} alt="ScullMobile"/>
        <img id="pumpkin-mobile" src={Pumpkin} alt="Pumpkin"/>
        {/*<div className="scull">*/}
        {/*    <img src={Scull} alt="Scull"/>*/}
        {/*</div>*/}
        <div className="box">
            <div className="boxTitle">
                <h3 className="sub_title">Переможці акції:</h3>
            </div>
            <div className="boxBody">                <
                    div className="wrapper_prize jc-left">
                    <img src={GhostMobile} alt="GhostMobile"/>
                </div>
                <div className="wrapper_prize">
                    <div className="box_prize">
                        <img src={TV} alt={TV.toString()}/>
                        <label className="rotateDegRight">ТЕЛЕВІЗОР</label>
                        <div className="champions">
                            <p>421399748</p>
                        </div>
                    </div>
                    <div className="box_prize">
                        <img className="width-mobile-45" src={Sandboard} alt="Sandboard"/>
                        <label className="no_wrap">2 БУТЕРБРОДНИЦІ</label>
                        <div className="champions">
                            <p>421218320</p>
                            <p>421337920</p>
                        </div>
                    </div>

                </div>
                <div className="wrapper_prize">
                    <div className="box_prize">
                        <img src={Card} alt="card"/>
                        <label className="rotateDegRight15">5 СЕРТИФІКАТІВ НА 500 ГРН</label>
                        <div className="champions">
                            <p>421323910</p>
                            <p>421258112</p>
                            <p>421327852</p>
                            <p>421349640</p>
                            <p>421270967</p>
                        </div>
                    </div>
                    <div className="box_prize">
                        <img src={Headphone} alt="Headphone"/>
                        <label className="no_wrap">5 ПАР НАВУШНИКІВ</label>
                        <div className="champions">
                            <p>421246973</p>
                            <p>421062194</p>
                            <p>421347779</p>
                            <p>421171686</p>
                            <p>421381181</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_end-title">
                <label className="end-title">
                    Вітаємо переможців! Найближчим часом з вами зв'яжуться для передачі подарунків.
                </label>
            </div>
        </div>
        {/*<div className="halloween">*/}
        {/*    <img src={Ghost} alt="Ghost"/>*/}
        {/*    <img src={Pumpkin} alt="Pumpkin"/>*/}
        {/*</div>*/}
    </div>
}