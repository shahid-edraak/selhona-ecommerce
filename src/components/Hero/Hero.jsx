import React from "react";
import "./Hero.css";
import Vector from "../../assets/Vector.png";
import Rectangle_1 from "../../assets/Rectangle_1.png";
function Hero() {
  return (
    <div className="header_design">
      <img src={Rectangle_1} alt="" />
      <div className="header_heading">
        <h1>Let's make your home beautiful together</h1>
        <p>
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <button>
          Get Started <img src={Vector} alt="vector_img" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
