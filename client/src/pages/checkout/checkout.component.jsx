import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.syles.scss";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const total = useSelector((state) => selectCartTotal(state));
  const cartDescription = [];
  return (
    <main className="checkout-page">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {cartItems.map((cartItem) => {
        cartDescription.push(`${cartItem.quantity}x ${cartItem.name}`);
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *For testing purposes please use this credit card* <br /> 4242 4242 4242
        4242 - Exp: 11/23 - CVV: 123
      </div>
      <StripeCheckoutButton
        price={total}
        description={cartDescription.join(", ")}
      />
    </main>
  );
}
