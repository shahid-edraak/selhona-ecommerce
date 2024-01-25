import React from "react";
import Navbar from "../components/Navbar/Navbar";
import S_Header_part from "../components/S_Header_Part/S_Header_part";
import P_Statement_Part from "../components/Project_Statement_Part/P_Statement_Part";
import Logo from "../components/Logo/Logo";
import P_Second_Statement from "../components/Project_Second_Statement/P_Second_Statement";
import Second_Rectangle_statement from "../components/P_Second_Rectangle_Statement/Second_Rectangle_Statement";
import Numbers from "../components/Numbers/Numbers";
import Footer from "../components/Footer/Footer";

function Single_Services() {
  return (
    <div>
      <Navbar />
      <S_Header_part />
      <P_Statement_Part />
      <Logo />
      <P_Second_Statement />
      <Second_Rectangle_statement />
      <Numbers />
      <Footer />
    </div>
  );
}

export default Single_Services;
