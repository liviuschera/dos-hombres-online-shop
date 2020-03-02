import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cart/cart.actions";
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
      <div className="quantity">{quantity}</div>
      <div className="price">{price}</div>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
}
