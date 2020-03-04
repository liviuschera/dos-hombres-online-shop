import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItemFromCart,
  removeItem
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
}
