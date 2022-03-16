import React, {useEffect, useState} from 'react';
import {Progressbar} from "./Progressbar";

export const AnimatedProgressbar = props => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
          setPercentage(percentage => {
              if (percentage >= 100) {
                  clearInterval(intervalId);
                  return percentage;
              }

              return percentage + 0.2;
          });

      }, 16);

      return () => clearInterval(intervalId);
    }, []);

    return <Progressbar percentage={Math.round(percentage)}/>;
}