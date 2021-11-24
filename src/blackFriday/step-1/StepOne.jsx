import React from "react";
import "./StepOneStyle.scss";
import ComfyImg from "../../imgs/svg/comfy.svg";
import FUaImg from "../../imgs/svg/f_ua.svg";
import EpicentrImg from "../../imgs/svg/epicentr.svg";
import ZooImg from "../../imgs/halloween/partners/zoo.png";
import MoyoNew from "../../imgs/halloween/partners/moyo-new.svg";
import SatinImg from "../../imgs/halloween/partners/satin.svg";
import IntertopImg from "../../imgs/halloween/partners/intertop.png";
import Fishki from "../../imgs/halloween/partners/fishki.png";
import StreetWear from "../../imgs/halloween/partners/street_wear.png";
import ZooMapa from "../../imgs/halloween/partners/zoo_mapa.png";
import Podushka from "../../imgs/svg/podushka.svg";
import balckImgs from "../../imgs/black-friday";
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

function getClassName(partners) {
    let isValid = false;
    partners.forEach((partner) => {
        if (partner.isWidth) return isValid = true;
    });
    return isValid ? "subPartners widthImg" : "subPartners";
}

function partnersMobileCompany(partnersGlobal) {
    return <div className="wrapperMobilePartners">
        {partnersGlobal.map((partners, index) => {
            return <div className='subPartners'
                        key={`${partners[0].partnerUrl.toString()}+${index}`}>
                {partners.map((partner) => {
                    return <a target="_blank" href={partner.partnerUrl} key={partner.partnerImg.toString()}
                              className={partner.isWidth ? "widthImg" : ''}>
                        <img src={partner.partnerImg} alt={partner.partnerImg.toString()}/>
                    </a>
                })}
            </div>
        })}
    </div>
}

