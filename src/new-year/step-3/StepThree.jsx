import React from "react";
import "./StyleThree.style.scss";
import arrayImgs from "../../imgs/new-year";

export default function StepThree() {
    return <div className="step_three_new_year">
        <div className="wrapperText">
            <div className="boxTitle"><h3>П'ять кроків до </h3>
                <h3> новорічного дива </h3>
            </div>
            <img id="boxLeftTwoStep" src={arrayImgs.BoxLeftTwoStep} alt="boxLeftTwoStep"/>
            <img id="christmasToy" src={arrayImgs.ChristmasToy} alt="christmasToy"/>
        </div>
        <div className="boxInfo">
            <div className="wrapperItemRight">
                <div className="boxStep">
                    <h3>1</h3>
                    <p>Відправ подарунок з будь-якого відділення Justin до чарівного відділення №777.</p>
                    <img id="deer" src={arrayImgs.Deer} alt="deer"/>
                    <img src={arrayImgs.Vector_1} alt="vector1" id="vector1"/>
                </div>
            </div>
            <div className="wrapperItemLeft">
                <div className="boxStep alignItemsCenter">
                    <img id="snowMan" src={arrayImgs.SnowMan} alt="snowMan"/>
                    <h3 className="mr-b-50">2</h3>
                    <p>Бери малюка, приходь на різдвяний ярмарок на Контрактовій площі та відшукай дідову
                        резиденцію. </p>
                    <img id="mobileSnowMan" src={arrayImgs.SnowMan} alt="mobileSnowMan"/>
                    <img src={arrayImgs.Vector_2} alt="vector2" id="vector2"/>
                </div>
            </div>
            <div className="wrapperItemRight">
                <div className="boxStep alignItemsCenter">
                    <h3 className="mr-b-50">3</h3>
                    <p>Поруч із резиденцією знаходиться чарівне відділення, де на малечу чекатиме подарунок.</p>
                    <img id="green" src={arrayImgs.Green} alt="green"/>
                    <img src={arrayImgs.Vector_3} alt="vector3" id="vector3"/>
                </div>
            </div>
            <div className="wrapperItemLeft">
                <div className="boxStep alignItemsCenter">
                    <img  src={arrayImgs.Santa} alt="santa" id="santaImg"/>
                    <h3 className="mr-b-50">4</h3>
                    <p>Стань сантою для найрідніших — відправ подарунок з чарівного відділення до будь-якого іншого
                        безкоштовно та анонімно.</p>
                    <img src={arrayImgs.Santa} alt="santa" id="mobileSantaImg"/>

                </div>
            </div>
        </div>
        <img id="backgroundImg" src={arrayImgs.Background} alt="background"/>
    </div>
}