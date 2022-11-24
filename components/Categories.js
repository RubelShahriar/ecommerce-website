import Image from "next/image";
import React from "react";
import {
  cateWatch,
  cateDocs,
  cateIphone,
  cateKeyboard,
  cateMacbook,
  cateSpeaker,
  cateTablet,
  cateAirposd,
  cateAdapter,
  cateCable,
  cateDrone,
  cateWirelessHeadphone,
} from "../assets";

const Categories = () => {
  return (
    <div className="categories">
      <h2 className="categories-heading">Featured Categories</h2>
      <div className="categories-container">
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateIphone} alt="watch" />
          </div>
          <p className="categories-name">Phone</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateWatch} alt="watch" />
          </div>
          <p className="categories-name">Smart Watch</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateMacbook} alt="watch" />
          </div>
          <p className="categories-name">Laptop</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateAirposd} alt="watch" />
          </div>
          <p className="categories-name">Airpods</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateTablet} alt="watch" />
          </div>
          <p className="categories-name">Tablet</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateDocs} alt="watch" />
          </div>
          <p className="categories-name">Hubs & docs</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image
              className="categories-image"
              src={cateKeyboard}
              alt="watch"
            />
          </div>
          <p className="categories-name">Keyboard</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateSpeaker} alt="watch" />
          </div>
          <p className="categories-name">Speaker</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateAdapter} alt="watch" />
          </div>
          <p className="categories-name">Adapter</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image
              className="categories-image"
              src={cateWirelessHeadphone}
              alt="watch"
            />
          </div>
          <p className="categories-name">Earphone</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateCable} alt="watch" />
          </div>
          <p className="categories-name">Cables</p>
        </div>
        <div className="categories-item">
          <div className="categories-image-div">
            <Image className="categories-image" src={cateDrone} alt="watch" />
          </div>
          <p className="categories-name">Drone</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
