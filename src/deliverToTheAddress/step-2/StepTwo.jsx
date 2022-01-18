import React from "react";
import "./StepTwo.style.scss";

export default function StepTwoDeliver({setForbidden, isForbidden}) {

    return <div className="step_two_deliver">
        <div className="wrapper_more_deliver">
            <p>Список документів</p>
            <label>
                1. Паспорт громадянина України. <br/>
                2. Тимчасове посвідчення громадянина України. <br/>
                3. Посвідчення на постійне/тимчасове проживання. <br/>
                4. Посвідчення біженця, видане в Україні. <br/>
                5. Паспорт громадянина України для виїзду за кордон. <br/>
                6. Тимчасове посвідчення, що підтверджує особу громадянина України. <br/>
                7. Паспорт іноземного громадянина, у якому відомості про особу вказані кирилицею та/або латиницею. <br/>
            </label>
            {!isForbidden && <button onClick={setForbidden}>
                Заборонені до перевезення посилки
            </button>
            }
        </div>
        <div className="price_deliver">
            <div>
                <p>До 4 999 грн</p>
                <label>
                    Якщо послуги доставки не оплачені, документи
                    не потрібні.<br/>
                    Якщо послуги доставки оплачені, потрібен один із документів або QR-код мобільного додатку
                </label>
            </div>
            <div>
                <p>Від 5 000 грн</p>
                <label>
                    Потрібно надати один із документів зі списку.
                </label>
            </div>
        </div>
    </div>
}