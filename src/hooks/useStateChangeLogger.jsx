import { useEffect } from 'react';

const useStateChangeLogger = (value) => {
    useEffect(() => {
        console.log('A value changed:', value);
    }, [value]);
};

export default useStateChangeLogger;