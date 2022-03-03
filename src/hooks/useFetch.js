import {useEffect, useState} from 'react';

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
