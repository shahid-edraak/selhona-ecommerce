import React from "react";
import "./Banner.css";
import Frame_2 from "../../assets/Frame_2.png";
import Subtract from "../../assets/Subtract.png";
import Call from "../../assets/Call.png";
import Vector from "../../assets/Vector.png";
const Banner = () => {
  return (
    <div className="banner_main">
      <div className="fram_img">
        <img src={Frame_2} alt="Frame_2" />
        <div className="fram_part">
          <h1>We create art for modern life</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="box_call">
            <div className="circle">
              <img src={Call} alt="" />
            </div>
            <div className="small_part_box">
              <h5>012345678</h5>
              <p>Call Us Anytime</p>
            </div>
          </div>

          <button>
            Get Free Estimate
            <img src={Vector} alt="" />
          </button>
        </div>
      </div>
      <div className="subtract_img">
        <div className="space_img"></div>
        <img src={Subtract} alt="" />
      </div>
    </div>
  );
};

export default Banner;
