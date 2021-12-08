import React from "react";
import SliderSlick from "react-slick";
import "./Slider.style.scss"
import arrayImgs from "../../imgs/scammer/index";


export function PrevArrowComponent(props) {
    const {onClick} = props;

    return (
        <img
            id="prevArrow"
            src={arrayImgs.Arrow}
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
            src={arrayImgs.Arrow}
            alt="ImgNextArrow"
            className="next_arrow"
            onClick={onClick}
        />
    );
}

function getSlid(arrayText) {
    return arrayText.map((text, index) => {
        return <div className="boxText" key={`slide-${index}`}>
            <label>
                {text}
            </label>
        </div>
    })

}

export default function SliderScammerComponent({arrayText}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slider_adaptive",
        prevArrow: <PrevArrowComponent/>,
        nextArrow: <NextArrowComponent/>,
    };


    return <div className="wrapper_slider_scammer">
        <div className="isDesktop">
            <SliderSlick {...settings}>
                {getSlid(arrayText)}
            </SliderSlick>
        </div>
    </div>
}