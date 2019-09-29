import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App';

import CartProvider from './providers/cart/cart.provider';


render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
