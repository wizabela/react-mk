import './App.css';
import React, {useEffect, useState} from "react";
import {StringsList} from "./StringsList";

export const Numbers = props => {
    const [numbers, setNumbers] = useState([1]);

    useEffect(() => {
        const intervalId = setInterval(() => {

            setNumbers(numbers => [...numbers, numbers.length + 1]);

        }, 1000);

        return () => clearInterval(intervalId); //zwracamy funkcję, która będzie czyściła
    }, []);


    return <StringsList list={numbers}/>;
};


//komponent klasowy:
// export class Numbers extends Component {
//     state = {
//         number: [1],
//     };
//
//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//
//             this.setState(prev => ({
//                 number: [...prev.number, prev.number.length+1],
//             }));
//
//         }, 1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.intervalId);
//     }
//
//     render() {
//         const {number} = this.state;
//         return <StringsList list={number}/>
//     }
// }