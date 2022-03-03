import useFetch from '../hooks/useFetch';
import useLogChanges from '../hooks/useLogChanges';

export default function BeersList() {
    const [beers, status, error] = useFetch('https://api.punkapi.com/v2/beers?page=1&per_page=16');
    useLogChanges(beers);

    return (
        <>
            <h2>Beers List</h2>
            <ul>
                {error && <li>{error}</li>}
                {status && <li>{status}</li>}
                {beers && beers.map(beer => <li key={beer.id}><h3>{beer.name}</h3><p>{beer.description}</p></li>)}
            </ul>
        </>
    );
}