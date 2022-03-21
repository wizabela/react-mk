import '../App/App.css';
import React, {useEffect} from "react";

export const StringsList = props => {

    const lis = props.list
        .map(s => <li>{s}</li>);

    return <ul>{lis}</ul>

}