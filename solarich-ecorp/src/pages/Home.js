import React, { Fragment } from "react";

// Sections
import Banner from "../sections/Banner";
import ResidentialService from "../sections/ResidentialService";
import AboutSection from "../sections/AboutSection";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ResidentialService />
      <AboutSection />
    </Fragment>
  );
};

export default Home;
