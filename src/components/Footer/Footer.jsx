import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagrame from "../../assets/instagrame.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_parent">
      <div className="footer_part_one">
        <div className="footer_img_logo">
          <img src={logo} alt="Logo" />
          <h2>SELHONO</h2>
        </div>
        <p>
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div className="social_logo">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagrame} alt="" />
        </div>
      </div>
      <div className="footer_part_two">
        <h2>Pages</h2>
        <ul>
          <li>About Us </li>
          <li>Our Projects </li>
          <li>Our Team </li>
          <li>Contact Us</li>
          <li> Services</li>
        </ul>
      </div>

      <div className="footer_part_three">
        <h2>Services</h2>
        <ul>
          <li> Kitchan</li>
          <li> Living Area </li>
          <li> Bathroom </li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </ul>
      </div>

      <div className="footer_part_foure">
        <h2>Contact</h2>
        <ul>
          <li>55 East Birchwood Ave.</li>
          <li>Brooklyn, New York 11201 </li>
          <li>contact@selhono.com</li>
          <li>(123) 456 - 7890</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
