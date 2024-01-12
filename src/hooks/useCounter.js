import { useState } from 'react';

const useCounter = (amountToChangeBy=1) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + amountToChangeBy);
    
    const decrement = () => setCount(prev => prev - amountToChangeBy);

    const reset = () => setCount(0);

    // return [count, increment, reset, decrement];
    return {count, increment, reset, decrement};
};

export default useCounter;
