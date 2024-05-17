import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";

const Checkout = function () {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      alert(
        "Thank you for your purchase. (This is a demo site, so no actual submission will occur.)"
      );
    } else {
      formRef.current.reportValidity();
    }
  };

  return (
    <div className="checkout-container">
      <div className="wrapper">
        <div className="container">
          <form ref={formRef}>
            <h1>
              <FontAwesomeIcon className="fa-icons" icon={faTruck} />
              Shipping Details
            </h1>
            <div className="name">
              <div>
                <label htmlFor="f-name">First</label>
                <input
                  type="text"
                  name="f-name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="l-name">Last</label>
                <input
                  type="text"
                  name="l-name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="street">
              <label htmlFor="address">Street</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your street address"
                required
              />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter your ZIP code"
                  required
                />
              </div>
            </div>
            <h1>
              <FontAwesomeIcon className="fa-icons" icon={faCreditCard} />
              Payment Information
            </h1>
            <div className="cc-num">
              <label htmlFor="card-num">Credit Card No.</label>
              <input
                type="text"
                name="card-num"
                placeholder="Enter your credit card number"
                required
              />
            </div>
            <div className="cc-info">
              <div>
                <label htmlFor="expire">Exp</label>
                <input
                  type="text"
                  name="expire"
                  placeholder="Enter expiration date (MM/YYYY)"
                  required
                />
              </div>
              <div>
                <label htmlFor="security">CCV</label>
                <input
                  type="text"
                  name="security"
                  placeholder="Enter CCV code"
                  required
                />
              </div>
            </div>
            <div className="btns">
              <NavLink to="#" className="purchase-btn" onClick={handleSubmit}>
                Purchase
              </NavLink>
              <NavLink to="/cart" className="back-to-cart-btn">
                Back to Cart
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
