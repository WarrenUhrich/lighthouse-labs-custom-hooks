import React, { useState } from 'react';

// [X] 1. keep track of count
// [X] 2. add to counter (specify number to add)
// [X] 3. reset counter

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const addToCount = (numToAddBy=1) => {
        setCount(prev => prev + Number(numToAddBy));
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <section>
            <h2>{props.heading ? props.heading : 'Counter'}</h2>
            <button onClick={() => addToCount(2)}>
                Current Count: {count}
            </button>
            <button onClick={resetCount}>
                Reset Count
            </button>
        </section>
    );
};

export default Counter;
