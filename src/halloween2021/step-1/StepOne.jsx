import React from "react";
import "./StepOneStyle.scss";
import ComfyImg from "../../imgs/svg/comfy.svg";
import EldoradoImg from "../../imgs/svg/eldorado.svg";
import MaudauImg from "../../imgs/maudau.png";
import FoxtrotImg from "../../imgs/svg/foxtrot.svg";
import FUaImg from "../../imgs/svg/f_ua.svg";
import EpicentrImg from "../../imgs/svg/epicentr.svg";
import ZooImg from "../../imgs/halloween/partners/zoo.png";
import FUaMobileImg from "../../imgs/halloween/partners/f.ua.mobile.svg";
import MoyoNew from "../../imgs/halloween/partners/moyo-new.svg";
import WebImg from "../../imgs/halloween/right-web.png";
import SatinImg from "../../imgs/halloween/partners/satin.svg";
import IntertopImg from "../../imgs/halloween/partners/intertop.png";
import MCFImg from "../../imgs/halloween/partners/m_c_f.png";
import IntertopMobileImg from "../../imgs/halloween/partners/intertop_mobile.png";
import Fishki from "../../imgs/halloween/partners/fishki.png";
import Carne from "../../imgs/halloween/partners/garner.png";
import StreetWear from "../../imgs/halloween/partners/street_wear.png";
import ZooMapa from "../../imgs/halloween/partners/zoo_mapa.png";
import BeautyMaster from "../../imgs/halloween/partners/beauty_master.png";
import Vmiske from "../../imgs/halloween/partners/vmiske.png";
import Podushka from "../../imgs/svg/podushka.svg";
import classnames from "classnames";


function partnersCompany(partners) {
    return <div
        className={classnames(partners[0].partnerImg === Podushka || IntertopImg ? "wrapperPartners wd-80" : "wrapperPartners")}>
        {partners.map((partner) => {
            return <a href={partner.partnerUrl} key={partner.partnerImg.toString()} target="_blank">
                <img src={partner.partnerImg} alt={partner.partnerImg.toString()}/>
            </a>
        })}
    </div>
}

function partnersMobileCompany(partnersGlobal) {
    return <div className="wrapperMobilePartners">
        {partnersGlobal.map((partners, index) => {
            return <div className="subPartners" key={`${partners[0].partnerUrl.toString()}+${index}`}>
                {partners.map((partner) => {
                    return <a target="_blank" href={partner.partnerUrl} key={partner.partnerImg.toString()}>
                        <img className={partner.partnerUrl === "https://f.ua/" ? "widthImg" : ""}
                             src={partner.partnerImg} alt={partner.partnerImg.toString()}/>
                    </a>
                })}
            </div>
        })}
    </div>
}

export default function StepOneComponent() {

    const firstPartners = [
        {
            partnerImg: IntertopImg,
            partnerUrl: "https://intertop.ua/",
        },
        {
            partnerImg: EldoradoImg,
            partnerUrl: "https://eldorado.ua/",
        },
        {
            partnerImg: FoxtrotImg,
            partnerUrl: "https://www.foxtrot.com.ua/",
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
            partnerImg: Vmiske,
            partnerUrl: "https://vmiske.ua/",
        },
    ];
    const secondPartners = [
        {
            partnerImg: MoyoNew,
            partnerUrl: "https://www.moyo.ua/",
        },
        {
            partnerImg: ZooImg,
            partnerUrl: "http://zoocomplex.com.ua/uk/?utm_source=justin&utm_medium=landing_page&utm_campaign=free_shipping",
        },
        {
            partnerImg: MCFImg,
            partnerUrl: "https://mcf.com.ua/",
        },
        {
            partnerImg: FUaImg,
            partnerUrl: "https://f.ua/",
        },
        {
            partnerImg: MaudauImg,
            partnerUrl: "http://maudau.com.ua/",
        },
        {
            partnerImg: SatinImg,
            partnerUrl: "https://satin.com.ua/",
        },
    ];
    const thirdPartners = [
        {
            partnerImg: Podushka,
            partnerUrl: "https://podushka.com.ua/",
        },
        {
            partnerImg: Fishki,
            partnerUrl: "https://fishki.ua",
        },
        {
            partnerImg: BeautyMaster,
            partnerUrl: "https://beautymaster.com.ua/",
        },
        {
            partnerImg: Carne,
            partnerUrl: "https://garne.com.ua/",
        },
        {
            partnerImg: StreetWear,
            partnerUrl: "https://streetwear.com.ua",
        },
        {
            partnerImg: ZooMapa,
            partnerUrl: "https://zoomapa.com.ua/",
        },
    ];

    const mobilePartners = [
        [{
            partnerImg: EldoradoImg,
            partnerUrl: "https://eldorado.ua/",
        },
            {
                partnerImg: FoxtrotImg,
                partnerUrl: "https://www.foxtrot.com.ua/",
            }],
        [{
            partnerImg: ComfyImg,
            partnerUrl: "https://comfy.ua/ua/",
        },
            {
                partnerImg: EpicentrImg,
                partnerUrl: "https://epicentrk.ua/",
            },
        ],
        [
            {
                partnerImg: MaudauImg,
                partnerUrl: "http://maudau.com.ua/",
            },
            {
                partnerImg: ZooImg,
                partnerUrl: "http://zoocomplex.com.ua/uk/?utm_source=justin&utm_medium=landing_page&utm_campaign=free_shipping",
            },
        ],
        [
            {
                partnerImg: IntertopMobileImg,
                partnerUrl: "https://intertop.ua/",
            },
            {
                partnerImg: Vmiske,
                partnerUrl: "https://vmiske.ua/",
            }
        ],
        [
            {
                partnerImg: MoyoNew,
                partnerUrl: "https://www.moyo.ua/",
            },
            {
                partnerImg: FUaMobileImg,
                partnerUrl: "https://f.ua/",
            },
            {
                partnerImg: MCFImg,
                partnerUrl: "https://mcf.com.ua/",
            },
            {
                partnerImg: SatinImg,
                partnerUrl: "https://satin.com.ua/",
            },
        ],
        [
            {
                partnerImg: Fishki,
                partnerUrl: "https://fishki.ua",
            },
            {
                partnerImg: Carne,
                partnerUrl: "https://garne.com.ua/",
            },
        ],
        [
            {
                partnerImg: StreetWear,
                partnerUrl: "https://streetwear.com.ua",
            },
            {
                partnerImg: ZooMapa,
                partnerUrl: "https://zoomapa.com.ua/",
            },
        ],
        [
            {
                partnerImg: BeautyMaster,
                partnerUrl: "https://beautymaster.com.ua/",
            },
            {
                partnerImg: Podushka,
                partnerUrl: "https://podushka.com.ua/",
            },
        ]
    ];

    return <div className="step_one_component_halloween">
        <img className="web_step" src={WebImg} alt="WebImg"/>
        <div className="boxTitle">
            <h3>1 крок</h3>
            <p className="whiteColor">Купуй в магазинах партнерів</p>
            <p className="wrapperBlue">зі страшенними знижками</p>
        </div>
        {partnersCompany(firstPartners)}
        {partnersCompany(secondPartners)}
        {partnersCompany(thirdPartners)}
        {partnersMobileCompany(mobilePartners)}
    </div>
}