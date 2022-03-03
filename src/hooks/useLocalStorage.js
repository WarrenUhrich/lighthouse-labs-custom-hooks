import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initVal) {
    const [value, setValue] = useState(() => {
        const existingVal = localStorage.getItem(key);
        if(existingVal) return existingVal;
        else return initVal;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
}
