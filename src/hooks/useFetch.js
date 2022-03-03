import {useEffect, useState} from 'react';

/**
 * Uses JS' fetch function, and returns an array of response data, the fetching status, and the error (if applicable.)
 * @param {string} url 
 * @returns {array}
 */
export default function useFetch(url) {
    const [data, setData] = useState(null),
          [isPending, setIsPending] = useState(true),
          [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(result => {
                if(!result.ok) throw Error('Unable to fetch result.');
                else return result.json();
            })
            .then(responseData => {
                setData(responseData);
                setIsPending(false);
            })
            .catch(error => {
                setErrorMessage(error.message);
                setIsPending(false);
            });
    }, [url]);

    return [data, isPending, errorMessage];
}
