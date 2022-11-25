import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import logo from "../public/favicon.png";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const scrollToComponent = (value) => {
    window.scroll({
      top: value,
      behavior: "smooth",
    });
  };

  const active = (e) => {
    let node = e.target.parentElement.childNodes;
    for (let i = 0; i < node.length; i++) {
      node[i].className = "navbar-menu-item";
    }
    e.target.className += " active";
  };

  return (
    <div className="navigationbar">
      <div className="main-container">
        <div className="navbar-container">
          <div className="logo">
            <Link
              href="/"
              style={{
                color: "var(--bg-dark)",
                fontWeight: 600,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={{ marginRight: "6px" }}
                  src={logo}
                  width={40}
                  height={35}
                  alt="logo"
                />
                Gadgets{" "}
                <span style={{ color: "var(--secondary-color)" }}>Pro</span>
              </div>
            </Link>
          </div>
          <div
            className="navbar-right-flex"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p
              className="navbar-menu-item active"
              onClick={(e) => {
                scrollToComponent(0), active(e);
              }}
            >
              Home
            </p>
            <p
              className="navbar-menu-item"
              onClick={(e) => {
                scrollToComponent(1150), active(e);
              }}
            >
              New
            </p>
            <p
              className="navbar-menu-item"
              onClick={(e) => {
                scrollToComponent(2950), active(e);
              }}
            >
              Best Selling
            </p>
            <button
              type="button"
              className="navbar-menu-item"
              onClick={() => setShowCart(true)}
            >
              <span className="navbar-cart-text">Cart </span>
              <AiOutlineShopping
                style={{
                  fontSize: "25px",
                  marginTop: "-10px",
                  marginBottom: "-4px",
                }}
              />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
