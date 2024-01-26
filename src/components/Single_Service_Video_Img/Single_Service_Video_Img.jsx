import React from "react";
import Rectangle_26 from "../../assets/Rectangle_26.png";
import { GiPlayButton } from "react-icons/gi";
import "./Single_Service_Video_Img.css";

function Single_Service_Video_Img() {
  return (
    <div className="s_s_video_img_p">
      <img src={Rectangle_26} alt="" />
      <div className="video_img_circle">
        <GiPlayButton className="play_button" />
      </div>
    </div>
  );
}

export default Single_Service_Video_Img;
