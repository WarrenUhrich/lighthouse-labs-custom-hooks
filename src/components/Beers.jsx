import useFetch from '../hooks/useFetch';
import useStateChangeLogger from '../hooks/useStateChangeLogger';

const Beers = () => {
    const [beers] = useFetch('https://api.punkapi.com/v2/beers?per_page=15', 'json');
    useStateChangeLogger(beers);

    return (
        <ul>
            {beers.map((beer) =>
                <li key={beer.id}>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                </li>
            )}
        </ul>
    );
};

export default Beers;
