import Image from "next/image";
import React from "react";
import { apple, samsung, asus, oneplus, xiaomi, sony } from "../assets";
const Brands = () => {
  return (
    <div className="brands">
      <h3 className="categories-heading">Shop by Brands</h3>
      <div className="brands-container">
        <Image src={apple} alt="" width="" height="" />
        <Image src={samsung} alt="" width="" height="" />
        <Image src={asus} alt="" width="" height="" />
        <Image src={oneplus} alt="" width="" height="" />
        <Image src={xiaomi} alt="" width="" height="" />
        <Image src={sony} alt="" width="" height="" />
      </div>
    </div>
  );
};

export default Brands;
