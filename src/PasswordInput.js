import React, {useState} from 'react';

import './PasswordInput.css';

export const PasswordInput = props => {
    const [shownPassword, setShownPassword] = useState('password');

    const clickedButton = e => {
        e.preventDefault();
        e.stopPropagation();
        setShownPassword(shownPassword => (
            shownPassword === "password"
                ? "text"
                : "password"
        ))
    };

    return <div className = "container">
        <input className="inputPassword" type={shownPassword}/>
        <button className="visibleButton" onMouseDown={clickedButton} onMouseUp={clickedButton}>Kliknij i przytrzymaj</button>
    </div>
};

//input typu password. Obok ma przycisk podglądu. Jego kliknięcie i przytrzymanie myszy wyświetla podgląd hasła.
//Puszczenie znów zakrywa hasło.