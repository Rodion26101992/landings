import React from "react";
import "./MainPage.scss";
import FireImg from "../../../imgs/svg/fire.svg"
import ArrowImg from "../../../imgs/svg/arrow_bottom.svg"
import ChildImg from "../../../imgs/svg/child_main.svg";

function repeatFire(number) {
    let res = [];
    for (let i = 0; i < number; i++) {
        res.push(<img className="fire_array" src={FireImg} alt={FireImg.toString()} key={FireImg.toString() + i}/>)
    }
    return res;
}

export default function MainPageComponent() {
    return <div className="wrapper_main_component">
        <div className="wrapper_info">
            <div className="fire_desktop"><img className="fire" src={FireImg} alt={FireImg.toString()}/></div>
            <h3>Підгорає від зборів У школу? </h3>
            <div className="wrapper_fire"> {repeatFire(7)}</div>
            <label>Без паніки. Justin рятує бюджет
                та нервову систему</label>
            <img className="arrow_bottom" src={ArrowImg} alt={ArrowImg.toString()}/>
        </div>

        <img className="child" src={ChildImg} alt={ChildImg.toString()}/>
    </div>

}