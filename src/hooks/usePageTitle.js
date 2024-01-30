import { useState, useEffect } from 'react';

const usePageTitle = (defaultTitle='React App') => {
    const [title, setTitle] = useState(defaultTitle);

    const handleChange = (event) => {
        const targetElement = event.target;
        const currentElementValue = targetElement.value;
        setTitle(currentElementValue);
    };

    useEffect(() => {
        document.title = title;
    }, [title]);

    return { setTitle, title, handleChange };
};

export default usePageTitle;
