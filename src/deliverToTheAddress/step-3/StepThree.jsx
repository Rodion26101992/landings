import React from "react";
import "./StepThree.style.scss";
import arrayImgs from "../../imgs/deliver";


export default function StepThreeDeliver() {
    // const [isCalculation, setCalculation] = useState(false);
    // const [myCalculation, setMyCalculation] = useState();

    // async function getCalculation() {
    //     await axios.get('https://preprod.justin.ua/frame/calculate')
    //         .then(function ({data}) {
    //             setCalculation(!isCalculation);
    //             setMyCalculation(data)
    //             // return outputCalculation(data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    // function outputCalculation(data) {
    //     const element = document.getElementById("test");
    //     element.insertAdjacentHTML("afterBegin", data);
    //     element.documentElement.appendChild(data)
    //     // let doc = document.implementation.createHTMLDocument("New Document");
    //     //     doc.body.appendChild(data);
    //     //
    //     // // Copy the new HTML document into the frame
    //     //
    //     // let destDocument = element.contentDocument;
    //     // let srcNode = doc.documentElement;
    //     // let newNode = destDocument.importNode(data, true);
    //     // destDocument.replaceChild(newNode, destDocument.documentElement);
    //     // console.log(data);
    //
    //     // console.log("JSON.parse(data)",JSON.parse(data))
    //     // debugger
    //
    //     // const parser = new DOMParser();
    //     // const test = parser.parseFromString(data, "text/html")
    //
    //     // let t = document.createElement('test');
    //     // t.innerHTML = data;
    //
    //     // const doc = document.implementation.createHTMLDocument("test");
    //     // doc.documentElement.innerHTML = data;
    //     // ReactDOM.render(doc, document.getElementById('test'))
    //     // element.appendChild(data);
    // }

    return <div className="step_three_deliver">
        <h3>Наша базова цінова пропозиція щодо відправлень в межах України між фізичними
            особами</h3>
        <div className="wrapper_image">
            <img src={arrayImgs.Table} alt="table"/>
        </div>
        <div className="wrapper_button">
            <a href="https://justin.ua/" target="_blank">
                <button>
                    Додаткова інформація
                </button>
            </a>
            <a href="https://justin.ua/calculate" target="_blank">
                <button id="calculate">
                    Розрахувати вартість доставки
                </button>
            </a>
        </div>
    </div>
}
