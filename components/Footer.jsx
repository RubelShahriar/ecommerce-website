import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>GadegetsPro @{new Date().getFullYear()}. All rights reserved</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
