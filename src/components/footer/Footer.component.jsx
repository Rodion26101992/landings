import React from "react";
import "./Footer.scss";
import MobileImg from "../../imgs/svg/footer_mobile.svg"
import QRCodeImg from "../../imgs/svg/footer_qr_code.svg"
import AppleStoreImg from "../../imgs/svg/apple_store.svg"
import GooglePlayImg from "../../imgs/svg/google_play.svg"
import ArrowTopImg from "../../imgs/svg/arrow_top.svg"
import FooterMobile from "../../imgs/svg/footer_mobile.svg";


export default function FooterComponent() {
    return <div className="wrapper_footer_component">
        <div className="wrapper_mobile_img">
            <img src={FooterMobile} alt={MobileImg.toString()}/>
            <img className="arrow_top" src={ArrowTopImg}
                 alt={ArrowTopImg.toString()}
                 onClick={() => {
                     window.scrollTo({behavior: "smooth", top: 0, left: 0});
                 }}/>
        </div>
        <div className="wrapper_bt">
            <a href="http://onelink.to/g3n9m8">
                <button>Завантажити застосунок</button>
            </a>
        </div>
        <div className="wrapper_info_app">
            <h3 className="desktop_title"> Скануйте та завантажуйте </h3>
            <h3 className="mobile_title"> Завантажуйте </h3>

            <h3> Justin на смартфон</h3>
            <div className="wrapper_app desktop_title">
                <a href="https://play.google.com/store/apps/details?id=ua.justin">
                    <img src={GooglePlayImg} alt={GooglePlayImg.toString()}/>
                </a>
                <a href="https://apps.apple.com/ua/app/justin/id1473108021">
                    <img src={AppleStoreImg} alt={AppleStoreImg.toString()}/>
                </a>
            </div>
        </div>
        <img className="pd-r-100" src={QRCodeImg} alt={QRCodeImg.toString()}/>
    </div>

}