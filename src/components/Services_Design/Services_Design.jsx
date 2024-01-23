import React from "react";
import Rectangle_21 from "../../assets/Rectangle_21.png";
import Rectangle_22 from "../../assets/Rectangle_22.png";
import Rectangle_23 from "../../assets/Rectangle_23.png";
import Rectangle_24 from "../../assets/Rectangle_24.png";
import "./Services_Design.css";
function Services_Design() {
  return (
    <div className="services_design_parent">
      <div className="services_design_part_one">
        <img src={Rectangle_21} alt="" />
        <div className="services_design_subpart_one">
          <h1>01</h1>
          <div className="services_design_child_one">
            <h2>Concept & Details</h2>
            <p>
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="services_design_part_two">
        <div className="services_design_subpart_two">
          <h1>02</h1>
          <div className="services_design_child_two">
            <h2>Idea for Work</h2>
            <p>
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
        <img src={Rectangle_22} alt="" />
      </div>
      <div className="services_design_part_three">
        <img src={Rectangle_23} alt="" />
        <div className="services_design_subpart_three">
          <h1>03</h1>
          <div className="services_design_child_three">
            <h2>Design</h2>
            <p>
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="services_design_part_foure">
        <div className="services_design_subpart_foure">
          <h1>04</h1>
          <div className="services_design_child_foure">
            <h2>Perfection</h2>
            <p>
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
        <img src={Rectangle_24} alt="" />
      </div>
    </div>
  );
}

export default Services_Design;
