import React from "react";
import Hero from "../../Components/HeroSection/Hero";
import ProjectSection from "../../Components/ProjectSection/ProjectSection";
import Footer from "../../Components/Footer/Footer";
import StartProject from "../../Components/Start Project/StartProject";

const Home = () => {
  return (
    <>
      <Hero />
      <ProjectSection/>
      <StartProject/>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
