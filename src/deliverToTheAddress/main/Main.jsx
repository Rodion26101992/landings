import React, {useState, useEffect} from "react";
import "./Main.style.scss";
import arrayImgs from "../../imgs/deliver/index";
import axios from "axios";
import {useRouteMatch} from "react-router-dom";

export default function MainDeliver() {
    const [citySelect, setCitySelect] = useState("");
    const [citiesSelectList, setCitiesSelectList] = useState([]);

    useEffect(() => {
        axios.get(`${window.location.origin}/json/cities?targeted_delivery=1`)
            .then(function ({data}) {
                return setCitiesSelectList(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return <div className="wrapper_main_deliver">
        <div className="main_deliver">
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
        <div className="box_title">
            <p> Як замовити адресну доставку? </p>
            <label>Наразі адресну доставку можна замовити тільки під час оформлення посилки у відділенні.</label>
        </div>
    </div>
}