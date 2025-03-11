import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, } from 'react-router-dom';
import App from './app';
import './assets/css/index.css';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <App/>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
