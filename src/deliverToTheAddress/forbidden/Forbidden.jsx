import React from "react";
import "./Forbidden.style.scss";
import arrayImgs from "../../imgs/deliver/index";

const getForbidden = (arrayForb) => {
    return arrayForb.map(({imgForbidden, alt, title, body}, index) => {
        return <div className={alt!=="Temperature"?"box_after":"box_after mr_t_20"} key={alt + index}>
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
            title: "Балон із рідиною чи газом",
            body: "За винятком порожніх балонів без вентиля",
        },
        {
            alt: "Product",
            imgForbidden: arrayImgs.Product,
            title: "Продукти харчування",
            body: "Винятком є продукти у вакуумній упаковці з терміном придатності понад 30 діб, що не потребують спеціального температурного режиму. Це має бути зазначено на упаковці.",
        },
        {
            alt: "Money",
            imgForbidden: arrayImgs.Money,
            title: "Грошові кошти (знаки)",
            body: "Зокрема, іноземна валюта, цінні папери.",
        },
        {
            alt: "Gun",
            imgForbidden: arrayImgs.Gun,
            title: "Вогнепальна та холодна зброя, її частини, інші предмети, призначені для нападу та оборони",
            body: "Зокрема, кастети, стилети, балончики з рідиною паралітичної дії тощо.",
        },
    ];
    const arrayForbiddenRight = [
        {
            alt: "Energy",
            imgForbidden: arrayImgs.Energy,
            title: "Акумулятори для авто, мото- та с/г техніки",
            body: "За винятком порожніх акумуляторів",
        },
        {
            alt: "Animals",
            imgForbidden: arrayImgs.Animals,
            title: "Тварини та рослини",
            body: "А також рештки тварин чи необроблене хутро. За винятком саджанців та хвойних дерев.",
        },
        {
            alt: "Medicinal",
            imgForbidden: arrayImgs.Medicinal,
            title: "Лікарські засоби, спирт етиловий, високооктанові кисневмісні домішки",
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