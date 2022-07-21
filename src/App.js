import Counter from './components/Counter';
import RandomPhotograph from './components/RandomPhotograph';
import Book from './components/Book';
import Beers from './components/Beers';

function App() {
  return (
    <div className="App">
      <Beers />
      <Counter />
      <RandomPhotograph />
      <Book />
    </div>
  );
}

export default App;
