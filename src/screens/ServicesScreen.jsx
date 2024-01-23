import React from "react";
import Navbar from "../components/Navbar/Navbar";
import S_Header_part from "../components/Services_Header_Part/S_Header_part";
import Services_Statement_part from "../components/Services_Statement_part/S_Statement_part";
import S_Small from "../components/Services_Small/S_Small";
import Rectangle from "../components/Rectangle/Rectangle";
import Footer from "../components/Footer/Footer";
import Services_Design from "../components/Services_Design/Services_Design";
function ServicesScreen() {
  return (
    <div>
      <Navbar />
      <S_Header_part />
      <Services_Statement_part />
      <S_Small />
      <Services_Design />
      <Rectangle />
      <Footer />
    </div>
  );
}

export default ServicesScreen;
