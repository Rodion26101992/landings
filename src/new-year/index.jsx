import React, {useEffect} from "react";
import "./index.scss";
import StepOne from "./step-1/StepOne";
import StepTwo from "./step-2/StepTwo";
import StepThree from "./step-3/StepThree";
import FooterComponent from "../components/footer/Footer.component";


export default function NewYear() {
    useEffect(() => {
        document.title = "New Year 2021";
    }, []);
    return <div className="root_new_year">
        <StepOne/>
        <StepTwo/>
        <StepThree/>
        <FooterComponent/>
    </div>
}