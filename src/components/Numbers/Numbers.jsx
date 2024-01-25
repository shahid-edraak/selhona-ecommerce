import React from "react";
import "./Numbers.css";
function Numbers() {
  return (
    <div className="num_parent">
      <div className="num_child_part">
        <div className="num_child">
          <h1>12</h1>
          <p>Years Of Experiance</p>
        </div>
        <div className="n_line_one"></div>
        <div className="num_child">
          <h1>1074</h1>
          <p>Success Project</p>
        </div>
        <div className="n_line_two"></div>
      </div>
      <div className="num_child_second_part">
        <div className="num_child">
          <h1>98</h1>
          <p>Active Project</p>
        </div>
        <div className="line_three"></div>
        <div className="num_child">
          <h1>583</h1>
          <p>Happy CUstomers</p>
        </div>
        <div className="line_foure"></div>
      </div>
    </div>
  );
}

export default Numbers;
