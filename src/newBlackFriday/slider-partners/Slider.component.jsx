import React from "react";
import SliderSlick from "react-slick";
import "./Slider.scss"
import ImgArrow from "../../imgs/new-black-friday/slider/arrow.png";



export function PrevArrowComponent(props) {
    const {onClick} = props;

    return (
        <img
            id="prevArrow"
            src={ImgArrow}
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
            src={ImgArrow}
            alt="ImgNextArrow"
            className="next_arrow"
            onClick={onClick}
        />
    );
}

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
};

function partnersCompany(partners) {
    return partners.map((partner) => {
        return <div className="boxPartner" key={partner.partnerImg.toString()}>
            <a href={partner.partnerUrl} target="_blank">
                <img src={partner.partnerImg} alt={partner.partnerImg.toString()}/>
            </a>
        </div>
    })


}

export default function SliderPartnersComponent({arrayPartners}) {
    const settings = {
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 10,
        rows: 2,
        // slidesPerRow: 2,
        autoplay: true,
        speed: 800,
        slidesToScroll: 1,
        className: "slider_adaptive",
        prevArrow: <PrevArrowComponent/>,
        nextArrow: <NextArrowComponent/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 3,
                    rows: 4,
                    arrows: false,
                    // centerPadding: "100px",
                    // dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    centerMode: false,
                    slidesToShow: 3,
                    rows: 4,
                    arrows: false,
                }
            }
        ]
    };


    return <div className="wrapper_slider_black">
        <div className="isDesktop">
            <SliderSlick {...settings}>
                {partnersCompany(arrayPartners)}

            </SliderSlick>
        </div>
    </div>
}