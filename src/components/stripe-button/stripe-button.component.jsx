import React from "react";

import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/logo.svg";

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Lre1Kc3wuH7P6vSq4j5rS1cx00foucyDBj";

  function onToken(token) {
    console.log(token);
    alert("Payment Succesfull");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce Shop"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
