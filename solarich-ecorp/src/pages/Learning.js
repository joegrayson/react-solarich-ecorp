import React, { Fragment } from "react";

import OnGridSystem from "../sections/learning/OnGridSystem";
import OffGridSystem from "../sections/learning/OffGridSystem";
import HybridSystem from "../sections/learning/HybridSystem";

const Learning = () => {
  return (
    <Fragment>
      <OnGridSystem />
      <OffGridSystem />
      <HybridSystem />
    </Fragment>
  );
};

export default Learning;
