import React from "react";
import "./Main.style.scss";
import arrayImgs from "../../imgs/deliver/index";

export default function MainDeliver() {

    const getSend = (sendImg, text) => {
        return <div className="box_send">
            <img src={sendImg}/>
            <label>{text}</label>
        </div>
    };

    return <>
        <div className="wrapper_main_deliver">
            <div className="main_deliver">
                <div className="wrapper_text">
                    <h3>Доставляємо за адресою в таких містах</h3>
                </div>
                <img src={arrayImgs.Car} alt="car"/>
            </div>
            <div className="wrapper_map"><img src={arrayImgs.Map} alt="map"/></div>
            <div className="box_title">
                <p> Адресну доставку можна замовити: </p>
                <div className="wrapper_send">
                    {getSend(arrayImgs.Home, "при оформленні посилки у відділенні;")}
                    {getSend(arrayImgs.Phone, "при створенні посилки в мобільному додатку чи особистому кабінеті на justin.ua;")}
                    {getSend(arrayImgs.Kitchen, "при оформленні замовлення в інтернет-магазині (API).")}
                </div>
            </div>
        </div>
    </>
}