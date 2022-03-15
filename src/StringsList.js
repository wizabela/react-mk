import './App.css';
import React, {useEffect} from "react";

export const StringsList = props => {

    const string = props.list
        .join(', ');

    useEffect(() => {
        console.log('Zmienia się lista.');
    }, [props.list]);

    return <p>{string}</p>

}