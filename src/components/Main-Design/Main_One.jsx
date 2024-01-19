import React from "react";
import Image from "../../assets/Image.png";
import Image_1 from "../../assets/Image_1.png";
import Image_2 from "../../assets/Image_2.png";
import "./Main_One.css";

function Main_One() {
  return (
    <div className="main_parent">
      <div className="main_design_part">
        <div className="heading">
          <h1>What the People Thinks About Us</h1>
        </div>
        <div className="parent">
          <div className="para_design_one">
            <div className="sub_part">
              <img src={Image} alt="image" />
              <div className="part">
                <h3>Natasha</h3>
                <p> Moscow, Russia</p>
              </div>
            </div>
            <div className="para">
              <p>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
          </div>
          <div className="para_design_two">
            <div className="sub_part">
              <img src={Image_1} alt="image" />
              <div className="part">
                <h3>Natasha</h3>
                <p> Moscow, Russia</p>
              </div>
            </div>
            <div className="para">
              <p>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
          </div>
          <div className="para_design_three">
            <div className="sub_part">
              <img src={Image_2} alt="image" />
              <div className="part">
                <h3>Natasha</h3>
                <p> Moscow, Russia</p>
              </div>
            </div>
            <div className="para">
              <p>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_One;
