import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { toggleShowCart, cartItemsCount: itemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleShowCart} />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
}

export default CartIcon;