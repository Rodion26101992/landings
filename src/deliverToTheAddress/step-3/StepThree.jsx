import React from "react";
import "./StepThree.style.scss";
import arrayImgs from "../../imgs/deliver";

export default function StepThreeDeliver() {

    return <div className="step_three_deliver">
            <h3>Наша базова цінова пропозиція щодо відправлень в межах України між фізичними особами</h3>
        <img src={arrayImgs.Table} alt="table"/>

        <div className="wrapper_button">
            <button>
                Додаткова інформація
            </button>
        </div>
    </div>
}