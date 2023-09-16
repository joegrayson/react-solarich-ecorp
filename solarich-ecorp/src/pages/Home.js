import React, { Fragment } from "react";

// Sections
import Banner from "../sections/homepage/Banner";
import ResidentialService from "../sections/homepage/ResidentialService";
import AboutSection from "../sections/homepage/AboutSection";
import ResidentialProjects from "../sections/homepage/ResidentialProjects";
import CommercialService from "../sections/homepage/CommercialService";
import CommercialProjects from "../sections/homepage/CommercialProjects";
import LearningGuide from "../sections/homepage/LearningGuide";
import TrainingSection from "../sections/homepage/TrainingSection";
import BrandAssociations from "../components/BrandAssociations";
import ContactSection from "../sections/homepage/ContactSection";
import LocationSection from "../sections/homepage/LocationSection";

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
