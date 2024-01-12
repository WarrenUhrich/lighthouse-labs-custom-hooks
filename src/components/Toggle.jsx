import { React, useState } from 'react';
import useToggle from '../hooks/useToggle';

const Toggle = () => {
    const [isSnowing, toggleSnowing] = useToggle();
    const [isHumid, toggleHumid] = useToggle();

    return (
        <section>
            <h2>How's the weather?</h2>
            {isSnowing && <p>🌨</p>}
            {!isSnowing && <p>☀</p>}
            <button onClick={toggleSnowing}>
                Click to Change Weather
            </button>
            and
            {isHumid && <p>🌊</p>}
            {!isHumid && <p>🌴</p>}
            <button onClick={toggleHumid}>
                Click to Change Humidity
            </button>
        </section>
    );
};

export default Toggle;
