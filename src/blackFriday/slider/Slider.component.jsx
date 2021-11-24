import React from "react";
import SliderSlick from "react-slick";
import "./Slider.scss"
import ImgLaptop from "../../imgs/svg/laptop.svg";
import ImgHeadPhone from "../../imgs/svg/headphones.svg";
import ImgSilpo from "../../imgs/svg/silpo.svg";
import ImgComfy from "../../imgs/svg/comfy_card.svg";
import ImgNextArrow from "../../imgs/svg/next_arrow.svg";
import ImgPrevArrow from "../../imgs/svg/prev_arrow.svg";
import ImgBag from "../../imgs/svg/bag.svg";
import ImgBoard from "../../imgs/svg/board_football.svg";
import ImgSetChildren from "../../imgs/svg/set_children.svg";
import ImgEldorado from "../../imgs/svg/eldorado_card.svg";


export function PrevArrowComponent(props) {
    const {onClick} = props;

    return (
        <img
            id="prevArrow"
            src={ImgPrevArrow}
            alt="ImgNextArrow"
            className="pre_arrow"
            onClick={onClick}
        />
    );
}

function NextArrowComponent(props) {
    const {onClick} = props;
    return (
        <img
            id="nextArrow"
            src={ImgNextArrow}
            alt="ImgNextArrow"
            className="next_arrow"
            onClick={onClick}
        />
    );
}


export default function SliderBlackComponent() {
    const settings = {
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        speed: 800,
        slidesToScroll: 1,
        className: "slider_adaptive",
        prevArrow: <PrevArrowComponent/>,
        nextArrow: <NextArrowComponent/>,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    // centerPadding: "155px",
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 812,
                settings: {
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerPadding: "100px",
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return <div className="wrapper_slider_black">
        <div className="isDesktop">
            <SliderSlick {...settings}>
                <div className="wrapper_slid">
                    <img className="basicImg" src={ImgSetChildren} alt="imgSetChildren"/>
                    <label>Набір маркерів та альбом для малювання від MauDau</label>
                </div>
                <div className="wrapper_slid">
                    <img className="basicImg" src={ImgBoard} alt="imgBoard"/>
                    <label>Настільний футбол від MauDau</label>
                </div>
                <div className="wrapper_slid">
                    <img className="basicImg small_img" src={ImgLaptop} alt="imgLaptop"/>
                    <label className="laptop">Ноутбук від Фокстрот</label>
                </div>
                <div className="wrapper_slid">
                    <img className="basicImg" src={ImgSilpo} alt="imgSilpo"/>
                    <label>10 сертифікатів на 500 грн від Сільпо</label>
                </div>
                <div className="wrapper_slid">
                    <img className="basicImg" src={ImgEldorado} alt="imgEldorado"/>
                    <label>1000 бонусів на рахунок від Eldorado 10 переможцям</label>
                </div>
                <div className="wrapper_slid">
                    <img className="basicImg" src={ImgComfy} alt="imgComfy"/>
                    <label>200 бонусів на рахунок від Comfy 10 переможцям</label>
                </div>

                <div className="wrapper_slid">
                    <img className="basicImg small_img" src={ImgHeadPhone} alt="ImgHeadPhone"/>
                    <label>10 бездротових навушників від Фокстрот 10 переможцям</label>
                </div>
                <div className="wrapper_slid">
                    <img className="basicImg" src={ImgBag} alt="imgBag"/>
                    <label>Шкільний рюкзак Upixel від MauDau</label>
                </div>

                {/*<div className="silpo">*/}
                {/*  <img src={ImgComfy} alt={ImgComfy.toString()}/>*/}
                {/*    <label>10 сертифікатів на 500 грн від Сільпо</label>*/}
                {/*</div> */}

            </SliderSlick>
        </div>
    </div>
}