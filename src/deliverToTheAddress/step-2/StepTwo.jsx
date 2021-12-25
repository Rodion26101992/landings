import React from "react";
import "./StepTwo.style.scss";

export default function StepTwoDeliver() {

    return <div className="step_two_deliver">
        <div className="wrapper_more_deliver">
            <p>Список документів</p>
            <label>
                1. Паспорт громадянина України.<br/>
                2. Тимчасове посвідчення громадянина України.<br/>
                3. Посвідку на постійне проживання.<br/>
                4. Посвідчення на тимчасове проживання.<br/>
                5. Посвідчення біженця, видане в Україні.<br/>
                6. Паспорт громадянина України для виїзду за кордон.<br/>
                7. Тимчасове посвідчення, що підтверджує особу громадянина України.<br/>
                8. Паспорт іноземного громадянина, у якому відомості про особу вказані кирилицею та/або латиницею.
            </label>
            <button>
                Заборонені до перевезення посилки
            </button>
        </div>
        <div className="price_deliver">
            <div>
                <p>До 4 999 грн</p>
                <label>
                    Якщо послуги не сплачено, документи не потрібні.<br/><br/>
                    Якщо послуги Justin сплачено то достатньо картки клієнта у мобільному додатку, або один з
                    документів!
                </label>
            </div>
            <div>
                <p>Від 5 000 грн</p>
                <label>
                    При отриманні посилки від суми 5000 грн ЗАВЖДИ потрібні документи.
                </label>
            </div>
        </div>
    </div>
}