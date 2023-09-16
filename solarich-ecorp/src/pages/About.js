import React, { Fragment } from "react";

import AboutIntro from "../sections/about/AboutIntro";
import Objectives from "../sections/about/Objectives";
import MissionVision from "../sections/about/MissionVision";
import CoreValues from "../sections/about/CoreValues";

const About = () => {
  return (
    <Fragment>
      <AboutIntro />
      <Objectives />
      <MissionVision />
      <CoreValues />
    </Fragment>
  );
};

export default About;
