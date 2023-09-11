import React, { Fragment } from "react";

const ResidentialProjects = () => {
  return (
    <Fragment>
      <section className="bg-gray-100 scroll-section" id="residential">
        <div className="container px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20">
            <h2 className="max-w-2xl mb-6 leading-none md:mx-auto font-sans text-3xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-amber-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span className="relative">Solar-Powered Homes:</span>
              </span>
              Introducing Our Featured Residential Project
            </h2>
          </div>
          <div className="grid max-w-screen-xl gap-8 sm:gap-x-20 lg:grid-cols-2 sm:mx-auto mb-12">
            <div className="flex flex-col justify-center custom-font-2 tracking-wide">
              <div className="pb-4 mb-1">
                <h6 className="mb-6 text-2xl font-bold leading-5">
                  On-Grid Solar PV System Installation
                </h6>
                <p className="text-lg font-semibold text-gray-700 md:text-lg tracking-wide custom-font-2">
                  Witness the impressive installation of an on-grid solar system
                  at a residential property in Trece, Cavite by Solarich
                  Enterprises Corp. Embrace the power of solar energy and enjoy
                  unlimited electricity while positively impacting the
                  environment. The services include precise 3 kW ON-GRID Solar
                  PV System Installation with a state-of-the-art 5 kW HYBRID
                  Inverter, showcasing the commitment to excellence and
                  sustainability.
                </p>
              </div>
              <div className="pb-4">
                <p className="text-lg font-semibold text-gray-700 md:text-lg tracking-wide custom-font-2">
                  Camit Residence in Trece Martires City exemplifies the
                  potential of solar energy adoption in communities. Solarich is
                  proud to be a trusted partner in delivering exceptional
                  solutions, driving positive change for a brighter, greener
                  future. Your confidence in our expertise and dedication is
                  greatly appreciated, as together, we create a sustainable
                  tomorrow for generations to come.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 rounded shadow-lg hover:-translate-y-2 transform duration-300"
                src="/assets/images/residential-img-1.jpg"
                alt="residential"
              />
              <img
                className="object-cover w-full h-56 rounded shadow-lg hover:-translate-y-2 transform duration-300"
                src="/assets/images/residential-gallery-1.jpg"
                alt="residential"
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg hover:-translate-y-2 transform duration-300"
                src="/assets/images/residential-gallery-3.jpg"
                alt="residential"
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg hover:-translate-y-2 transform duration-300"
                src="/assets/images/residential-gallery-5_cleanup.jpg"
                alt="residential"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ResidentialProjects;
