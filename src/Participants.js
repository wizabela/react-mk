import './App.css';
import React from "react";
import {StringsList} from "./StringsList";
import {RecordsCount} from "./RecordsCount";

export const Participants = props => {
    const names = props.list
        .map(person => person.name);

    return <>
        <StringsList list={names}/>
        <RecordsCount count={names.length}/>
        </>;
}