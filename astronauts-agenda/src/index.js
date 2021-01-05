import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AstronautsList from './components/AstronautsList';
import configureStore from './redux/configureStore';

const agendaStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={agendaStore}>
      <AstronautsList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

