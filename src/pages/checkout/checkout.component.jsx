import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const headerElements = [
    'Product', 'Description', 'Quantity', 'Price', 'Remove'
  ];
  const { cartItems, cartTotal: total } = useContext(CartContext);
  return (
    <div className='checkout-page' >
      <div className='checkout-header'>
        {
          headerElements.map((elem, idx) => (
            <div key={idx} className='header-block'>
              <span>{elem}</span>
            </div>
          ))
        }
      </div>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))}
      
      <div className='total'>TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br/>
        4242 4242 4242 4242 -Exp: 01/20 -CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

export default CheckoutPage;
