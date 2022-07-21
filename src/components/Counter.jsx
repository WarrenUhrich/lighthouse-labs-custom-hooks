import { useState } from 'react';
import useStateChangeLogger from '../hooks/useStateChangeLogger';

const Counter = () => {
    const [count, setCount] = useState(0);
    // returns an array: [value, functionForUpdating()]

    // Custom hook! It console.logs changes to a piece of state.
    useStateChangeLogger(count);

    return (
        <button onClick={() => {setCount(prev => prev + 1)}}>
            Current Count: {count}
        </button>
    );
};

export default Counter;