import { useState } from 'react';

/**
 * A custom hook is a function!
 * 
 * Can use React hooks inside - this is its power!
 */
const useToggle = (defaultValue=false) => {
    const [toggle, setToggle] = useState(!!defaultValue);

    const toggleState = () => {
        setToggle(prev => !prev);
    };

    return [toggle, toggleState];
};

export default useToggle;
