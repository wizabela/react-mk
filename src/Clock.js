import './App.css';
import React, {useEffect, useState} from "react";

//funkcyjny komponent:
export const Clock = props => {
    const [dt, setDt] = useState(new Date());

    useEffect(() => {

        setInterval(() => {
            setDt(new Date());
        }, 1000);

    }, []);

    return <p>{dt.toLocaleString()}</p>;
};


//klasowy komponent:
// export class Clock extends Component {
//     state = {
//         date: new Date(),
//     };
//     componentDidMount() {
//         this.timeId = setInterval(() => {
//             this.setState({
//                 date: new Date(),
//             })
//         }, 1000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timeId);
//     }
//     render() {
//         const {date} = this.state;
//         return <p>{date.toLocaleString('pl')}</p>
//     }
// }

//Wyświetla aktualną datę i czas w komponencie.