import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import logo from "../img/logo.png";
import { PRODUCTS } from "../products"; // Import your products data
import "./Header.css";

function Header({ cartItems, addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (event) => {
    if (
      (event.key === "Enter" || event.type === "click") &&
      searchQuery.trim() !== ""
    ) {
      const query = searchQuery.toLowerCase();
      setSearchQuery(""); // Clear the input field
      // Filter products based on search query
      const results = PRODUCTS.filter((product) => {
        const productName = product.productName
          ? product.productName.toLowerCase()
          : "";
        return productName.includes(query);
      });
      setSearchResults(results);
      setShowPopup(true); // Show the popup when Enter is pressed
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleSearchInputClick = () => {
    // Do nothing or perform any action you desire when input is clicked
  };

  const handleOutsideClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div id="nav-container">
        <div id="logo-img">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/products">PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </li>
          </ul>
        </nav>
        <div id="user-space">
          <div id="search">
            <input
              className="input-txt"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onClick={handleSearchInputClick}
              onKeyPress={handleSearch} // Listen for Enter key press
            />
            {/* Search icon */}
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              onClick={handleSearch} // Listen for search icon click
            />
            {/* Popup window */}
            {showPopup && (
              <div className="popup-container" onClick={handleOutsideClick}>
                <div className="popup" onClick={handlePopupClick}>
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <div className="product-card" key={product.id}>
                        <img
                          src={product.productImage}
                          alt={product.productName}
                        />
                        <div className="product-details">
                          <h4>{product.productName}</h4>
                          <p>Price: ${product.price}</p>
                          <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-results-message">
                      Does not match any results!
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div id="cart-items">
            <NavLink to="/cart" className="link-style">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
            {cartItems.length > 0 && (
              <span className="cart-item-number">{cartItems.length}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
