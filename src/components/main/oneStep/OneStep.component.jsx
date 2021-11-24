import React from "react";
import OneNumberImg from "../../../imgs/svg/one-number.svg"
import ArrowImg from "../../../imgs/svg/arrow_bottom.svg"
import ComfyImg from "../../../imgs/svg/comfy.svg";
import MoyoImg from "../../../imgs/svg/moyo.svg";
import EldoradoImg from "../../../imgs/svg/eldorado.svg";
import MaudauImg from "../../../imgs/maudau.png";
import IntertopImg from "../../../imgs/svg/intertop.svg";
import FoxtrotImg from "../../../imgs/svg/foxtrot.svg";
import IziImg from "../../../imgs/svg/izi.svg";
import AgusicImg from "../../../imgs/svg/agusic.svg";
import PodushkaImg from "../../../imgs/svg/podushka.svg";
import IOnImg from "../../../imgs/svg/iOn.svg";
import FUaImg from "../../../imgs/svg/f_ua.svg";
import EpicentrImg from "../../../imgs/svg/epicentr.svg";
import ThreeAngelsImg from "../../../imgs/svg/three-angels.svg";
import MinImg from "../../../imgs/min.png";
import "./OneStep.scss";

function PartnersCompany({
                             firstPartner, secondPartner, thirdPartner, fourPartner, fivePartner,
                             classname, firstLink, secondLink, thirdLink, fourLink, fiveLink,
                         }) {
    return <div className={classname ? `first_second_partners ${classname}` : "first_second_partners"}>
        <a href={firstLink}>
            <img className={firstLink === "https://www.moyo.ua/" ? "bigSize" : ""} src={firstPartner}
                 alt={firstPartner.toString()}/>
        </a>
        <a href={secondLink}>
            <img className={secondLink === "https://izi.ua/" ? "bigSize" : ""} src={secondPartner}
                 alt={secondPartner.toString()}/>
        </a>
        <a href={thirdLink}> <img src={thirdPartner} alt={thirdPartner.toString()}/></a>
        <a href={fourLink}> <img src={fourPartner} alt={fourPartner.toString()}/></a>
        <div className="last-img">
            <a href={fiveLink}> <img src={fivePartner} alt={fivePartner.toString()}/></a>
        </div>
    </div>
}

export default function OneStepComponent() {

    return <div className="one_step">
        <img className="angels" src={ThreeAngelsImg} alt={ThreeAngelsImg.toString()}/>
        <div className="wrapper_info">
            <img className="number_one" src={OneNumberImg} alt={OneNumberImg.toString()}/>
            <h3>Купуй в магазинах партнерів</h3>
            <div className="partners">
                <PartnersCompany firstPartner={EldoradoImg} secondPartner={ComfyImg}
                                 thirdPartner={IntertopImg} fourPartner={FoxtrotImg}
                                 fivePartner={PodushkaImg}
                                 firstLink="https://eldorado.ua/" secondLink="https://comfy.ua/ua/"
                                 thirdLink="https://intertop.ua/ua/" fourLink={"https://www.foxtrot.com.ua/"}
                                 fiveLink="https://podushka.com.ua/"
                />
                <PartnersCompany firstPartner={MoyoImg} secondPartner={IziImg}
                                 thirdPartner={MaudauImg} fourPartner={IOnImg}
                                 fivePartner={AgusicImg}
                                 firstLink="https://www.moyo.ua/" secondLink="https://izi.ua/"
                                 thirdLink="https://baby.maudau.com.ua/" fourLink={"https://ion.ua/"} classname="fl-end"
                                 fiveLink="https://agusik.com.ua/ru/"
                />
            </div>
            <div className="partners fl-column">
                <div className="wrapper_end">
                    <a href="https://epicentrk.ua/"> <img src={EpicentrImg} alt={EpicentrImg.toString()}/></a>
                    <a href="https://f.ua/"> <img src={FUaImg} alt={FUaImg.toString()}/></a>
                    <a href="https://termincin.com/ru/" className="none"> <img src={MinImg} alt={MinImg.toString()}/></a>
                </div>
                <div className="wrapper_end view">
                    <a href="https://termincin.com/ru/"> <img src={MinImg} alt={MinImg.toString()}/></a>
                </div>
            </div>
            <div>
                <img className="arrow_bottom" src={ArrowImg} alt={ArrowImg.toString()}/>
            </div>
        </div>

    </div>
}