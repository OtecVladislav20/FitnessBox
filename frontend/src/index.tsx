import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
