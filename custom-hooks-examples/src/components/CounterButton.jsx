import React from 'react';
import useCounter from '../hooks/useCounter';
import useToggle from '../hooks/useToggle';

const CounterButton = (props) => {
    const {count, addToCount} = useCounter(props.initNum, props.iterator);
    const [visible, toggleVisibility] = useToggle(true);
    return (
        <div>
            <button style={{display: visible ? 'inline' : 'none'}} onClick={() => addToCount()}>
                {count}
            </button>
            <button onClick={toggleVisibility}>
                {visible ? 'Hide' : 'Show'}
            </button>
        </div>
    );
};

export default CounterButton;
