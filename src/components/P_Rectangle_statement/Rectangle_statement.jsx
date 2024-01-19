import React from "react";
import Rectangle_18 from "../../assets/Rectangle_18.png";
import Vector from "../../assets/Vector.png";
import "./Rectangle_statement.css";
function Rectangle_statement() {
  return (
    <div className="Rectangle_statement_parent">
      <div className="Rectangle_statement">
        <h1>What We Do</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <button>
          Our Concept <img src={Vector} alt="" />
        </button>
      </div>
      <div className="Rectangle_img">
        <img src={Rectangle_18} alt="" />
      </div>
    </div>
  );
}

export default Rectangle_statement;
