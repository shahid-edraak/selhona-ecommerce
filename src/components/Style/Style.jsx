import React, { useState } from "react";
import Image_3 from "../../assets/Image_5.png";
import Image_4 from "../../assets/Image_4.png";
import Image_5 from "../../assets/Image_5.png";
import next_arrow from "../../assets/next_arrow.png";
import "./Style.css";

function Style() {
  const [backgroundColor1, setBackgroundColor1] = useState();
  const [backgroundColor2, setBackgroundColor2] = useState();
  const [backgroundColor3, setBackgroundColor3] = useState();

  const handleNextClick = (partNumber) => {
    if (partNumber === 1) {
      setBackgroundColor1("#F4F0EC");
      setBackgroundColor2(null);
      setBackgroundColor3(null);
    } else if (partNumber === 2) {
      setBackgroundColor1(null);
      setBackgroundColor2("#F4F0EC");
      setBackgroundColor3(null);
    } else if (partNumber === 3) {
      setBackgroundColor1(null);
      setBackgroundColor2(null);
      setBackgroundColor3("#F4F0EC");
    }
  };

  return (
    <div className="style_parent">
      <div
        className="style_part_one"
        style={{ backgroundColor: backgroundColor1, borderRadius: "30px" }}
        onClick={() => handleNextClick(1)}
      >
        <img src={Image_3} alt="" />
        <div className="style_child">
          <h2>Let’s Get Solution For Building Construction Work</h2>
          <div className="next_img">
            <p>26 December,2022 </p>
            <img src={next_arrow} alt="" />
          </div>
        </div>
      </div>
      <div
        className="style_part_two"
        style={{ backgroundColor: backgroundColor2, borderRadius: "30px" }}
        onClick={() => handleNextClick(2)}
      >
        <img src={Image_4} alt="" />
        <div className="style_child">
          <h2>Let’s Get Solution For Building Construction Work</h2>
          <div className="next_img">
            <p>26 December,2022 </p>
            <img src={next_arrow} alt="" />
          </div>
        </div>
      </div>
      <div
        className="style_part_three"
        style={{ backgroundColor: backgroundColor3, borderRadius: "30px" }}
        onClick={() => handleNextClick(3)}
      >
        <img src={Image_5} alt="" />
        <div className="style_child" onClick={() => handleNextClick(3)}>
          <h2>Let’s Get Solution For Building Construction Work</h2>
          <div className="next_img">
            <p>26 December,2022 </p>
            <img src={next_arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style;
