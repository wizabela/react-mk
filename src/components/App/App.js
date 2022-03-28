import React, {useState} from "react";

import './App.css';


export const App = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);

    const sendForm = e => {
        e.preventDefault();

        const person = {
            firstName,
            lastName,
            age,
        };
        console.log(person);
    };

    return <form onSubmit={sendForm}>
        <p>
            <label>
                Imię:<br/>
                <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Nazwisko:<br/>
                <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Wiek:<br/>
                <input
                    type="number"
                    value={age}
                    onChange={e => setAge(Number(e.target.value))}/>
            </label>
        </p>
        <p>
            <button type="submit">Zarejestruj</button>
        </p>
    </form>
};