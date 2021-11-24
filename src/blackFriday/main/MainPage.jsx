import React from "react";
import "./MainStyle.scss";

export default function MainPageComponent() {
    return <div className="main_component_black_friday">
        <h1>Black Friday</h1>
        <label>15-28 листопада</label>
        <div className="box_title">
            <p>Чорний розпродаж.</p>
            <p>Безкоштовна доставка.</p>
            <p>Цінні призи від партнерів.</p>
        </div>
    </div>
}