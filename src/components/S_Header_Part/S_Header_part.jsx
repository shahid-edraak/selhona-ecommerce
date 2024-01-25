import React from "react";
import Rectabgle_20 from "../../assets/Rectangle_20.png";
import "./S_Header_part.css";
function S_Header_part() {
  return (
    <div className="s_header_part">
      <img src={Rectabgle_20} alt="" />
      <div className="s_header_heading">
        <h2>Single Services</h2>
      </div>
    </div>
  );
}

export default S_Header_part;
