import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/shop.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

function Header() {
  const user = useSelector(state => ({
    currentUser: state.user.currentUser
  }));
  const cart = useSelector(state => ({
    hidden: state.cart.hidden
  }));

  console.log(cart.hidden);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {user.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cart.hidden ? null : <CartDropdown />}
    </div>
  );
}

export default Header;
