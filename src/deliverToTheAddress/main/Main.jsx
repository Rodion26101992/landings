import React, {useState} from "react";
import "./Main.style.scss";
import arrayImgs from "../../imgs/deliver/index";

export default function MainDeliver() {
    const [citySelect, setCitySelect] = useState(null);

    return <div className="main_deliver">
        <div className="wrapper_text">
            {citySelect && <h3>{citySelect}</h3>}
            <h3>Доставляємо за адресою в таких містах</h3>
            <select name="citySelect" onClick={e => setCitySelect(e.target.value)}>
                <option value="test-1">test-1</option>
                <option value="test-2">test-2</option>
                <option value="test-3">test-3</option>
            </select>
        </div>
        <img src={arrayImgs.Car} alt="car"/>
    </div>
}