import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Statement from "../components/Statement/Statement";
import Banner from "../components/Banner/Banner";
import Main_One from "../components/Main-Design/Main_One";
import Logo from "../components/Logo/Logo";
import Small from "../components/Small/Small";
import Planner from "../components/Planner/Planner";
import Numbers from "../components/Numbers/Numbers";
import Small2 from "../components/Small2/Small2";
import Style from "../components/Style/Style";
import Rectangle from "../components/Rectangle/Rectangle";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Statement />
      <Banner />
      <Main_One />
      <Logo />
      <Small />
      <Planner />
      <Numbers />
      <Small2 />
      <Style />
      <Rectangle />
      <Footer />
    </div>
  );
};

export default Home;
