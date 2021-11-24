import React from "react";
import "./SliderWrapper.staly.scss";
import SliderPartnersComponent from "./Slider.component";
import Title from "../../imgs/new-black-friday/step_box/title.png";
import TitleMobile from "../../imgs/new-black-friday/step_box/title_mobile.png";
import Arrow from "../../imgs/new-black-friday/step_box/vector.png";
import balckImgs from "../../imgs/black-friday";
import ComfyImg from "../../imgs/svg/comfy.svg";
import EpicentrImg from "../../imgs/svg/epicentr.svg";
import IntertopImg from "../../imgs/halloween/partners/intertop.png";
import ZooMapa from "../../imgs/halloween/partners/zoo_mapa.png";
import StreetWear from "../../imgs/halloween/partners/street_wear.png";
import Podushka from "../../imgs/svg/podushka.svg";
import ZooImg from "../../imgs/halloween/partners/zoo.png";
import Fishki from "../../imgs/halloween/partners/fishki.png";
import SatinImg from "../../imgs/halloween/partners/satin.svg";
import MoyoNew from "../../imgs/halloween/partners/moyo-new.svg";
import FUaImg from "../../imgs/svg/f_ua.svg";


export default function SliderWrapperComponent() {
    const arrayPartners = [
        {
            partnerImg: balckImgs.Garne,
            partnerUrl: "https://garne.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
        },
        {
            partnerImg: ComfyImg,
            partnerUrl: "https://comfy.ua/ua/",
        },
        {
            partnerImg: EpicentrImg,
            partnerUrl: "https://epicentrk.ua/",
        },
        {
            partnerImg: balckImgs.Samsung,
            partnerUrl: "https://samsungshop.com.ua/",
        },
        {
            partnerImg: balckImgs.Pandora,
            partnerUrl: "https://e-pandora.ua/",
        },
        {
            partnerImg: IntertopImg,
            partnerUrl: "https://intertop.ua/",
        },
        {
            partnerImg: ZooMapa,
            partnerUrl: "https://zoomapa.com.ua/",
        },
        {
            partnerImg: balckImgs.Eska,
            partnerUrl: "https://eskalube.com.ua/",
        },
        {
            partnerImg: StreetWear,
            partnerUrl: "https://streetwear.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
        },
        {
            partnerImg: balckImgs.MauDau,
            partnerUrl: "http://maudau.com.ua/",
        },
        {
            partnerImg: balckImgs.Evgakids,
            partnerUrl: "https://evgakids.com/",
        },
        {
            partnerImg: balckImgs.Elmir,
            partnerUrl: "https://elmir.ua/",
        },
        {
            partnerImg: balckImgs.MrScrubber,
            partnerUrl: "https://mrscrubber.com/",
        },
        {
            partnerImg: Podushka,
            partnerUrl: "https://podushka.com.ua/",
        },
        {
            partnerImg: ZooImg,
            partnerUrl: "https://zoocomplex.com.ua/",
        },
        {
            partnerImg: balckImgs.Grenka,
            partnerUrl: "https://grenka.ua/",
        },
        {
            partnerImg: balckImgs.Brizoll,
            partnerUrl: "https://brizoll.com/",
        },
        {
            partnerImg: balckImgs.Foxtrot,
            partnerUrl: "https://www.foxtrot.com.ua",
        },
        {
            partnerImg: balckImgs.Hollyskin,
            partnerUrl: "https://hollyskin.com.ua/",
        },
        {
            partnerImg: Fishki,
            partnerUrl: "https://fishki.ua",
        },
        {
            partnerImg: SatinImg,
            partnerUrl: "https://satin.com.ua/",
        },
        {
            partnerImg: MoyoNew,
            partnerUrl: "https://www.moyo.ua/",
        },
        {
            partnerImg: balckImgs.Conte,
            partnerUrl: "https://conteshop.com.ua/",
        },
        {
            partnerImg: balckImgs.ShoeLeader,
            partnerUrl: "https://lidervzuttya.com/",
        },
        {
            partnerImg: balckImgs.ZooOrigin,
            partnerUrl: "https://e-zoo.com.ua/",
        },
        {
            partnerImg: balckImgs.BooksHome,
            partnerUrl: "https://book-ye.com.ua/",
        },
        {
            partnerImg: FUaImg,
            partnerUrl: "https://f.ua/",
        },
        {
            partnerImg: balckImgs.Wo,
            partnerUrl: "https://wo.ua/",
        },
        {
            partnerImg: balckImgs.Lefard,
            partnerUrl: "https://lefard.com.ua/",
        },
        {
            partnerImg: balckImgs.Smile,
            partnerUrl: "https://healthy-smile.com.ua/",
        },
        {
            partnerImg: balckImgs.Beauty,
            partnerUrl: "https://beautymaster.com.ua/",
        },
        {
            partnerImg: balckImgs.Grusha,
            partnerUrl: "https://grusha.ua/",
        },

    ];

    return <div>
        <div className="slider_wrapper">
            <SliderPartnersComponent arrayPartners={arrayPartners}/>
            <div className="wrapper_title_box">
                <img id="titleBox" src={Title} alt="title"/>
                <img id="titleBoxMobile" src={TitleMobile} alt="title"/>
                <img id="arrowBox" src={Arrow} alt="arrow"/>

            </div>
        </div>
    </div>
}