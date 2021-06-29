import React, { useState, useEffect, useContext, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";

import "./index.css";

import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";

import setTitle from "../../tools.js";

import { DeleteOutline, Search } from "@material-ui/icons";
import mastercardIcon from "../../assets/icons/payment-methods/mastercard.png";
import visaIcon from "../../assets/icons/payment-methods/visa.png";
import maestroIcon from "../../assets/icons/payment-methods/maestro.png";
import americanexpressIcon from "../../assets/icons/payment-methods/americanexpress.png";
import paypalIcon from "../../assets/icons/payment-methods/paypal.png";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const CheckoutPage = () => {
  useEffect(() => {
    setTitle("Checkout");
  }, []);

  const { total, cartItems, increase, decrease, removeProduct } =
    useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState();
  const [processing, setProcessing] = useState(false);
  const submitButtonRef = useRef();

  const handleClick = async (event) => {
    setProcessing(true);
    if (paymentMethod === "stripe") {
      const stripe = await stripePromise;
      const response = await fetch(
        "http://localhost:4242/create-checkout-session",
        {
          method: "POST",
        }
      );
      const session = await response.json();
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }
    } else {
      const response = await fetch("https://www.paypal.com/", {
        method: "POST",
      });
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">
        <div className="checkout-form">
          <h4>Shipping Details</h4>
          <form action="#" method={"POST"}>
            <div className="form-group">
              <label>*Email Address</label>
              <input type={"text"}></input>
            </div>
            <div className="form-group row">
              <div className="form-row">
                <label>*Name</label>
                <input type={"text"}></input>
              </div>
              <div className="form-row">
                <label>*Last Name</label>
                <input type={"text"}></input>
              </div>
            </div>

            <div className="form-group">
              <label>*Street and house number</label>
              <input type={"text"}></input>
            </div>
            <div className="form-group row">
              <div className="form-row">
                <label>*City</label>
                <select>
                  <option></option>
                  <option>Toronto</option>
                  <option>Montréal</option>
                  <option>Vancouver</option>
                </select>
              </div>
              <div className="form-row">
                <label>*County</label>
                <select>
                  <option></option>
                  <option>Canada</option>
                  <option>England</option>
                  <option>France</option>
                  <option>Norway</option>
                  <option>Turkey</option>
                  <option>U.S.A</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>*Zip/Postal Code</label>
              <input type={"text"}></input>
            </div>

            <h4>Payment</h4>
            <div className="form-group">
              <div className="payment-methods">
                <div className="payment-method">
                  <div className="payment-method-select">
                    <input
                      type="radio"
                      name="payment-method"
                      id="payment-method-cc"
                      onClick={() => setPaymentMethod("stripe")}
                    />
                    <label for="payment-method-cc">Credit/Debit Cards</label>
                  </div>
                  <div className="payment-method-logos">
                    <img src={visaIcon} />
                    <img src={mastercardIcon} />
                    <img src={maestroIcon} />
                    <img src={americanexpressIcon} />
                  </div>
                </div>
                <div className="payment-method">
                  <div className="payment-method-select">
                    <input
                      type="radio"
                      name="payment-method"
                      id="payment-method-paypal"
                      onClick={() => setPaymentMethod("paypal")}
                    />
                    <label for="payment-method-paypal">Paypal</label>
                  </div>
                  <div className="payment-method-logos">
                    <img src={paypalIcon} width={50} />
                  </div>
                </div>
              </div>
            </div>

            <h4>Billing Address</h4>
            <div className="dark-box">
              <div className="form-group row">
                <input
                  type="radio"
                  name="shipping-address"
                  id="shipping-address-1"
                  className="inherit"
                />
                <label for="shipping-address-1">
                  Same as shipping address.
                </label>
              </div>
              <div className="form-group row">
                <input
                  type="radio"
                  name="shipping-address"
                  id="shipping-address-2"
                  className="inherit"
                />
                <label for="shipping-address-2">
                  Different billing address.
                </label>
              </div>
            </div>

            <h4>Review and Place Order</h4>
            <div className="dark-box">
              <div className="form-group row">
                <input
                  type="radio"
                  name="review-approve"
                  id="review-approve"
                  className="inherit"
                />
                <label for="review-approve">
                  Please review the order details above, and when you're ready,
                  click Place Order.
                </label>
              </div>
              <div className="form-group row">
                <input
                  type="radio"
                  name="terms-approve"
                  id="terms-approve"
                  className="inherit"
                />
                <label for="terms-approve">
                  I agree to the Terms & Conditions,Privacy Policy and Return
                  Policy
                </label>
              </div>
            </div>

            <div className="form-group buttons">
              {processing ? (
                <button type={"button"}>...</button>
              ) : (
                <button
                  type={"button"}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Place Order
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="checkout-details">
          <div className="checkout-items">
            <h4>Your Cart</h4>
            {cartItems.map((ci) => (
              <div key={"checkout-item-" + ci.id} className="checkout-item">
                <div className="product">
                  <span>
                    {ci.quantity}x {ci.name}
                  </span>
                  <span>CAD {formatNumber(ci.price * ci.quantity)}</span>
                </div>
                <div className="action">
                  <div
                    className="product-action decrease-quantity"
                    onClick={() => {
                      decrease(ci);
                    }}
                  >
                    -
                  </div>
                  <div className="product-action quantity">{ci.quantity}</div>
                  <div
                    className="product-action increase-quantity"
                    onClick={() => {
                      increase(ci);
                    }}
                  >
                    +
                  </div>
                  <span
                    className="product-action remove"
                    onClick={() => {
                      removeProduct(ci);
                    }}
                  >
                    <DeleteOutline />
                  </span>
                </div>
              </div>
            ))}

            <div className="checkout-payment-info">
              <div className="item">
                <span>Subtotal</span>
                <span>CAD {formatNumber(total)}</span>
              </div>
              <div className="item">
                <span>Shipping</span>
                <span>CAD {formatNumber(total > 0 ? 100 : 0)}</span>
              </div>
              <div className="item">
                <span>Tax</span>
                <span>CAD {formatNumber(total > 0 ? 300 : 0)}</span>
              </div>
            </div>
            <div className="checkout-amount">
              <span>Total</span>
              <span>CAD {formatNumber(parseFloat(total) + 400)}</span>
            </div>
          </div>
          <div className="checkout-information">
            <p>
              All SALES are pre-sale only. All new purchases will be shipped out
              MID-AUGUST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
