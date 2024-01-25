import React from "react";
import { useNavigate } from "react-router-dom";
import Rectangle_19 from "../../assets/Rectangle_19.png";
import Vector from "../../assets/Vector.png";
import "./Second_Rectangle_Statement.css";

function Second_Rectangle_Statement() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/single_services");
  };

  return (
    <div className="Second_Rectangle_statement_parent">
      <div className="Second_Rectangle_img">
        <img src={Rectangle_19} alt="" />
      </div>
      <div className="Second_Rectangle_statement">
        <h1>The End Result</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <button onClick={handleButtonClick}>
          Our Portfolio <img src={Vector} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Second_Rectangle_Statement;
