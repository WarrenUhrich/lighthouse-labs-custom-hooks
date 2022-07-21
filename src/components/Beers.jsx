import useFetch from '../hooks/useFetch';
import useStateChangeLogger from '../hooks/useStateChangeLogger';
import useLocalStorage from '../hooks/useLocalStorage';

const Beers = () => {
    const [page, setPage] = useLocalStorage('page', 1);

    const [beers, setBeers, loading, error] = useFetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=15`, 'json');
    useStateChangeLogger(beers);

    return (
        <>
            <h2>List of Beers (Page {page})</h2>
            {error && <p style={{color: 'red'}}>An error occurred: {error}</p>}
            {loading 
                ? <p>Loading...</p>
                : <>
                    <p>
                        Navigation:
                        {page > 1 && <button onClick={() => {setPage(prev => prev - 1)}}>Previous Page</button>}
                        {page < 22 && <button onClick={() => {setPage(prev => Number(prev) + 1)}}>Next Page</button>}
                    </p>
                    <ul>
                        {beers && beers.map((beer) =>
                            <li key={beer.id}>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                            </li>
                        )}
                    </ul>
                </>
            }
        </>
    );
};

export default Beers;
