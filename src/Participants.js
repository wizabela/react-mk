import './App.css';
import React from "react";

export const Participants = (props) => {
    const names = props.list
        .map(person => person.name)
        .join(', ');

    return <>
        <p>{names}</p>
        <p>Razem: {props.list.length} rekordów.</p>
        </>;
}