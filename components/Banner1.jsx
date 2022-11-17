import React from "react";
import Image from "next/image";
// locals
import image1 from "../assets/b1.jpeg";
import image2 from "../assets/b2.jpeg";
import image3 from "../assets/b3.jpeg";

const Banner1 = () => {
  return (
    <div className="banner1">
      <Image src={image1} className="img-tag" alt="b" width="" height="" />
      <Image src={image2} className="img-tag" alt="b" width="" height="" />
      <Image src={image3} className="img-tag" alt="b" width="" height="" />
    </div>
  );
};

export default Banner1;
