import './App.css';
import ToggleWeather from './components/ToggleWeather';
import TogglePageColours from './components/TogglePageColours';
import InputField from './components/InputField';

function App() {
  return (
    <>
      <InputField />
      <TogglePageColours />
      <ToggleWeather />
      <p>Hello, World!</p>
    </>
    
  );
}

export default App;
