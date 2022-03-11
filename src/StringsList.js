import './App.css';
import React, {useState} from "react";

export const StringsList = props => {
    useState()

    const newArr = [...props.list];

    const string = newArr
        .join(', ');

    return <p>{string}</p>

}