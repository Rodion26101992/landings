import React, {useState} from "react";
import "./index.scss";
import MainDeliver from "./main/Main";
import StepOneDeliver from "./step-1/StepOne";
import StepTwoDeliver from "./step-2/StepTwo";
import StepThreeDeliver from "./step-3/StepThree";
import Forbidden from "./forbidden/Forbidden";


export default function DeliverToTheAddress() {
    const [isForbidden, setForbidden] = useState(false);

    function wrapperSetForbidden() {
        setForbidden(!isForbidden);
    }

    return <div className="root_deliver_to_the_address">
        <MainDeliver/>
        <StepOneDeliver/>
        <StepTwoDeliver setForbidden={wrapperSetForbidden} isForbidden={isForbidden}/>
        {isForbidden && <Forbidden/>}
        <StepThreeDeliver/>
    </div>
}