export default function StepOneComponent() {
    const firstPartners = [
        {
            partnerImg: ComfyImg,
            partnerUrl: "https://comfy.ua/ua/",
        },
        {
            partnerImg: balckImgs.Foxtrot,
            partnerUrl: "https://www.foxtrot.com.ua",
        },
        {
            partnerImg: MoyoNew,
            partnerUrl: "https://www.moyo.ua/",

        },
        {
            partnerImg: balckImgs.MauDau,
            partnerUrl: "http://maudau.com.ua/",
        },
        {
            partnerImg: FUaImg,
            partnerUrl: "https://f.ua/",
            isWidth: true,
        },
        {
            partnerImg: EpicentrImg,
            partnerUrl: "https://epicentrk.ua/",
        },

    ];
    const secondPartners = [
        {
            partnerImg: IntertopImg,
            partnerUrl: "https://intertop.ua/",
        },
        {
            partnerImg: balckImgs.ZooOrigin,
            partnerUrl: "https://e-zoo.com.ua/",
        },

        {
            partnerImg: balckImgs.Elmir,
            partnerUrl: "https://elmir.ua/",
        },
        {
            partnerImg: balckImgs.Pandora,
            partnerUrl: "https://e-pandora.ua/",
        },
        {
            partnerImg: balckImgs.Samsung,
            partnerUrl: "https://samsungshop.com.ua/",
        },

    ];
    const thirdPartners = [
        {
            partnerImg: Fishki,
            partnerUrl: "https://fishki.ua",
        },
        {
            partnerImg: balckImgs.Conte,
            partnerUrl: "https://conteshop.com.ua/",
        },
        {
            partnerImg: balckImgs.Garne,
            partnerUrl: "https://garne.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
        },
        {
            partnerImg: StreetWear,
            partnerUrl: "https://streetwear.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
        },
        {
            partnerImg: balckImgs.BooksHome,
            partnerUrl: "https://book-ye.com.ua/",
            isWidth: true,
        },
        {
            partnerImg: balckImgs.Grusha,
            partnerUrl: "https://grusha.ua/",
            isWidth: true,
        },
    ];
    const fourPartners = [
        {
            partnerImg: SatinImg,
            partnerUrl: "https://satin.com.ua/",
        },

        {
            partnerImg: ZooImg,
            partnerUrl: "https://zoocomplex.com.ua/",
        },
        {
            partnerImg: Podushka,
            partnerUrl: "https://podushka.com.ua/",
        },
        {
            partnerImg: balckImgs.Beauty,
            partnerUrl: "https://beautymaster.com.ua/",
        },
        {
            partnerImg: ZooMapa,
            partnerUrl: "https://zoomapa.com.ua/",
        },
    ];
    const fivePartners = [
        {
            partnerImg: balckImgs.Smile,
            partnerUrl: "https://healthy-smile.com.ua/",
        },
        {
            partnerImg: balckImgs.Hollyskin,
            partnerUrl: "https://hollyskin.com.ua/",
        },
        {
            partnerImg: balckImgs.MrScrubber,
            partnerUrl: "https://mrscrubber.com/",
        },
        {
            partnerImg: balckImgs.Eska,
            partnerUrl: "https://eskalube.com.ua/",
        },
        {
            partnerImg: balckImgs.Brizoll,
            partnerUrl: "https://brizoll.com/",
        },
        {
            partnerImg: balckImgs.ShoeLeader,
            partnerUrl: "https://lidervzuttya.com/",
        },


    ];
    const sixPartners = [
        {
            partnerImg: balckImgs.Grenka,
            partnerUrl: "https://grenka.ua/",
        },
        {
            partnerImg: balckImgs.Lefard,
            partnerUrl: "https://lefard.com.ua/",
        },
        {
            partnerImg: balckImgs.Wo,
            partnerUrl: "https://wo.ua/",
        },
        {
            partnerImg: balckImgs.Evgakids,
            partnerUrl: "https://evgakids.com/",
        },

    ];

    const mobilePartners = [
        firstPartners,
        [
            {
                partnerImg: balckImgs.IntertopMobile,
                partnerUrl: "https://intertop.ua/",
            },
            {
                partnerImg: balckImgs.ZooOrigin,
                partnerUrl: "https://e-zoo.com.ua/",
            },

            {
                partnerImg: balckImgs.Elmir,
                partnerUrl: "https://elmir.ua/",
            },
            {
                partnerImg: balckImgs.Pandora,
                partnerUrl: "https://e-pandora.ua/",
            },
            {
                partnerImg: balckImgs.Samsung,
                partnerUrl: "https://samsungshop.com.ua/",
            },

        ],
        [
            {
                partnerImg: Fishki,
                partnerUrl: "https://fishki.ua",
            },
            {
                partnerImg: balckImgs.Conte,
                partnerUrl: "https://conteshop.com.ua/",
            },
            {
                partnerImg: balckImgs.Garne,
                partnerUrl: "https://garne.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
            },
            {
                partnerImg: StreetWear,
                partnerUrl: "https://streetwear.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
            },
            {
                partnerImg: balckImgs.BooksHome,
                partnerUrl: "https://book-ye.com.ua/",
                isWidth: true,

            },
            {
                partnerImg: balckImgs.Grusha,
                partnerUrl: "https://grusha.ua/",
                isWidth: true,
            },
        ],
        fourPartners,
        fivePartners,
        sixPartners
        // [
        //     {
        //         partnerImg: balckImgs.Garne,
        //         partnerUrl: "https://garne.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
        //     },
        //     {
        //         partnerImg: balckImgs.Samsung,
        //         partnerUrl: "https://samsungshop.com.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.Pandora,
        //         partnerUrl: "https://e-pandora.ua/",
        //     }
        // ],
        // [
        //     {
        //         partnerImg: balckImgs.IntertopMobile,
        //         partnerUrl: "https://intertop.ua/",
        //     },
        //     {
        //         partnerImg: ZooMapa,
        //         partnerUrl: "https://zoomapa.com.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.Eska,
        //         partnerUrl: "https://eskalube.com.ua/",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: Podushka,
        //         partnerUrl: "https://podushka.com.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.MauDau,
        //         partnerUrl: "http://maudau.com.ua/",
        //     },
        //     {
        //         partnerImg: ZooImg,
        //         partnerUrl: "https://zoocomplex.com.ua/",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: balckImgs.Hollyskin,
        //         partnerUrl: "https://hollyskin.com.ua/",
        //     },
        //     {
        //         partnerImg: StreetWear,
        //         partnerUrl: "https://streetwear.com.ua/ua?utm_source=justin.ua&utm_medium=referral&utm_campaign=banner_bf21",
        //     },
        //     {
        //         partnerImg: Fishki,
        //         partnerUrl: "https://fishki.ua",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: balckImgs.Evgakids,
        //         partnerUrl: "https://evgakids.com/",
        //     },
        //     {
        //         partnerImg: balckImgs.Elmir,
        //         partnerUrl: "https://elmir.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.MrScrubber,
        //         partnerUrl: "https://mrscrubber.com/",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: balckImgs.Grenka,
        //         partnerUrl: "https://grenka.ua/",
        //     },
        //     {
        //         partnerImg: MoyoNew,
        //         partnerUrl: "https://www.moyo.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.Conte,
        //         partnerUrl: "https://conteshop.com.ua/",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: balckImgs.ShoeLeader,
        //         partnerUrl: "https://lidervzuttya.com/",
        //         isWidth: true,
        //     },
        //     {
        //         partnerImg: balckImgs.ZooOrigin,
        //         partnerUrl: "https://e-zoo.com.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.BooksHome,
        //         partnerUrl: "https://book-ye.com.ua/",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: FUaImg,
        //         partnerUrl: "https://f.ua/",
        //         isWidth: true,
        //     },
        //     {
        //         partnerImg: balckImgs.Wo,
        //         partnerUrl: "https://wo.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.Lefard,
        //         partnerUrl: "https://lefard.com.ua/",
        //     },
        // ],
        // [
        //     {
        //         partnerImg: balckImgs.Smile,
        //         partnerUrl: "https://healthy-smile.com.ua/",
        //         isWidth: true,
        //     },
        //     {
        //         partnerImg: balckImgs.Beauty,
        //         partnerUrl: "https://beautymaster.com.ua/",
        //     },
        //     {
        //         partnerImg: balckImgs.Grusha,
        //         partnerUrl: "https://grusha.ua/",
        //     },
        // ],
    ];

    return <div className="step_one_component_black_friday">
        <div className="boxTitle">
            <p>Купуй в магазинах</p>
            <p>партнерів</p>
        </div>
        {partnersCompany(firstPartners)}
        {partnersCompany(secondPartners)}
        {partnersCompany(thirdPartners)}
        {partnersCompany(fourPartners)}
        {partnersCompany(fivePartners)}
        {partnersCompany(sixPartners)}
        {partnersMobileCompany(mobilePartners)}
    </div>
}