import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './components/Counter';
import InputField from './components/InputField';
import Toggle from './components/Toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>React is running!</p>
    <Counter />
    <InputField />
    <Toggle />
    <Toggle />
  </React.StrictMode>
);
