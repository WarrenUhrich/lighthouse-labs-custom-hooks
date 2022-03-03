import React from 'react';
import ReactDOM from 'react-dom';
import AnimeList from './components/AnimeList';
import BeersList from './components/BeersList';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BeersList />
    <AnimeList />
  </React.StrictMode>,
  document.getElementById('root')
);
