import React, {useEffect, useState} from "react";
import "./index.scss";
import lightOff from "../imgs/black-friday/black-friday-off.svg";
import lightOn from "../imgs/black-friday/black-friday-on.svg";
import MainPageComponent from "./main/MainPage";
import StepBoxComponent from "./step-1/StepBox";
import SliderWrapperComponent from "./slider-partners/SliderWrapper";
import PresentsComponent from "./presents/Presents";


export default function NewBlackFriday() {
    const [isLight, handleLight] = useState(false);

    const spotLightSize = 'transparent 0, rgba(0, 0, 0, 0.95) 500px';
    window.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('mousemove', e => updateSpotLight(e));

        function updateSpotLight(e) {
            const spotLight = document.querySelector("#spotLightNew");
            spotLight.style.background = `radial-gradient(circle  at ${e.pageX / window.innerWidth * 100}% ${e.pageY}px, ${spotLightSize})`;
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
        const elem = document.querySelector("#spotLightNew");
        const elemModal = document.querySelector("#spotLightModalNew");
        !isLight ? elem.style.display = "none" : elem.style.display = "block";
        !isLight ? elemModal.style.display = "none" : elemModal.style.display = "block";
        handleLight(!isLight);
    }

    useEffect(() => {
        document.title = "Black Friday";
    }, []);
    return <div>
        <div className="wrapperNewReactFlashlight">
            <div className="handlerLight">
                <img src={!isLight ? lightOff : lightOn} alt="handleLight" onClick={handle}/>
            </div>
            <div id="spotLightNew" onClick={handle}/>
            <div id="spotLightModalNew"/>
            <div id="animationMobileNew"/>
            <MainPageComponent/>
            <SliderWrapperComponent/>
            <StepBoxComponent/>
            <PresentsComponent/>
        </div>
    </div>
}