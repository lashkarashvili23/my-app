import React from "react";
import { NavLink } from "react-router-dom";

import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemove = (index) => {
    removeFromCart(index);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div className="cart-list-item" key={index}>
          <img
            className="cart-img"
            src={item.productImage}
            alt={item.productName}
          />
          <div className="description-div">
            <h4>{item.productName}</h4>
            <p>Price: ${item.price}</p>
            <button
              className="remove-from-cart-tbn"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {cartItems.length > 0 && ( // Use && to conditionally render
        <NavLink to="/checkout" className="link-style">
          <button className="checkout-btn">Proceed to Checkout</button>
        </NavLink>
      )}
    </div>
  );
};

export default Cart;
