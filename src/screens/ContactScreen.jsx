import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Contact_Header from "../components/Contact_Header/Contact_Header";
import Contact_Header_Part from "../components/Contact_Header_Part/Contact_Header_Part";
import Contact_Image_Part from "../components/Contact_Image_Part/Contact_Image_Part";
import Footer from "../components/Footer/Footer";
function ContactScreen() {
  return (
    <div>
      <Navbar />
      <Contact_Header />
      <Contact_Header_Part />
      <Contact_Image_Part />
      <Footer />
    </div>
  );
}

export default ContactScreen;
