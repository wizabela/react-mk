import React from "react";
import './App.css';
import {Progressbar} from "./Progressbar";


export const App = props => (
    <>
        <Progressbar percentage={0}/>
        <Progressbar percentage={25}/>
        <Progressbar percentage={50}/>
        <Progressbar percentage={75}/>
        <Progressbar percentage={100}/>
    </>
);