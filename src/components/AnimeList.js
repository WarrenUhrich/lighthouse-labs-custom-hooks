import useFetch from '../hooks/useFetch';

export default function AnimeList() {
    const [animes, status, error] = useFetch(
        'https://ghibliapi.herokuapp.com/films'
    );

    return (
        <>
            {error}
            {status && 'Loading...'}
            {animes && <ul>
                {animes.map(anime => <li key={anime.id}>{anime.title} ({anime.original_title})</li>)}
            </ul>}
        </>
    );
}