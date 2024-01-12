import { React, useState } from 'react';

import useCounter from '../hooks/useCounter';

const Counter = () => {
    // const [count5, increment5, reset5, decrement5] = useCounter(5);
    // const [count10, increment10, reset10, decrement10] = useCounter(10);

    const {count, reset, decrement} = useCounter(1);
    const {count: count50, reset: reset50, increment: increment50, decrement: decrement50} = useCounter(50);

    return (
        <section>

            <h2>Counter 1</h2>
            <p>
                The current count is: {count}
            </p>
            <button onClick={decrement}>
                -
            </button>
            <button onClick={reset}>
                Reset Count
            </button>

            <h2>Counter 50</h2>
            <p>
                The current count is: {count50}
            </p>
            <button onClick={increment50}>
                +
            </button>
            <button onClick={decrement50}>
                -
            </button>
            <button onClick={reset50}>
                Reset Count
            </button>
        </section>
    );
};

export default Counter;
