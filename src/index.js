import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import './index.css';
import App from './App';

import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/cart.provider';


render(
  <CartProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </CartProvider>,
  document.getElementById('root')
);
