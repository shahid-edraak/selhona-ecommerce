import React from "react";
import Vector from "../../assets/Vector.png";
import "./Pages_Second_Footer.css";
function Pages_Second_Footer() {
  return (
    <div className="pages_second_footer_parent">
      <div className="pages_second_footer_heading">
        <div className="pages_second_footer_input">
          <div className="footer_input_one">
            <p>Name</p>
          </div>
          <div className="footer_input_two">
            <p>Email</p>
          </div>
        </div>
        <div className="footer_input_three">
          <p>Messgae</p>
        </div>
      </div>

      <button>
        Send Now <img src={Vector} alt="" />
      </button>
    </div>
  );
}

export default Pages_Second_Footer;
