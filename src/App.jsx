import PiggyBankComponent from "./components/piggy-bank/PiggyBank.component";
import FooterComponent from "./components/footer/Footer.component";
import HeaderComponent from "./components/header/Header.component"
import MainComponent from "./components/main/Main.component";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import MainHalloween from "./halloween2021";
import MainBlackFriday from "./blackFriday";
import NewBlackFriday from "./newBlackFriday";
import Scammers from "./scammer";


export default function App() {
    return (
        <div className='landing_page'>
            <HeaderComponent/>
            <Router>
                <Switch>
                    <Route path="/back_to_school">
                        <MainComponent/>
                        <PiggyBankComponent/>
                    </Route>
                    <Route path="/halloween">
                        <Redirect to="/blackfriday"/>
                    </Route>
                    <Route path="/blackfriday">
                        <NewBlackFriday/>
                    </Route>
                    <Route path="/scammers">
                        <Scammers/>
                    </Route>
                    <Route path="*">
                        <NewBlackFriday/>
                    </Route>
                </Switch>
            </Router>
            {/*<FooterComponent/>*/}
        </div>
    );
}

