import './App.css';
import React from "react";

export const StringsList = props => {
    const newArr = [...props.list, props.list.length];

    const string = newArr
        .join(', ');

    return <p>{string}</p>

}