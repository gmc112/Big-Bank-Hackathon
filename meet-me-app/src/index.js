import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Table from "./Table";
import MapDif from "./MapDif";
import Questionnaire from "./Questionnaire";

ReactDOM.render(<Questionnaire />, document.getElementById('questionnaire'));
ReactDOM.render(<Table />, document.getElementById('table'));
ReactDOM.render(<MapDif />, document.getElementById('map'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
