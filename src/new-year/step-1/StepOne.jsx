import React from "react";
import "./StyleOne.style.scss";
import arrayImgs from "../../imgs/new-year";

export default function StepOne() {
    return <div className="step_one_new_year">
        <img id="boxGrey" src={arrayImgs.BoxGrey} alt="boxGrey"/>
        <img id="toy" src={arrayImgs.Toy} alt="toy"/>
        <img id="boxGreyRight" src={arrayImgs.BoxGreyRight} alt="boxGreyRight"/>

        <div className="wrapperText">
            <h3>
                Дід доставить all you need!
            </h3>
            <div className="wrapper_sub">
                <p>Доведи малому, що дід існує</p>
                <img id="boxCenter" src={arrayImgs.BoxCenter} alt="boxCenter"/>

            </div>
        </div>
        <div className="wrapperImg">
            <img src={arrayImgs.Collage} alt="collage"/>
            <img id="mobileBoxGrey" src={arrayImgs.MobileBoxGrey} alt="mobileBoxGrey"/>
            <img id="mobileBoxMain" src={arrayImgs.MobileBoxMain} alt="mobileBoxMain"/>
        </div>
    </div>
}