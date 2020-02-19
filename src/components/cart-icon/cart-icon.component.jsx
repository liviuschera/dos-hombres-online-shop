import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";

export default function CartIcon() {
  // const { itemCount } = useSelector(state => ({
  //   itemCount: state.cart.cartItems.reduce(
  //     (accumulatedQuantity, cartItem) =>
  //       accumulatedQuantity + cartItem.quantity,
  //     0
  //   )
  // }));

  const { itemCount } = useSelector(({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  }));
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
