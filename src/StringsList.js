import './App.css';
import React from "react";

export const StringsList = props => {
    const string = props.list.join(', ')

    return <p>{string}</p>

}