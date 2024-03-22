import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TogglePageColours from './components/TogglePageColours';
import TitleInput from './components/TitleInput';
import Counter from './components/Counter';
import CounterButton from './components/CounterButton';
import ManyCounters from './components/ManyCounters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ManyCounters />
    <CounterButton />
    <CounterButton initNum={500} iterator={100} />
    <CounterButton initNum={25} iterator={25} />
    <CounterButton initNum={0} iterator={-33} />
    <Counter heading="Our Counter!" />
    <TitleInput />
    <TogglePageColours />
  </>
);
