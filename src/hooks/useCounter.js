import { useState } from 'react';

const useCounter = () => {
    // Keep track of count.
    const [count, setCount] = useState(0);

    // Add to count.
    const addCount = (addBy=1) => {
        addBy = Number(addBy);
        setCount(prev => prev + addBy);
    };

    // Subtract from count.
    const subtractCount = (subtractBy=1) => {
        subtractBy = Number(subtractBy);
        setCount(prev => prev - subtractBy);
    };

    // Reset count.
    const resetCount = () => {
        setCount(0);
    };

    return [count, addCount, subtractCount, resetCount];
};

export default useCounter;