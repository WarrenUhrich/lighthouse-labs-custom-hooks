import React from 'react';
import useToggle from '../hooks/useToggle';

const TogglePageColours = () => {
    const [darkColours, toggleDarkColours] = useToggle(true);
    const [mood, toggleMood] = useToggle(true);

    // Change colours of document.
    document.documentElement.style.color = darkColours ? 'white' : 'black';
    document.documentElement.style.background = darkColours ? 'black' : 'white';

    return (
        <section>
            <h2>Toggle Page Colours</h2>
            <button onClick={toggleDarkColours}>
                Click Here to Change Colours!
            </button>
            <h3>How do you feel about this colour scheme?</h3>
            <button onClick={toggleMood}>
                {mood ? '😃' : '😡'}
            </button>
        </section>
    );
};

export default TogglePageColours;
