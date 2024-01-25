import React from "react";
import Rectabgle_20 from "../../assets/Rectangle_20.png";
import "./First_Service_Header_Part.css";
function First_Service_Header_Part() {
  return (
    <div className="p_header_part">
      <img src={Rectabgle_20} alt="" />
      <div className="p_header_heading">
        <h2> Services</h2>
      </div>
    </div>
  );
}

export default First_Service_Header_Part;
