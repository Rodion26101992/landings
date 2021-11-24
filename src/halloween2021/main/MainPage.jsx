import React from "react";
import "./MainStyle.scss";
import GhostImg from "../../imgs/halloween/ghost.svg";
import TextImg from "../../imgs/halloween/text-main.svg";

export default function MainPageComponent() {
    return <div className="main_component_halloween">
        <div className="box_title">
            <img src={TextImg} alt="textMain"/>
            <p>Лякають високі ціни на доставку?</p>
            <p>Justin рятує, ще й призи дарує!</p>
        </div>
        <img src={GhostImg} alt="ghost"/>
    </div>
}