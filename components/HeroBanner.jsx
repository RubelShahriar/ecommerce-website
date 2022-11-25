import React from "react";
import Image from "next/image";
// local
import { macbookpro14inch } from "../assets";

const HeroBanner = ({ heroBanner }) => {
  const { smallText, midText, largeText1, largeText2, desc } = heroBanner;
  return (
    <div className="hero-banner-container">
      <div>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        {largeText2}
        <Image
          src={macbookpro14inch}
          alt="headphones"
          width=""
          height=""
          className="hero-banner-image"
        />
        <div className="btn-contianer-banner">
          <button
            type="button"
            style={{
              cursor: "default",
              backgroundColor: "var(--bg-btn)",
            }}
          >
            Hurry up! 😍
          </button>
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
