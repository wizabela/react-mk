import React, {useState} from "react";
import './App.css';


export const App = props => {
    const [firstName, setFirstName] = useState('');

    const color = firstName[0] === '@' ? 'green' : 'red';

    return <>
        <h1>Hello, {firstName}!</h1>
        <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value.toUpperCase)}
            style={{backgroundColor: color}}
        />
        <p>You've entered {firstName.length} characters.</p>
    </>;
};