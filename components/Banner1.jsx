import React from "react";
import Image from "next/image";
// locals
import { watch, headphone, speaker } from "../assets";

const Banner1 = () => {
  return (
    <div className="banner1">
      <Image src={watch} className="img-tag" alt="b" width="" height="" />
      <Image src={speaker} className="img-tag" alt="b" width="" height="" />
      <Image src={headphone} className="img-tag" alt="b" width="" height="" />
    </div>
  );
};

export default Banner1;
