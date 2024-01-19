import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer_Img from "../components/Pages_Fotter_Images/Footer_Img";
import Pages_statement from "../components/Pages_statement/Pages_statement";
import Rectangle_statement from "../components/P_Rectangle_statement/Rectangle_statement";
import Second_Rectangle_Statement from "../components/P_Second_Rectangle_Statement/Second_Rectangle_Statement";
import Main_One from "../components/Main-Design/Main_One";
const Pages = () => {
  return (
    <div>
      <Navbar />
      <Footer_Img />
      <Pages_statement />
      <Rectangle_statement />
      <Second_Rectangle_Statement />
      <Main_One />
    </div>
  );
};

export default Pages;
