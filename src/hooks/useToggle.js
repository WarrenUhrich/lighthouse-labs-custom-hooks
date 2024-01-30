import { useState } from 'react';

// Custom hooks should have "use" as a prefix.
const useToggle = (defaultValue=false) => { // Custom hooks are functions.
    // Enforce boolean.
    defaultValue = !!defaultValue; // Bool ver. of anything passed in.
    
    // Custom hooks must call on at least one React hook.
    const [isToggled, setIsToggled] = useState(defaultValue);

    const toggleIsToggled = () => {
        setIsToggled(prev => !prev);
    }

    return [isToggled, toggleIsToggled];
};

export default useToggle;