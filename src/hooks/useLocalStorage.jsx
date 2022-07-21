import { useState, useEffect } from 'react';

const useLocalStorage = (keyName, initialValue) => {
    const [state, setState] = useState(() => {
        if (localStorage.getItem(keyName)) {
            return localStorage.getItem(keyName);
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(keyName, state);
    }, [state]);

    return [state, setState];
};

export default useLocalStorage;
