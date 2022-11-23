import React from "react";
import Link from "next/link";
import Image from "next/image";
// local
import { urlFor } from "../lib/client";
import bannerImage from "../assets/macbook pro m1 max.webp";

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
        <Image
          src={bannerImage}
          alt="headphones"
          width={700}
          height={400}
          className="hero-banner-image"
        />
        <div className="btn-contianer-banner">
          {/* <Link href={`/product/${product}`}> */}
          <button
            type="button"
            style={{ cursor: "default", backgroundColor: "gray" }}
          >
            {/* {buttonText} */} Hurry up!😍
          </button>
          {/* </Link> */}
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
