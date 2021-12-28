import React from "react";
import "./index.scss";
import MainDeliver from "./main/Main";
import StepOneDeliver from "./step-1/StepOne";
import StepTwoDeliver from "./step-2/StepTwo";
import StepThreeDeliver from "./step-3/StepThree";


export default function DeliverToTheAddress() {
    return <div className="root_deliver_to_the_address">
        <MainDeliver/>
        <StepOneDeliver/>
        <StepTwoDeliver/>
        <StepThreeDeliver/>
    </div>
}