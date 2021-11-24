import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-129735734-1');
// ReactGA.pageview("https://justin.ua/back_to_school");

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
