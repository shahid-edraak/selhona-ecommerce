import React from "react";
import Vector_2 from "../../assets/Vector_2.png";
import Frame from "../../assets/Frame.png";
import Frame_3 from "../../assets/Frame_3.png";
import Frame_4 from "../../assets/Frame_4.png";
import "./Logo.css";
function Logo() {
  return (
    <div className="logo">
      <img src={Vector_2} alt="" />
      <img src={Frame} alt="" />
      <img src={Frame_3} alt="" />

      <img src={Frame_4} alt="" />
    </div>
  );
}

export default Logo;
