import React from "react";
import "./Footer_Img.css";
import Rectangle_11 from "../../assets/Rectangle_11.png";

function Footer_Img() {
  return (
    <div className="fotter_img">
      <img src={Rectangle_11} alt="Rectangle_11" />
      <div className="footer_heading">
        <h2>About Us</h2>
      </div>
    </div>
  );
}

export default Footer_Img;
