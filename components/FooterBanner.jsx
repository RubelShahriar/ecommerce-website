import React from "react";

const FooterBanner = () => {
  return (
    <div className="footerbanner">
      <div className="main-container">
        <div className="footerbanner-wrapper">
          <div className="footerbanner-item">
            <h4 className="footerbanner-heading">Customer Service</h4>
            <ul>
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Contact Us</li>
              <li>Account Overview</li>
              <li>Store Locator</li>
              <li>Privacy and Security</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="footerbanner-item">
            <h4 className="footerbanner-heading">Company Information</h4>
            <ul>
              <li>About GadgetsPro</li>
              <li>Supplier Diversity</li>
              <li>Financial Information</li>
              <li>Accessibility Commitment</li>
              <li>Affliate Program</li>
            </ul>
          </div>
          <div className="footerbanner-item">
            <h4 className="footerbanner-heading">GadegtsPro for Buissness</h4>
            <ul>
              <li>For Business</li>
              <li>Breakdown Solutions</li>
              <li>Facility Solutions</li>
              <li>Furniture Solutions</li>
              <li>Office Product & Services</li>
              <li>Store Locator</li>
              <h4
                className="footerbanner-heading"
                style={{ marginTop: "30px" }}
              >
                GadgetsPro Sites & Services
              </h4>
              <ul>
                <li>Print & Marketing</li>
                <li>Promotional Products</li>
                <li>Quill.com</li>
              </ul>
            </ul>
          </div>
          <div className="footerbanner-item">
            <h4 className="footerbanner-heading">GadgetsPro Programs</h4>
            <ul>
              <li>GadgetsPro Reward Overview</li>
              <li>GadgetsPro Plus</li>
              <li>GadgetsPro Premium</li>
              <h4
                className="footerbanner-heading"
                style={{ marginTop: "30px" }}
              >
                Careers
              </h4>
              <ul>
                <li>Corporate/Warhouse</li>
                <li>Corporate/Print</li>
                <li>Facility</li>
                <li>Retail Store</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
