import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import Logo from "../../assets/logo.svg";

export default function StripeCheckoutButton({ price, description }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Lre1Kc3wuH7P6vSq4j5rS1cx00foucyDBj";
  console.log(description);
  console.log("sfdddddddddddddddddddddddddddddddddddddddddddddddddddddd");

  function onToken(token) {
    axios({
      url: "payment",
      method: "post",
      data: {
        description,
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Successful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error.response);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Dos Hombres Online Shop"
      billingAddress
      shippingAddress
      // image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
