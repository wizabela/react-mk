import React, {useState} from "react";

import './App.css';


export const App = props => {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: 0,
    });


    const sendForm = e => {
        e.preventDefault();

        console.log(person);
    };

    return <form onSubmit={sendForm}>
        <p>
            <label>
                Imię:<br/>
                <input
                    type="text"
                    value={person.firstName}
                    onChange={e => setPerson({
                        ...person,
                        firstName: e.target.value,
                    })}
                />
            </label>
        </p>
        <p>
            <label>
                Nazwisko:<br/>
                <input
                    type="text"
                    value={person.lastName}
                    onChange={e => setPerson({
                        ...person,
                        lastName: e.target.value,
                    })}/>
            </label>
        </p>
        <p>
            <label>
                Wiek:<br/>
                <input
                    type="number"
                    value={person.age}
                    onChange={e => setPerson({
                        ...person,
                        age: Number(e.target.value),
                    })}/>
            </label>
        </p>
        <p>
            <button type="submit">Zarejestruj</button>
        </p>
    </form>
};