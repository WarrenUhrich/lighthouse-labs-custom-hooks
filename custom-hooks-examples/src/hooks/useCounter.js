import { useState } from 'react';

const useCounter = (defaultCount=0, defaultIterator=1) => {
    const [count, setCount] = useState(Number(defaultCount));

    const addToCount = (numToAddBy=defaultIterator) => {
        setCount(prev => prev + Number(numToAddBy));
    };

    const resetCount = () => {
        setCount(0);
    };

    return {
        count,
        addToCount,
        resetCount
    };
};

export default useCounter;
