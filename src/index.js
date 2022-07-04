import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {rootReducer} from './redux/rootReducer';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
