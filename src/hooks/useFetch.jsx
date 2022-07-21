import { useState, useEffect } from 'react';

const useFetch = (url, format) => {
    const [state, setState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (format == 'url') {
                    setIsLoading(false);
                    setState(response.url);
                } else if (format == 'json') {
                    return response.json();
                }
            })
            .then((data) => {
                if (data) {
                    setIsLoading(false);
                    setState(data);
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, [url]);

    return [state, setState, isLoading, errorMessage];
};

export default useFetch;
