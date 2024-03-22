import React from 'react';
import useCounter from '../hooks/useCounter';

// [X] 1. keep track of count
// [X] 2. add to counter (specify number to add)
// [X] 3. reset counter

const Counter = (props) => {
    const { count, resetCount, addToCount } = useCounter(15, 5);

    return (
        <section>
            <h2>{props.heading ? props.heading : 'Counter'}</h2>
            <button onClick={() => addToCount()}>
                Current Count: {count}
            </button>
            <button onClick={resetCount}>
                Reset Count
            </button>
        </section>
    );
};

export default Counter;
