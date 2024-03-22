import React from 'react';
import useToggle from '../hooks/useToggle';

const TogglePageColours = () => {
    // const [darkColours, setDarkColours] = useState(false);
    // const [feeling, setFeeling] = useState(false);
    const [darkColours, toggleDarkColours] = useToggle(true);
    const [feeling, toggleFeeling] = useToggle(false);

    // Set colours for document.
    document.documentElement.style.color = darkColours ? 'white' : 'black';
    document.documentElement.style.background = darkColours ? 'black' : 'white';

    return (
        <section>
            <h2>Toggle Page Colours!</h2>
            <button onClick={toggleDarkColours}>
                Click Here to Change Colours!
            </button>
            <h3>How do you feel about this colour scheme?</h3>
            <button onClick={toggleFeeling}>
                {feeling ? '😁' : '😡'}
            </button>
        </section>
    );
};

export default TogglePageColours;
