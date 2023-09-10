import React, { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="relative custom-bg scroll-section" id="home">
        <div className="relative bg-opacity-40 bg-gray-700 h-screen drop-shadow-lg">
          <svg
            className="absolute inset-x-0 text-opacity-80 bottom-0 text-green-800 shadow-xl"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div className="mx-auto max-w-screen-xl sm:justify-center sm:text-center flex h-screen sm:items-center">
            {/*  */}
            <div className="relative px-4 py-16 mx-auto overflow-hidden">
              <div className="flex  items-center justify-between ">
                <div className="px-4 py-16 mx-auto ">
                  <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                      <div className="mb-6 sm:mx-auto">
                        <div className="flex items-center -ml-2 justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full">
                          <img
                            className="w-16 h-16 sm:w-24 sm:h-24 drop-shadow-md"
                            src="/assets/images/solarich-icon.png"
                            alt="solarich-icon"
                          />
                        </div>
                      </div>
                      <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
                        <h2 className="max-w-2xl mb-2 font-sans text-3xl font-bold leading-none tracking-wide drop-shadow-md text-gray-200 sm:text-6xl md:mx-auto custom-font-2">
                          <span className="relative inline-block">
                            Sustainable
                            <span className="relative text-yellow-400">
                              {" "}
                              Energy
                            </span>
                            <br />
                          </span>{" "}
                          for a Sustainable{" "}
                          <span className="relative text-green-500">
                            Future
                          </span>
                          <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                          >
                            <defs>
                              <pattern
                                id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                              >
                                <circle cx="1" cy="1" r=".7"></circle>
                              </pattern>
                            </defs>
                            <rect
                              fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                              width="52"
                              height="24"
                            ></rect>
                          </svg>
                        </h2>
                        <p className="text-base font-medium text-gray-100 md:text-2xl custom-font-2 tracking-wide">
                          Allow us to help you empower your home and business
                          with our Solar PV Systems.
                        </p>
                      </div>
                      <div>
                        <a
                          href="#getQuote"
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-widest text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 capitalize focus:shadow-outline focus:outline-none custom-font-2"
                        >
                          Get a quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
