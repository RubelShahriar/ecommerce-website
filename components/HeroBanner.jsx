import React from "react";
import Link from "next/link";
// local
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  const {
    smallText,
    midText,
    largeText1,
    largeText2,
    image,
    product,
    buttonText,
    desc,
  } = heroBanner;
  return (
    <div className="hero-banner-container">
      <div>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        {largeText2}
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />
        <div className="btn-contianer-banner">
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
