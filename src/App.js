import './App.css';
import ToggleWeather from './components/ToggleWeather';
import TogglePageColours from './components/TogglePageColours';
import InputField from './components/InputField';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Counter heading="Counter #1!!!" />
      <Counter heading="Counter #2!!!" />
      <InputField />
      <TogglePageColours />
      <ToggleWeather />
      <p>Hello, World!</p>
    </>
    
  );
}

export default App;
