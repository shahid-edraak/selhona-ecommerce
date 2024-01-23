import React from "react";
import Rectabgle_20 from "../../assets/Rectangle_20.png";
import "./P_Header_Part.css";
function P_Header_Part() {
  return (
    <div className="p_header_part">
      <img src={Rectabgle_20} alt="" />
      <div className="p_header_heading">
        <h2>Our Project</h2>
      </div>
    </div>
  );
}

export default P_Header_Part;
