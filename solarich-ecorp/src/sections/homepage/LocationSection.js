import React, { Fragment } from "react";

const LocationSection = () => {
  return (
    <Fragment>
      <section>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 mt-8">
          <div className="mb-5 lg:w-3/4 lg:mb-8 lg:mr-20">
            <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-normal text-green-900 sm:text-4xl sm:leading-none custom-font-2">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-amber-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span className="relative">Feel </span>
              </span>{" "}
              free to drop by anytime! We're here and eager to help whenever you
              need. Come visit us soon!
            </h2>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="anim-zoom">
            <img
              className="object-cover w-full h-56 sm:h-96"
              src="/assets/images/about-image.JPG"
              alt="Solarich Establishment"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default LocationSection;
