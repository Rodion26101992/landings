import React from "react";
import Main from "../../imgs/new-black-friday/main/";
import imgsMain from "../../imgs/new-black-friday/main";
import Title from "../../imgs/new-black-friday/step_box/title.png";
import Arrow from "../../imgs/new-black-friday/slider/vector.png";
import "./MainStyle.scss";


export default function MainPageComponent() {
    return <div className="main_black_friday">
        <img id="main" src={imgsMain.Main} alt="main"/>
        <div className="box_title">
            <img src={Arrow} alt="arrow"/>
            <div className="box_text">
                <p>
                    <label className="blue_color">Купуй</label>
                    <label>в магазинах</label>
                </p>
                <p>партнерів</p>
            </div>
        </div>
        {/*<div className="boxLabel">*/}
        {/*    <h3>Black Friday</h3>*/}
        {/*    <img className="basic" src={imgsMain.BlueTitle} alt="blueTitle"/>*/}
        {/*    <img className="serpantinLeft" src={imgsMain.SerpantinLeft} alt="serpantinLeft"/>*/}
        {/*    <img className="serpantinRight" src={imgsMain.SerpantinRight} alt="serpantinRight"/>*/}
        {/*</div>*/}
        {/*<label>15-28 листопада</label>*/}
        {/*<div className="wrapper_serpantin">*/}
        {/*    <div className="box_serpantin">*/}
        {/*        <img src={imgsMain.RedBack} alt="redBack"/>*/}
        {/*        <div className="box_text">*/}
        {/*            <p>Безкоштовна</p>*/}
        {/*            <p>доставка.</p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
}