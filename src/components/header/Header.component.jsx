import React, {useState, useCallback} from "react";
import "./Header.scss";
import LogoImg from "../../imgs/svg/logo.svg"

function NavBarHeader({isModal, setModal, classname}) {
    return <div className={!classname ? "wrapper_links" : classname}>
        <a href="https://justin.ua/departments/map">Відділення</a>
        <a href="https://justin.ua//calculate">Розрахунок вартості</a>
        <div className="documents" onClick={() => setModal(!isModal)}>Документи
            {isModal && < div className="modal_window">
                <a href="https://justin.ua/rates">Тарифи</a>
                <a href="https://justin.ua/terms">Умови надання послуг</a>
                <a href="https://justin.ua/files/Publychnyj-dogovor_DzhastYn.pdf">Публічний договір</a>
            </div>}
        </div>
        <a href="https://justin.ua/about-us">Про нас</a>
        <a href="https://international.justin.ua">Міжнародна доставка</a>
        <a href="https://justin.ua/business-clients">Бізнесу</a>
        <span>0-800-301-661</span>
    </div>
}


export default function HeaderComponent() {
    const [isModal, setModal] = useState(false);
    const [isModalMobile, setModalMobile] = useState(false);
    const memoizedCallback = useCallback(
        () => {
            setModalMobile(preIsModal => !preIsModal);
        },
        [],
    );
    return <header className="wrapper_header_component">
        <div className="wrapper_mobile_img">
            <a href="https://justin.ua/" target="_blank">
                <img className="pd-r-100" src={LogoImg} alt={LogoImg.toString()}/>
            </a>
        </div>
        <div className="isDesktop"><NavBarHeader isModal={isModal} setModal={setModal}/></div>
        <div className="mobile_nav">
            <button onClick={() => {
                setModalMobile(!isModalMobile)
            }}>Меню
            </button>
            {isModalMobile && <NavBarHeader isModal={isModal} setModal={setModal} classname="wrapper_links_mobile"/>}
        </div>
    </header>
}