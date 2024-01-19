import React from "react";
import Rectangle_4 from "../../assets/Rectangle_4.png";
import Rectangle_5 from "../../assets/Rectangle_5.png";
import Rectangle_6 from "../../assets/Rectangle_6.png";
import Rectangle_7 from "../../assets/Rectangle_7.png";
import next_arrow from "../../assets/next_arrow.png";
import "./Planner.css";
export const Planner = () => {
  return (
    <div className="planner_parent">
      <div className="top_left">
        <img src={Rectangle_4} alt="" />
        <div className="para_left">
          <h3>Modern bedroom</h3>
          <p>Decor / Artchitecture</p>
        </div>
        <div className="img_right">
          <img src={next_arrow} alt="" />
        </div>
      </div>
      <div className="top_right">
        <img src={Rectangle_5} alt="" />
        <div className="para_left">
          <h3>Modern bedroom</h3>
          <p>Decor / Artchitecture</p>
        </div>
        <div className="img_right">
          <img src={next_arrow} alt="" />
        </div>
      </div>
      <div className="bottom_left">
        <img src={Rectangle_6} alt="" />
        <div className="para_left">
          <h3>Modern bedroom</h3>
          <p>Decor / Artchitecture</p>
        </div>
        <div className="img_right">
          <img src={next_arrow} alt="" />
        </div>
      </div>
      <div className="bottom_right">
        <img src={Rectangle_7} alt="" />
        <div className="para_left">
          <h3>Modern bedroom</h3>
          <p>Decor / Artchitecture</p>
        </div>
        <div className="img_right">
          <img src={next_arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Planner;
