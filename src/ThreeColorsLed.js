import React, {useState} from 'react';

import './ThreeColorsLed.css'

export const ThreeColorsLed = props => {
    const [color, setColor] = useState('white');

    return <div className="ThreeColorsLed">
        <div className="ThreeColorsLed__box"
             style={{backgroundColor:color}}
        />
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('blue')}>Blue</button>
    </div>;
};