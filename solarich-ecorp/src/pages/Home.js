import React, { Fragment } from "react";

// Sections
import Banner from "../sections/Banner";
import ResidentialService from "../sections/ResidentialService";
import AboutSection from "../sections/AboutSection";
import ResidentialProjects from "../sections/ResidentialProjects";
import CommercialService from "../sections/CommercialService";
import CommercialProjects from "../sections/CommercialProjects";
import LearningGuide from "../sections/LearningGuide";
import TrainingSection from "../sections/TrainingSection";
import BrandAssociations from "../sections/BrandAssociations";
import ContactSection from "../sections/ContactSection";
import LocationSection from "../sections/LocationSection";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ResidentialService />
      <ResidentialProjects />
      <CommercialService />
      <CommercialProjects />
      <LearningGuide />
      <TrainingSection />
      <BrandAssociations />
      <AboutSection />
      <ContactSection />
      <LocationSection />
    </Fragment>
  );
};

export default Home;
