import React, { Fragment } from "react";

const AboutIntro = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85">
        <div className="mt-10 px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <div className="max-w-xl mb-6 md:mx-auto text-center sm:text-center lg:max-w-2xl md:mb-8">
            <h2 className="custom-font-2 max-w-xl sm:max-w-2xl mb-4 font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-amber-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span className="relative">Our Story of Solar</span>
              </span>
              <br />
              Innovation and Excellence
            </h2>
          </div>
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="container mb-6 lg:mb-0 sm:max-w-2xl lg:max-w-2xl lg:pr-5">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-amber-400 custom-font-2">
                    Our Story
                  </p>
                </div>
                <h2 className="mb-6 font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-3xl sm:leading-none custom-font-2">
                  SOLARICH ENTERPRISES CORP.
                  <br className="hidden md:block" />
                </h2>
                <p className="font-semibold text-gray-700 text-lg custom-font-2 tracking-wide">
                  Is a cutting-edge company that specializes in providing
                  top-quality solar installation services and retail solutions
                  to residential, commercial, and industrial clients. The
                  company was founded in April 2022 (formerly known as Solaraze
                  Enterprises Corporation) and is proudly owned by Filipino
                  shareholders who bring a wealth of experience and knowledge to
                  the table.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/images/solarich-logo-w-name.png"
                className="object-cover object-top w-full h-full flex items-center justify-center mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutIntro;
