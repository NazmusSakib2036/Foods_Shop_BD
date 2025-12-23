import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/header.css";
import logoImage from "../images/foodsshopbd.png";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show header when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`header ${visible ? "header-visible" : "header-hidden"}`}
    >
      {/* Top Banner */}
      <div className="top-banner">
        <p className="banner-text">
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুনঃ
          <span className="phone-icon">📞</span>
          <strong>+8801321208940</strong> |
          <span className="phone-icon">📞</span>
          হট লাইনঃ <strong>09642-922922</strong>
        </p>
      </div>

      {/* Middle Section with Logo */}
      <div className="header-middle">
        <div className="header-container">
          {/* Search Icon */}
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>

          {/* Logo */}
          <div className="logo-container">
            <Link to="/">
              <img
                src={logoImage}
                alt="Foods Shop BD"
                className="header_logo"
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="header-icons">
            {/* User Icon */}
            <div className="icon user-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="icon cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {getCartCount() > 0 && (
                <span className="cart-count">{getCartCount()}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navigation">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#offer-zone">OFFER ZONE</a>
          </li>
          <li className="nav-item">
            <a href="#best-seller">Best Seller</a>
          </li>
          <li className="nav-item">
            <a href="#cat-food">Cat Food</a>
          </li>
          <li className="nav-item">
            <a href="#dog-food">Dog Food</a>
          </li>
          <li className="nav-item">
            <a href="#fish-food">Fish Food</a>
          </li>
          <li className="nav-item">
            <a href="#bird-food">Bird Food</a>
          </li>
          <li className="nav-item">
            <a href="#pet-food">Pet Food</a>
          </li>
          <li className="nav-item">
            <a href="#pet-dress">Pet Dress</a>
          </li>
          <li className="nav-item">
            <a href="#tea-nasta">Accessories</a>
          </li>
          <li className="nav-item">
            <a href="#snacks">Toys</a>
          </li>
          <li className="nav-item">
            <a href="#organic-oil">Supplements</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
