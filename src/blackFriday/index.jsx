import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import MainPageComponent from "./main/MainPage";
import "./index.scss";
import {ReactFlashlight} from 'react-flashlight';
import CustomFlashlight from "../custom/CustomFlashLight";
import StepTwoBlackComponent from "./step-2/StepTwo";
import lightOff from "../imgs/black-friday/black-friday-off.svg";
import lightOn from "../imgs/black-friday/black-friday-on.svg";
import StepOneComponent from "./step-1/StepOne";

const flashSize = 250;


export default function MainBlackFriday() {
    // const [prevBtCoord, setPrevBtCoord] = useState();
    // const [nextBtCoord, setNextBtCoord] = useState();
    const [isLight, handleLight] = useState(false);

    // let boxImgWidth;
    // let urlBtCoord;
    // let nextBtCoord;
    //
    // const arrOvers = [
    //     {
    //         originId: "#prevArrow",
    //         overId: "#overPrevBtCoord"
    //     },
    //     {
    //         originId: "#nextArrow",
    //         overId: "#overNextBtCoord"
    //     },
    //     {
    //         originId: "#urlDetails",
    //         overId: "#overUrlBtCoord"
    //     },
    // ];

    // function getCoord(item) {
    //     const a = document.querySelector(item.originId);
    //     getOverBtn(document.querySelector(item.originId).getBoundingClientRect(), item.overId)
    //
    //     // return c;
    // }

    // function getOverBtn(originId, overId) {
    //     const PageX = window.pageXOffset + originId.left;
    //     const PageY = window.pageYOffset + originId.top;
    //
    //     if (!originId) return
    //     if (!boxImgWidth) boxImgWidth = document.querySelector("#boxImg").getBoundingClientRect();
    //     const over = document.querySelector(overId);
    //     if (over) {
    //         over.style.position = "absolute";
    //         // over.style.left = overId === "#overNextBtCoord" ? originId.x - 39 + 'px' : originId.x + 'px';
    //         over.style.left = PageX + 'px';
    //         // over.style.top = originId.y + (boxImgWidth ? boxImgWidth.height : 585) + 'px';
    //         over.style.top = PageY + 'px';
    //         over.style.height = originId.height ? originId.height + 'px' : '57px';
    //         over.style.width = originId.width ? originId.width + 'px' : "39px";
    //         over.style.background = 'red';
    //         over.style.zIndex = '5';
    //         over.style.cursor = 'pointer';
    //     }
    // }

    const spotLightSize = 'transparent 0, rgba(0, 0, 0, 0.9) 500px';
    window.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('mousemove', e => updateSpotLight(e));

        function updateSpotLight(e) {
            const spotLight = document.querySelector("#spotLight");
            spotLight.style.background = `radial-gradient(circle  at ${e.pageX / window.innerWidth * 100}% ${e.pageY}px, ${spotLightSize}`;

        }
    });

    window.document.addEventListener('scroll', () => {
        const handlerLightElement = document.querySelector(".handlerLight");

        if (window.scrollY > 96) {
            handlerLightElement.style.position = 'fixed';
        } else {
            handlerLightElement.style.position = 'absolute';
        }

    });


    function handle() {
        const elem = document.querySelector("#spotLight");
        const elemModal = document.querySelector("#spotLightModal");
        !isLight ? elem.style.display = "none" : elem.style.display = "block";
        !isLight ? elemModal.style.display = "none" : elemModal.style.display = "block";
        handleLight(!isLight);

    }

    useEffect(() => {
        document.title = "Black Friday";
    }, []);
    return <div>
        <div className="wrapperReactFlashlight">
            <div className="handlerLight">
                <img src={!isLight ? lightOff : lightOn} alt="handleLight" onClick={handle}/>
            </div>
            <div id="spotLight" onClick={handle}/>
            <div id="spotLightModal"/>
            <div id="animationMobile"/>
            <MainPageComponent/>
            <StepOneComponent/>
            <StepTwoBlackComponent/>
        </div>
    </div>
}