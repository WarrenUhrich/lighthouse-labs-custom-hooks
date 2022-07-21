import useFetch from "../hooks/useFetch";
import useStateChangeLogger from "../hooks/useStateChangeLogger";

const Book = () => {
    const [book] = useFetch('https://openlibrary.org/api/books?format=json&bibkeys=ISBN:0451526538&jscmd=data', 'json');
    
    useStateChangeLogger(book);

    const formatBooks = () => {
        const booksOutput = [];
        for (const b in book) {
            booksOutput.push(book[b]);
        }
        return booksOutput.map((b, i) => <li>
            <h2>{b.title}</h2>
            <img src={b.cover.medium} alt={b.title} />
        </li>);
    };

    return <ul>{formatBooks()}</ul>;
};

export default Book;