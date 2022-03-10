import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Participants} from './Participants';

const data = [
    {
        name: 'Jan',
        email: 'jan@test.pl',
    },
    {
        name: 'Anna',
        email: 'anna@wp.pl',
    }
];

render(
    <React.StrictMode>
        <Participants
            list={data}
        />,
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
