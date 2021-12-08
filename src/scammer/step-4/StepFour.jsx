import React from "react";
import "./StepFour.style.scss";
import arrayImgs from "../../imgs/scammer";


export default function StepFour() {
    return <div className="step_four_scammer">
        <div className="wrapper_text">
            <h3>Запам’ятайте, 100% шахрайство, якщо вас просять:</h3>
            <label>1. Оплатити замовлення через посилання на сторонній сайт.<br/>
                2. Перейти до месенджеру для обговорення оплати/деталей замовлення.<br/>
                3. Секретні коди та паролі від особистого кабінету.<br/>
                4. PIN-код чи CVV-код банківської карти, пароль для входу в інтернет-банкінг, коди з смс/повідомлень у
                месенджерах тощо.<br/>
                5. Надати скани документів для оформлення замовлення.<br/>
            </label>
        </div>
        <img id="sign" src={arrayImgs.Sign} alt="scammer"/>
    </div>
}