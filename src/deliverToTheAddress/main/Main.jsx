import React, {useState, useEffect} from "react";
import "./Main.style.scss";
import arrayImgs from "../../imgs/deliver/index";
import axios from "axios";

export default function MainDeliver() {
    const [citySelect, setCitySelect] = useState("");
    const [citiesSelectList, setCitiesSelectList] = useState([]);

    useEffect(() => {
        axios.get('https://preprod.justin.ua/json/cities')
            .then(function ({data}) {
                console.log(data);
                return setCitiesSelectList(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return <div className="main_deliver">
        <div className="wrapper_text">
            <h3>Доставляємо за адресою в таких містах</h3>
            <div className="select_wrapper">
                <select defaultValue={citySelect} name="citySelect" onClick={e => setCitySelect(e.target.value)}>
                    {/*<optgroup label="">*/}
                        <option value="" disabled>Оберіть ваше місто</option>
                        {citiesSelectList.map((item, index) => {
                            return <option value={item.title_ua} key={item.title_ua + index}>{item.title_ua}</option>
                        })}
                    {/*</optgroup>*/}
                </select>
            </div>
        </div>
        <img src={arrayImgs.Car} alt="car"/>
    </div>
}