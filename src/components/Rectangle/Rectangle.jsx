import React from "react";
import Rectangle_10 from "../../assets/Rectangle_10.png";
import Vector from "../../assets/Vector.png";
import "./Rectangle.css";
function Rectangle() {
  return (
    <div className="rectangle_parent">
      <img src={Rectangle_10} alt="" />
      <div className="rectangle_child">
        <h1>Wanna join the interno?</h1>
        <p>It is a long established fact will be distracted.</p>
        <button>
          Contact With Us <img src={Vector} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Rectangle;
