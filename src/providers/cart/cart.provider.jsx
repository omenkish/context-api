import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from './cart.utils';

export const CartContext = createContext({
  showCart: false,
  toggleShowCart: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
}); 

const CartProvider = ({ children }) => {
  const [ showCart, setShowCart ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartItemsCount, setCartItemsCount ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const toggleShowCart = () => setShowCart(!showCart);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems])

  return <CartContext.Provider 
    value={{
      addItem,
      cartItems,
      cartItemsCount,
      cartTotal,
      clearItemFromCart,
      removeItem,
      showCart,
      toggleShowCart,
    }}
  >
    {children}
  </CartContext.Provider>
};

export default CartProvider;