import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import CharactersList from './components/CharactersList';
import configureStore from './redux/configureStore';

const rickAndMortyStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rickAndMortyStore}>
      <CharactersList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

