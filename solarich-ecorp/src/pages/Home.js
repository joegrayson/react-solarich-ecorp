import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      {/* About Section */}
      <section className="bg-gray-50 bg-opacity-85 scroll-section" id="about">
        <div className="px-4 pt-28 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
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
          {/* <!--  --> */}
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
                  Enterprises Corp) and is proudly owned by Filipino
                  shareholders who bring a wealth of experience and knowledge to
                  the table.
                </p>
              </div>
              <div>
                <Link
                  to="/about"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-green-500 custom-font-1 tracking-wide"
                >
                  Read more
                  <svg
                    className="inline-block w-3 mt-0.5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="px-4">
              <img
                src="/assets/images/solarich-icon.png"
                className="object-cover object-top w-full h-80 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
                alt="Solarich Logo"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
