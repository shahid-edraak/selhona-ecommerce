import React from "react";
import mobile from "../../assets/mobile.png";
import email from "../../assets/email.png";
import website from "../../assets/website.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagrame from "../../assets/instagrame.png";
import Vector from "../../assets/Vector.png";
import "./Contact_Header_Part.css";
function Contact_Header_Part() {
  return (
    <div className="contact_header_part_parent">
      <h1> We love meeting new people and helping them.</h1>
      <div className="contact_header_child_part">
        <div className="contact_header_child_part_one">
          <div className="c_header_child_left_part">
            <img src={mobile} alt="" />
            <img src={email} alt="" />
            <img src={website} alt="" />
            <div className="contact_header_child_logo">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagrame} alt="" />
            </div>
          </div>

          <div className="c_header_child_right_part">
            <p>info@selhono.com</p>
            <p>+1 (378) 400-1234</p>
            <p>www.selhono.com</p>
          </div>
        </div>

        <div className="contact_header_child_part_two">
          <div className="c_header_child_input_one">
            <div className="c_h_child_para_one">
              <input type="text" id="text" name="text" placeholder="Name" />
            </div>
            <div className="c_h_child_para_two">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="c_header_child_input_two">
            <div className="c_h_child_input_one">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="c_h_child_input_two">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              ></input>
            </div>
          </div>
          <p>Hello Iam Intrested in..</p>
        </div>
      </div>
      <button>
        Send Now <img src={Vector} alt="" />
      </button>
    </div>
  );
}

export default Contact_Header_Part;
