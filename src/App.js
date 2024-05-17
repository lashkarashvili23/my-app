import "./App.css";
import Header from "./components/Header.jsx";
import Checkout from "./Checkout.jsx";
import Cart from "./Cart.jsx";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PRODUCTS } from "./products.js";
import Purchase from "./Purchase.jsx";

const Homepage = function () {
  return (
    <div className="home-page">
      <h1 className="welc-text">
        Welcome to <span className="highlight">SmartSphere</span>
        <br />
        <br />
        Unlock the Future of Connectivity
        <br />
        <br />
        At SmartSphere, we're not just about selling smartphones; we're about
        shaping the way you experience technology. Step into a world where
        innovation meets convenience, where cutting-edge devices empower you to
        connect, create, and conquer like never before.
      </h1>
      <Link to="/products">
        <button className="shop-btn">Shop</button>
      </Link>
    </div>
  );
};

const Cards = function ({ addToCart }) {
  return (
    <div className="card-container">
      {PRODUCTS.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.productImage} alt={product.productName} />
          <h4 className="title">{product.productName}</h4>
          <p className="price">Price: ${product.price}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const Products = function ({ addToCart }) {
  return (
    <div className="card-section">
      <Cards addToCart={addToCart} />
    </div>
  );
};

const AboutUs = function () {
  return (
    <div className="about-us">
      <h1 className="about-us-txt">
        Welcome to <span className="highlight">SmartSphere</span>, where
        innovation meets convenience. We're more than just a marketplace for
        smartphones; we're your gateway to a world of seamless connectivity,
        cutting-edge technology, and unparalleled customer service. <br />
        <br /> At SmartSphere, we understand the pivotal role smartphones play
        in your life. Whether it's staying connected with loved ones, capturing
        unforgettable moments, or managing your busy schedule, your smartphone
        is your constant companion. That's why we're dedicated to providing you
        with a curated selection of the latest smartphones from the most
        reputable brands, ensuring that you stay ahead of the curve.
        <br />
        <br /> But we're not just here to sell you a device; we're here to
        enhance your mobile experience. Our team of tech enthusiasts is
        passionate about all things smartphones, and we're committed to helping
        you find the perfect device that suits your lifestyle and needs. Whether
        you're a photography enthusiast looking for the ultimate camera phone, a
        gaming aficionado craving unrivaled performance, or a professional
        seeking seamless productivity on the go, we've got you covered.
        <br />
        <br /> What sets us apart is our unwavering commitment to customer
        satisfaction. From our user-friendly interface to our secure payment
        gateways, we've streamlined every aspect of your shopping experience to
        ensure convenience and peace of mind. Need assistance? Our dedicated
        customer support team is here to address any questions or concerns you
        may have, because your satisfaction is our top priority.
        <br />
        <br /> But our journey doesn't end at checkout. We're here to support
        you every step of the way, offering expert advice, helpful tips, and
        timely updates to enhance your smartphone experience. With us, you're
        not just a customer; you're part of a vibrant community of tech
        enthusiasts who share a passion for innovation and connectivity.
        <br />
        <br /> Thank you for choosing SmartSphere as your trusted partner in the
        world of smartphones. Together, let's unlock the endless possibilities
        that technology has to offer.
        <br />
        <br /> Welcome to the future. Welcome to{" "}
        <span className="highlight">SmartSphere</span>.
      </h1>
    </div>
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <Header addToCart={addToCart} cartItems={cartItems} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/products"
          element={<Products addToCart={addToCart} />}
        />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route
          exact
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
