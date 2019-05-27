import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//IMPORT COMPONENT
import Card from './Card';
import * as serviceWorker from './serviceWorker';
//IMPORT TACHYONS
import 'tachyons';

ReactDOM.render(
        <div>
         <Card />
         <Card />
         <Card />
        </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
