import React, {useEffect, useState} from 'react';

export const CrazyInput = props => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundColor(backgroundColor => (
                backgroundColor === 'white' ? 'yellow' : 'white'
            ));
        }, 500);

        return () => clearInterval(intervalId); //uwaga na to

    }, [])
    return <input type="password" className="info"/>;
};