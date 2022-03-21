import React from 'react';

import './Progressbar.css';

export const Progressbar = props => {
    return <div
        className="Progressbar"
        style={{
            width: `${props.percentage}%`,
        }}
    >
        {
            props.percentage > 10
                ? <p>{props.percentage}%</p>
                : null
        }
    </div>;
};

//progress bar przekazuj przez props ile % ma wyświetlać: 0%, 50%, 100%