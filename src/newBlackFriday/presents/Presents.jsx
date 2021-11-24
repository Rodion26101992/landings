import React from "react";
import Title from "../../imgs/new-black-friday/presents/title.png";
import Arrow from "../../imgs/new-black-friday/presents/vector.png";
import cardsArray from "../../imgs/new-black-friday/presents/cards";
import "./Presents.style.scss";
import presentsCard from "../../imgs/black-friday/presents";

function getClassName(present) {
    switch (present[0].presentCard) {
        case  presentsCard.Pandora:
            return "box_present align_bottom";
        case presentsCard.Grusha:
            return "box_present justify-start";
        default:
            return "box_present";
    }

}

function getPresents(presents) {
    return <div
        className="wrapper_present">
        {presents.map((present, i) => {
            return <div
                className={
                    getClassName(present)
                }
                key={`present-box-${i}`}>
                {present.map((items, number) => {
                    return <div className="present" key={`present-${number}`}>
                        <div className="test"><img src={items.presentCard} alt={`cardPresent-${i}`}/></div>
                        <div className="textInfo">
                            {items.text.map((item, index) => {
                                return <p key={`text-${index}`}>{item}</p>
                            })}
                        </div>
                    </div>
                })}

            </div>
        })}
    </div>
}

export default function PresentsComponent() {
    const presents = [
        [
            {
                presentCard: cardsArray.Moyo,
                text: [
                    "3 сертифікати на 200 бонусів",
                ],
            },
            {
                presentCard: cardsArray.Comfy,
                text: [
                    "10 сертифікатів на 500 бонусів",
                ],

            },
            {
                presentCard: cardsArray.Grusha,
                text: [
                    "5 упаковок кави 250 гр.",
                ],

            }
        ]
    ];
    return <div className="black_friday_presents">
        <div className="wrapper_title_box">
            <img src={Title} alt="title"/>
            <img id="arrowPresent" src={Arrow} alt="arrow"/>
        </div>
        {getPresents(presents)}
    </div>
}