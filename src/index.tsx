import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MainNavigator from './controller/MainNavigator';
import { Provider } from 'react-redux';


import store from './modal/redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainNavigator />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);