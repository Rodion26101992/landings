import React, {useState} from "react";
import "./Main.style.scss";
import arrayImgs from "../../imgs/deliver/index";

export default function MainDeliver() {
    const [citySelect, setCitySelect] = useState("");

    return <div className="main_deliver">
        <div className="wrapper_text">
            <h3>Доставляємо за адресою в таких містах</h3>
            <div className="select_wrapper">
                <select defaultValue={citySelect} name="citySelect" onClick={e => setCitySelect(e.target.value)}>
                    <option value="" disabled>Оберіть ваше місто</option>
                    <option value="test-1">test-1</option>
                    <option value="test-2">test-2</option>
                    <option value="test-3">test-3</option>
                </select>
            </div>
        </div>
        <img src={arrayImgs.Car} alt="car"/>
    </div>
}