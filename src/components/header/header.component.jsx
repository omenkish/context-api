import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectShowCart } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets//images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';

import './header.styles.scss';

const Header =  () => {
  const currentUser = useContext(CurrentUserContext);
  const { showCart } = useContext(CartContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link className="option" to='/signin'>SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {
        showCart && (<CartDropdown />)
      }
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  showCart: selectShowCart
});

export default connect(mapStateToProps)(Header);
