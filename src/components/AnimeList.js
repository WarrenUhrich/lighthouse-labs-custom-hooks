import {useEffect, useState} from 'react';

export default function AnimeList() {
    const [data, setData] = useState(null),
          [isPending, setIsPending] = useState(true),
          [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
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
    }, []);

    return (
        <>
            {errorMessage}
            {isPending && 'Loading...'}
            {data && <ul>
                {data.map(anime => <li>{anime.title} ({anime.original_title})</li>)}
            </ul>}
        </>
    );
}