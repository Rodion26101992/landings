import React from "react";
import Title from "../../imgs/new-black-friday/presents/title.png";
import Arrow from "../../imgs/new-black-friday/presents/vector.png";
import cardsArray from "../../imgs/new-black-friday/presents/cards";
import "./Presents.style.scss";
import presentsCard from "../../imgs/black-friday/presents";
import presentsVectors from "../../imgs/new-black-friday/presents/vectors";
import Vector from "../../imgs/new-black-friday/presents/vector_link.png";
import TitleMobile from "../../imgs/new-black-friday/presents/title_mobile.png";

function getClassName(present) {
    return "box_present";
    switch (present[0].presentCard) {
        case  presentsCard.Pandora:
            return "box_present align_bottom";
        case presentsCard.Grusha:
            return "box_present justify-start";
        default:
            return "box_present";
    }

}

function getTitleLine(arrayText) {
    return arrayText.map((item, index) => {
        return item.isBlue ? <label className="color_blue" key={`subText-${index}`}>{item.subText}</label> :
            <label key={`subText-${index}`}>{item.subText}</label>
    })

}

function getPresents(presents) {
    return <div
        className="wrapper_new_present">
        {presents.map((present, i) => {
            return <div
                className={
                    getClassName(present)
                }
                key={`present-box-${i}`}>
                {present.map((items, number) => {
                    return <div className="present" key={`present-${number}`}>
                        <div className="box_img">
                            <img className="basic_card" src={items.presentCard} alt={`cardPresent-${i}`}/>
                            <img className="vector" style={items.coordinationVector} src={items.vector}
                                 alt={`vector-${i}`}/>
                        </div>
                        <div className="textInfo">
                            {items.text.map((item, index) => {
                                return <p key={`text-${index}`}>{getTitleLine(item)}</p>
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
                // vector: {
                vector: presentsVectors.Moyo,
                coordinationVector: {right: '0', top: '0'},
                // },
                text: [
                    [{subText: "3 ??????????????????????"}],
                    [{subText: "????"},
                        {
                            subText: " 200 ??????????????",
                            isBlue: true
                        }]
                ],
            },
            {
                presentCard: cardsArray.Comfy,
                vector: presentsVectors.Comfy,
                coordinationVector: {right: '0', top: '0'},
                text: [
                    [
                        {
                            subText: "10 ????????????????????????"
                        }
                    ],
                    [
                        {
                            subText: "????"
                        },
                        {
                            subText: " 500 ??????????????",
                            isBlue: true
                        }
                    ],
                ],

            },
            {
                presentCard: cardsArray.Zoo,
                vector: presentsVectors.Zoo,
                coordinationVector: {right: '-20px', bottom: '60px'},
                text: [
                    [{subText: "10 ????????????????????????"}],
                    [{subText: "????"},
                        {
                            subText: " 200 ??????",
                            isBlue: true
                        }]
                ],

            }
        ],
        [
            {
                presentCard: cardsArray.Mau,
                vector: presentsVectors.Mau,
                coordinationVector: {left: '-20px', top: '0'},
                text: [
                    [{subText: "5 ????????????????????????"}],
                    [{subText: "????"},
                        {
                            subText: " 2500 ??????",
                            isBlue: true
                        }]
                ],
            },
            {
                presentCard: cardsArray.Pandora,
                vector:
                presentsVectors.Pandora,
                coordinationVector:
                    {
                        left: '0px', top:
                            '100px'
                    }
                ,
                text: [
                    [{
                        subText: "??????????????????",
                        isBlue: true
                    }],
                    [{subText: "\"?????????????????? ????????????\"",}]
                ]
            },
            {
                presentCard: cardsArray.Garner,

                vector:
                presentsVectors.Garner,
                coordinationVector:
                    {
                        left: '0px', top:
                            '5px'
                    }
                ,
                text: [
                    [{subText: "3 ?????????????????????? ????"},
                        {
                            subText: " 500 ??????.",
                            isBlue: true
                        }],
                    [{subText: "100 ????????????????????"}],
                    [{subText: "???? ????????????"},
                        {
                            subText: " -20%",
                            isBlue: true
                        }]
                ],
            },
        ],
        [

            {
                presentCard: cardsArray.Street,
                vector: presentsVectors.Street,
                coordinationVector:
                    {
                        left: '0', bottom:
                            '20px'
                    }
                ,
                text: [
                    [{subText: "2 ?????????????????????? ????",},
                        {
                            subText: " 250 ??????.",
                            isBlue: true
                        }],
                    [{subText: "5 ???????????????????????? ????",},
                        {
                            subText: " 100 ??????.",
                            isBlue: true
                        }],
                    [{subText: "100 ???????????????????? ???? ????????????",},
                        {
                            subText: " -10%",
                            isBlue: true
                        }]
                ],
            },

            {

                presentCard: cardsArray.Books,
                vector: presentsVectors.Books,


                coordinationVector: {
                    left: '0', top:
                        '5px'
                },
                text: [
                    [{subText: "???????????????????? ????",},
                        {
                            subText: " 200 ??????.",
                            isBlue: true
                        }],
                    [{subText: "???????????????? ????",}],
                    [{
                        subText: "?????????????????????? ????????????????",
                        isBlue: true
                    }]
                ],
            },
            {
                presentCard: cardsArray.Grusha,
                vector: presentsVectors.Grusha,


                coordinationVector: {
                    right: '0', bottom: '50px'
                },

                text: [
                    [{subText: "???????????????? ????????", isBlue: true,}, {subText: " 250 ????."}],
                    [{subText: "?????? ???????????????? ?????????? UA",}],
                ],


            }],

    ];

    return <div className="present_new_black_friday">
        <div className="wrapper_new_title_box">
            <img id="presentTitle" src={Title} alt="title"/>
            <img id="presentTitleMobile" src={TitleMobile} alt="title"/>
            <img id="newArrowPresent" src={Arrow} alt="arrow"/>
        </div>
        {getPresents(presents)}
        <div className="wrapperLink">
            <div className="boxLink">
                <img id="vector_link" src={Vector} alt="vector"/>
                <a href="https://docs.google.com/document/d/19Wl_8e7VjHwqOCvYqTiPm_u49_nIA8GjuZ1z9ei3iPM/edit"
                   target="_blank">
                    <button>
                        ???????????? ??????????
                    </button>
                </a>
            </div>
        </div>
    </div>
}