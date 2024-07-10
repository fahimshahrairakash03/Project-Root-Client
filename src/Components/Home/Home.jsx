import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Support from "../Support/Support";
import Features from "../Features/Features";
import ServiceBanner from "../Service/ServiceBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Support></Support>
      <About></About>
      <ServiceBanner></ServiceBanner>
      <Features></Features>
    </div>
  );
};

export default Home;
