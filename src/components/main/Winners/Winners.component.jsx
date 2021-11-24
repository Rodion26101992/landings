import React from "react";
import "./Winners.scss";
import ImgComfy from "../../../imgs/svg/comfy_card.svg";

import ImgLaptop from "../../../imgs/svg/laptop.svg";
import ImgHeadPhone from "../../../imgs/svg/headphones.svg";
import ImgSilpo from "../../../imgs/svg/silpo.svg";
import ImgBag from "../../../imgs/svg/bag.svg";
import ImgBoard from "../../../imgs/svg/board_football.svg";
import ImgSetChildren from "../../../imgs/svg/set_children.svg";
import ImgEldorado from "../../../imgs/svg/eldorado_card.svg";

function getWinners(winners) {
    return <div className="wrapper_winner">
        {winners.map((winner, index) =>
            <div className="winner" key={`wrapper_winner_${index}`}>
                <img src={winner.imgWinner} alt={winner.imgWinner}/>
                <p>{winner.title}</p>
                <label>  {
                    winner.arrayWinners.map((item, indexWinner) => {
                            return <label key={`number_winner_${indexWinner}`}>{item} </label>
                        }
                    )} </label>

            </div>)
        }
    </div>
}


export default function WinnersComponent() {
    const winners = [{
        imgWinner: ImgComfy,
        title: "200 бонусів від Comfy отримують:",
        arrayWinners: [
            "419982494,", "420581894,", "419875582,", "419816158,",
            "420166221,", "420009254,", "420140647,", "420248966,",
            "419870092,", "419870092;"
        ]
    },
        {
            imgWinner: ImgEldorado,
            title: "1000 бонусів від Eldorado отримують:",
            arrayWinners: [
                "420146765,", "420119296,", "420348277,", "420043473,",
                "420010935,", "419740830,", "419738024,", "420159281,",
                "419871826,", "420047152;"
            ]
        },
        {
            imgWinner: ImgSilpo,
            title: "Сертифікати від Сільпо отримують:",
            arrayWinners: [
                "419965605,", "420337309,", "419872502,", "420560768,",
                "420528242,", "420368690,", "419959004,", "420429701,",
                "420343628,", "420176889;"
            ]
        },
        {
            imgWinner: ImgHeadPhone,
            title: "Бездротові навушники від Foxtrot отримують: ",
            arrayWinners: [
                "420394223,", "419858672,", "420564616,", "420331076,", "419771245,", "420627866,",
                "420399430,", "420082591,", "420231641,", "419688126;",
            ]
        },
        {
            imgWinner: ImgSetChildren,
            title: "Набір маркерів та альбом для малювання від MauDau отримує:",
            arrayWinners: [
                "419783968",
            ]
        },
        {
            imgWinner: ImgBoard,
            title: "Настільний футбол від MauDau отримує:",
            arrayWinners: [
                "420671032",
            ]
        },
        {
            imgWinner: ImgBag,
            title: "Шкільний рюкзак від MauDau отримує:",
            arrayWinners: [
                "419760069",
            ]
        },
        {
            imgWinner: ImgLaptop,
            title: "Ноутбук від Foxtrot отримує:",
            arrayWinners: [
                "420003434",
            ]
        },


    ];
    return <div className="wrapper_winners">
        <h3>Переможці акції:</h3>
        {getWinners(winners)}
        <p className="congratulation">Вітаємо переможців! Найближчим часом з вами зв'яжуться для передачі
            подарунків.</p>
    </div>

}