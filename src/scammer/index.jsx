import React from "react";
import "./index.scss";
import StepOne from "./step-1/StepOne";
import StepTwo from "./step-2/StepTwo";
import StepThree from "./step-3/StepThree";
import StepFour from "./step-4/StepFour";
import StepFive from "./step-5/StepFive";


export default function Scammers() {
    return <div className="root_scammer">
        <StepOne/>
        <StepTwo/>
        <StepThree/>
        <StepFour/>
        <StepFive/>
    </div>
}