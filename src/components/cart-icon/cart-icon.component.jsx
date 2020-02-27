import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";

export default function CartIcon() {
  // const memo = useMemo();
  // const cb = useCallback()
  const itemCount = useSelector(state => selectCartItemsCount(state));
  // const { itemCount } = useSelector(
  //   ({ cart: { cartItems } }) => selectCartItemsCount(cartItems),
  //   shallowEqual
  // );

  // const { itemCount } = useSelector(state => {
  //   console.log("I'm being called!");

  //   return {
  //     itemCount: state.cart.cartItems.reduce(
  //       (accumulatedQuantity, cartItem) =>
  //         accumulatedQuantity + cartItem.quantity,
  //       0
  //     )
  //   };
  // });

  // const { itemCount } = useSelector(({ cart: { cartItems } }) => {
  //   console.log("I am being called!");

  //   return {
  //     itemCount: cartItems.reduce(
  //       (accumulatedQuantity, cartItem) =>
  //         accumulatedQuantity + cartItem.quantity,
  //       0
  //     )
  //   };
  // });
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
