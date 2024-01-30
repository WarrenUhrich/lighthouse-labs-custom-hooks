import React from 'react';
import useToggle from '../hooks/useToggle';

const ToggleWeather = () => {
    const [isSnowing, toggleSnowing] = useToggle();

    // const [isSnowing, setIsSnowing] = useState(true);

    // const handleClick = () => {
    //     setIsSnowing(prev => !prev); // Flip the boolean!
    // };

    return (
        <section>
            <h2>Toggle Weather</h2>
            {isSnowing && <p>❄</p>}
            {!isSnowing && <p>☀</p>}
            <button onClick={toggleSnowing}>
                Click to Change Weather
            </button>
        </section>
    );
};

export default ToggleWeather;
