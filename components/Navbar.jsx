import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import logo from "../public/favicon.png";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
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
                />
                Gadgets <span style={{ color: "var(--main-color)" }}>Pro</span>
              </div>
            </Link>
          </div>
          <div
            className="navbar-right-flex"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p className="cart-icon">New</p>
            <p className="cart-icon">Best Selling</p>
            <button
              type="button"
              className="cart-icon"
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
