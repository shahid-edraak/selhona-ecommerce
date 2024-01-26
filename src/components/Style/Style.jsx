import Image_3 from "../../assets/Image_5.png";
import Image_4 from "../../assets/Image_4.png";
import Image_5 from "../../assets/Image_5.png";
import next_arrow from "../../assets/next_arrow.png";
import "./Style.css";

function Style() {
  return (
    <div className="style_parent">
      <div className="style_part_one bg_color">
        <img src={Image_3} alt="" />
        <div className="style_child">
          <h2>Let’s Get Solution For Building Construction Work</h2>
          <div className="next_img">
            <p>26 December,2022 </p>
            <img src={next_arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="style_part_two bg_color">
        <img src={Image_4} alt="" />
        <div className="style_child">
          <h2>Let’s Get Solution For Building Construction Work</h2>
          <div className="next_img">
            <p>26 December,2022 </p>
            <img src={next_arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="style_part_three bg_color">
        <img src={Image_5} alt="" />
        <div className="style_child">
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
