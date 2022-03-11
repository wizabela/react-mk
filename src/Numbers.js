import './App.css';
import React, {Component} from "react";
import {StringsList} from "./StringsList";

export class Numbers extends Component {
    state = {
        number: [1],
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {

            this.setState(prev => ({
                number: [...prev.number, prev.number[prev.number.length-1] + 1],
            }));

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {number} = this.state;
        return <StringsList list={number}/>
    }
}