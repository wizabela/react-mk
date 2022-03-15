import React, {useEffect, useState} from 'react';

export const CrazyInput = props => {
    const [inputType, setInputType] = useState('password');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setInputType(inputType => (
                inputType === 'password' ? 'text' : 'password'
            ));
        }, 1000);

        return () => clearInterval(intervalId); //uwaga na to

    }, [])
    return <input type={inputType}/>;
};