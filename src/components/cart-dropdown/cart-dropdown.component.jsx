import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { useSelector } from "react-redux";

export default function CartDropdown() {
  // const cartItems = useSelector(state => ({
  //   cartItems: state
  // }));
  const { cartItems } = useSelector(state => ({
    cartItems: state.cart.cartItems
  }));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
