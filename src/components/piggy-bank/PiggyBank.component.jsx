import React from "react";
import style from "./PiggyBank.scss";
import CalculatorImg from "../../imgs/svg/calculator.svg";
import PiggyBankImg from "../../imgs/svg/piggy_bank.svg";
import WalletImg from "../../imgs/svg/wallet.svg";
import SvgBackground from "../../imgs/svg/svg_background.svg";
import FireImg from "../../imgs/svg/fire.svg";
import ThreeAngelsImg from "../../imgs/svg/three-angels.svg";
import AngelImg from "../../imgs/svg/angel.svg";

function AbsoluteImgs({nameImg, className, classNameWrapper}) {
    return <div className={classNameWrapper ? `wrapperImages ${classNameWrapper}` : "wrapperImages"}>
        <img className={className ? `imgTop ${className}` : "imgTop"} src={nameImg} alt={nameImg.toString()}/>
        <img className="imgBackground" src={SvgBackground} alt="background"/>
    </div>
}

function TextInfo({importantText, text, className}) {
    return <div className={!className ? "wrapperText": "wrapperText pd-bottom"}>
        <span>{importantText}</span>
        {text}
    </div>
}


export default function PiggyBankComponent() {

    return <div className="wrapper_piggy">
        <img className="angels isDesktop" src={ThreeAngelsImg} alt="ThreeAngelsImg"/>
        <img className="angels isMobile second_angel" src={AngelImg} alt="AngelImg"/>
        <img className="angels isMobile third_angel" src={AngelImg} alt="AngelImg"/>

        <div className="title">
            <h3>НАШІ ПЕРЕВАГИ
                <img src={FireImg} alt={FireImg.toString()}/>
            </h3>
        </div>
        <div className="wrapperContent mr-none">
            <AbsoluteImgs nameImg={WalletImg}/>
            <TextInfo
                importantText="Justin не бере гроші за об'ємну вагу, "
                text="відповідно ви платите за саму посилку, а не повіртя в коробці"
            />
            <img className="angels isMobile first_angel" src={AngelImg} alt="AngelImg"/>
        </div>
        <div className="wrapperContent centerContent">
            <AbsoluteImgs nameImg={PiggyBankImg} className="centerImg"/>
            <TextInfo
                importantText="Justin не зобов’язує перепаковувати посилки у фірмову упаковку."
                text=" Це значить, що ви не платите за додаткове пакування та не переплачуєте за об’ємну вагу"
            />
        </div>
        <div className="wrapperContent">
            <AbsoluteImgs nameImg={CalculatorImg} className="centerImg" classNameWrapper="mr_left_120"/>
            <TextInfo
                importantText="І все це за доступною ціною. "
                text="Лише уявіть, що доставка мобільного телефону з Justin буде коштувати - 33 грн,
                а наприклад, електросамокату - 95 грн.
                А тепер згадайте скільки ви платили за доставку раніше."
                className
            />
        </div>
    </div>

}