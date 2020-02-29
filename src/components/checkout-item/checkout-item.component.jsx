import React from "react";

import "./checkout-item.styles.scss";

export default function CheckoutItem() {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src="" alt="item" />
      </div>
      <div className="name"></div>
      <div className="quantity"></div>
      <div className="price"></div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
}
