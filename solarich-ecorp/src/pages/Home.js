import React, { Fragment } from "react";

// Sections
import Banner from "../sections/Banner";
import ResidentialService from "../sections/ResidentialService";
import AboutSection from "../sections/AboutSection";
import ResidentialProjects from "../sections/ResidentialProjects";
import CommercialService from "../sections/CommercialService";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ResidentialService />
      <ResidentialProjects />
      <CommercialService />
      <AboutSection />
    </Fragment>
  );
};

export default Home;
