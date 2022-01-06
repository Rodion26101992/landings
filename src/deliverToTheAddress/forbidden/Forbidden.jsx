import React from "react";
import "./Forbidden.style.scss";
import arrayImgs from "../../imgs/deliver/index";

const getForbidden = (arrayForb) => {
    return arrayForb.map(({imgForbidden, alt, title, body}, index) => {
        return <div className="box_after" key={alt + index}>
            <div className="box_img"><img src={imgForbidden} alt={alt}/></div>
            <p>{title}</p>
            <label>{body}</label>
        </div>
    })
};

export default function Forbidden() {
    const arrayForbiddenLeft = [
        {
            alt: "Balon",
            imgForbidden: arrayImgs.Balon,
            title: "Балон з рідіною та газом",
            body: "За вийнятком порожніх балонів без вентиля",
        },
        {
            alt: "Product",
            imgForbidden: arrayImgs.Product,
            title: "Продукти харчування",
            body: "Винятком е продукти у вакуумній упаковци з терміном придатности понад 30 діб, що не потребують спеціального температурного режиму і про це зазначено на упаковці.",
        },
        {
            alt: "Money",
            imgForbidden: arrayImgs.Money,
            title: "Грошові кошти (знаки)",
            body: "Зокрема іноземна валюта, цінні папери",
        },
        {
            alt: "Gun",
            imgForbidden: arrayImgs.Gun,
            title: "Вогнепальна зброя та ії частини, боєприпаси, холодна зброя й інщі предмети спеціально призначені для нападу та оборони",
            body: "Кастети, стилети, балончики з рідиною, паралітичної дії тощо",
        },
    ];
    const arrayForbiddenRight = [
        {
            alt: "Energy",
            imgForbidden: arrayImgs.Energy,
            title: "Автомобільні акумулятори, акумулятори для мото-та с/г техніки",
            body: "За винятком порожніх акумуляторів",
        },
        {
            alt: "Animals",
            imgForbidden: arrayImgs.Animals,
            title: "Тварини та рослини",
            body: "Рештки тварин чи необробдене хутро, рослини за винятком, саджанців та хвойніх дерев.",
        },
        {
            alt: "Medicinal",
            imgForbidden: arrayImgs.Medicinal,
            title: "Лікарські засоби, спирт етиловий, високооктанові кисневмісні домішкі",
            body: "Будь-які ліки, хімічні сполуки, які додаються до бензину",
        },
        {
            alt: "Temperature",
            imgForbidden: arrayImgs.Temperature,
            title: "Відправлення, що вимагають спеціального температурного режиму",
            body: "Охолоджені або заморожені продукти, молочні продукти, ягоди, ветеринарні імунобіологічні засоби тощо",
        },
    ];

    return <div className="forbidden">
        <h3>Заборонені до перевезення посилки</h3>
        <div className="wrapper_box_forbidden">
            <div className="box_info">  {getForbidden(arrayForbiddenLeft)}</div>
            <div className="box_info right">{getForbidden(arrayForbiddenRight)}</div>
        </div>


    </div>
}