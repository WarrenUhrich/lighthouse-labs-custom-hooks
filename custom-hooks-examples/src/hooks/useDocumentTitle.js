import { useState, useEffect } from 'react';

const useDocumentTitle = (defaultTitle='My React App! ⚛') => {
    const [title, setTitle] = useState(String(defaultTitle));

    const handleOnChangeEvent = (event) => {
        const inputElement = event.target;
        const newText = inputElement.value;
        setTitle(newText);
    };

    useEffect(() => { // Function that will run if a value changes.
        document.title = title;
    }, [title]); // A list of values that might change.

    return [title, handleOnChangeEvent];
};

export default useDocumentTitle;
