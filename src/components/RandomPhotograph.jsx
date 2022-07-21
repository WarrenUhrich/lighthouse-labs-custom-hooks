import useFetch from '../hooks/useFetch';
import useStateChangeLogger from '../hooks/useStateChangeLogger';

const RandomPhotograph = () => {
    const [img] = useFetch('https://picsum.photos/200', 'url');
    // returns an array: [value, functionForUpdating()]

    // Custom hook! It console.logs changes to a piece of state.
    useStateChangeLogger(img);

    return <img src={img} />;
};

export default RandomPhotograph;
