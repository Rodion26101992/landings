import React, {useEffect} from "react";
import "./Main.scss";
import OneStepComponent from "./oneStep/OneStep.component";
import MainPageComponent from "./main-page/MainPage.component";
import TwoStepComponent from "./twoStep/TwoStep.component";
import ThreeStepComponent from "./threeStep/ThreeStep.component";
import WinnersComponent from "./Winners/Winners.component";

export default function MainComponent() {
    useEffect(() => {
        document.title = "Back to school";
    }, []);
    return <div className="main_component">
        <MainPageComponent/>
        <OneStepComponent/>
        <TwoStepComponent/>
        <ThreeStepComponent/>
        <WinnersComponent/>
    </div>
}