import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const name = prompt('Podaj imię');

if (name === '') {
    render(
        <strong>Brak imienia.</strong>,
        document.getElementById('root')
    );
} else {
    render(
        <h1>{name}</h1>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
