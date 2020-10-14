import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types";
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
};
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
};
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {    
    stripePromise = loadStripe("pk_test_9IHWtOi7gmoS0mRvCvmPugNl");
  }
  return stripePromise;
};
const Checkout = ({ detailInfo }) => {
const distance = detailInfo != null ? (detailInfo["distance"]["value"] * 0.00062137).toFixed(2): 0;

  const [loading, setLoading] = useState(false);
  const redirectToCheckout = async (event) => {
	event.preventDefault();
	//document.getElementById("bookingForm").submit();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        {
          price: "price_1HPCeyABac0IArXe9wXrqE3T",
          quantity: Math.round(distance),
        },
      ],
      successUrl: `${window.location.origin}/confirm`,
      cancelUrl: `${window.location.origin}/makebooking`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };
  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      PAY YOUR BOOKING
    </button>
  );
};

Checkout.propTypes = {
  detailInfo: PropTypes.object,
};
export default Checkout;
