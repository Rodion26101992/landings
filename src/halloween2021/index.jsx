import React, {useEffect} from "react";
import MainPageComponent from "./main/MainPage";
import StepOneComponent from "./step-1/StepOne";
import StepTwoComponent from "./step-2/StepTwo";
import StepThreeComponent from "./step-3/StepThree";


export default function MainHalloween() {
    useEffect(() => {
        document.title = "Halloween 2021";
    }, []);
    return <div>
        <MainPageComponent/>
        <StepOneComponent/>
        <StepTwoComponent/>
        <StepThreeComponent/>
    </div>
}