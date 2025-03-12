import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/index.css';
import { Provider } from 'react-redux';

import { YMaps } from '@pbe/react-yandex-maps';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <YMaps query={{apikey: '65d0ebaf-f042-415a-9b10-cdf7666352f0'}}>
      <App/>
    </YMaps>
    {/* </Provider> */}
  </React.StrictMode>
);
