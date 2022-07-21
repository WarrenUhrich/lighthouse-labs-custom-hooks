import {useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    // returns an array: [value, functionForUpdating()]

    useEffect(() => {
        console.log('Count is: ', count);
    }, [count]);

    return (
        <button onClick={event => {setCount(prev => prev + 1)}}>
            Current Count: {count}
        </button>
    );
};

export default Counter;