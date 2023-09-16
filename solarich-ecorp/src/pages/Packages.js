import React, { Fragment } from "react";

import OnGridPackage from "../sections/systempackages/OnGridPackage";
import HybridPackage from "../sections/systempackages/HybridPackage";

const Packages = () => {
  return (
    <Fragment>
      <OnGridPackage />
      <HybridPackage />
    </Fragment>
  );
};

export default Packages;
