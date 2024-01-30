import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = (props) => {
    const [count, addCount, subtractCount, resetCount] = useCounter();

    return (
        <section>
            <h2>{props.heading ? props.heading : 'Counter'}</h2>
            
            <p>
                <strong>Current Count:</strong>
                &nbsp;
                {count}
            </p>

            <button onClick={() => addCount()}>Add 1</button>
            <button onClick={() => addCount(2)}>Add 2</button>
            <button onClick={() => addCount(5)}>Add 5</button>
            <button onClick={() => addCount(10)}>Add 10</button>

            <br />

            <button onClick={() => subtractCount()}>Subtract 1</button>
            <button onClick={() => subtractCount(2)}>Subtract 2</button>
            <button onClick={() => subtractCount(5)}>Subtract 5</button>
            <button onClick={() => subtractCount(10)}>Subtract 10</button>

            <br />

            <button onClick={resetCount}>Reset</button>

        </section>
    );
};

export default Counter;