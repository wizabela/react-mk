import './App.css';
import React, {Component} from "react";

export class Clock extends Component {
    state = {
        date: new Date(),
    };
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    render() {
        const {date} = this.state;
        return <p>{date.toLocaleString('pl')}</p>
    }
}

//Wyświetla aktualną datę i czas w komponencie.