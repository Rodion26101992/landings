import React from "react";
import "./PresentStyle.scss";
import presentsCard from "../../imgs/black-friday/presents/index";

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
                        <img src={items.presentCard} alt={`cardPresent-${i}`}/>
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

export default function PresentComponent() {
    const presents = [
        [{
            presentCard: presentsCard.Moyo,
            text: [
                "3 сертифікати на 200 бонусів",
            ],
        },
            {
                presentCard: presentsCard.Comfy,
                text: [
                    "10 сертифікатів на 500 бонусів",
                ],
            },

        ],
        [{
            presentCard: presentsCard.Zoo,
            text: [
                "10 сертифікатів на 200 грн",
            ],
        },


            {
                presentCard: presentsCard.Mau,
                text: [
                    "5 сертифікатів на 2500 грн",
                ],
            },

        ],
        [
            {
                presentCard: presentsCard.Pandora,
                text: [
                    "Намистина \"Новорічна ялинка\"",
                ],
            },
            {
                presentCard: presentsCard.Garner,
                text: [
                    "3 сертифікати на 500 грн.",
                    "100 промокодів на знижку -20%"
                ],
            },

        ],
        [
            {
                presentCard: presentsCard.StreetWear,
                text: [
                    "2 сертифікати на 250 грн.",
                    "5 сертифікатів на 100 грн.",
                    "100 промокодів на знижку -10%",
                ],
            },
            {
                presentCard: presentsCard.Books,
                text: [
                    "Сертифікат на 200 грн.",
                    "Промокод на безкоштовну доставку",
                ],
            },
        ],
        [
            {
                presentCard: presentsCard.Grusha,
                text: [
                    "5 упаковок кави 250 гр.",
                ],
            },
            // {
            //     presentCard: null,
            //     text: [
            //         "",
            //     ],
            // },
        ]
    ];

    return <div className="present_black_friday">
        {getPresents(presents)}
    </div>
}