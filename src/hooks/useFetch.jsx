import { useState, useEffect } from 'react';

const useFetch = (url, format) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (format == 'url') {
                    setState(response.url);
                } else if (format == 'json') {
                    return response.json();
                }
            })
            .then((data) => {
                if (data) {
                    setState(data);
                }
            })
            .catch();
    }, [url]);

    return [state, setState];
};

export default useFetch;
