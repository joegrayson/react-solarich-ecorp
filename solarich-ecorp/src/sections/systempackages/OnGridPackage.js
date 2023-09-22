import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const OnGridPackage = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85">
        <div className="mt-10 container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <div className="max-w-xl mb-6 md:mx-auto text-center sm:text-center lg:max-w-2xl md:mb-8">
            <h2 className="custom-font-2 max-w-xl sm:max-w-2xl mb-4 font-sans text-3xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
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
                <span className="relative">Solar PV</span>
              </span>
              <br />
              System Packages
            </h2>
          </div>

          <div className="max-w-screen-md text-center sm:text-center sm:mx-auto pb-10 sm:pb-20">
            <p className="font-semibold text-gray-700 text-xl sm:px-4 custom-font-2">
              Explore On-Grid and Hybrid Solar Systems with Solarich's System
              Packages - efficient solutions for residential and commercial
              needs. Embrace a greener future today!
            </p>
          </div>

          <div className="p-8 rounded-lg border-2 border-green-300 shadow-lg sm:p-16 py-12">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  On-Grid Solar
                  <br className="hidden sm:block" /> System Packages
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-xl font-semibold text-green-950 custom-font-2">
                  For the safest, most efficient and excellent service, Solarich
                  is the right provider for you. We offer only the best products
                  to ensure customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="grid max-w-xl gap-6 row-gap-6 lg:max-w-screen-xl sm:row-gap-8 lg:grid-cols-4 xl:max-w-screen-2xl sm:mx-auto py-12">
            {/* First Card */}
            <div className="flex flex-col">
              <div className="relative w-full h-48">
                <img
                  src="/assets/images/on-grid-package.png"
                  className="object-contain w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between p-6 border border-t-0 rounded-b transition duration-300 rounded shadow-md hover:shadow">
                <div>
                  <div className="text-center mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl custom-font-2 tracking-wide text-green-900">
                    3.29 kW
                  </div>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Estimated Annual Production of{" "}
                        <strong>4,656 kWh</strong>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        <strong>7x</strong> Monocrystalline Solar Panels
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Inverter Single Phase w/ <strong>98%</strong> max
                        efficiency
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        System Efficiency of <strong>90%</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="flex flex-col">
              <div className="relative w-full h-48">
                <img
                  src="/assets/images/on-grid-package.png"
                  className="object-contain w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between p-6 border border-t-0 rounded-b transition duration-300 rounded shadow-md hover:shadow">
                <div>
                  <div className="text-center mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl custom-font-2 tracking-wide text-green-900">
                    5.64 kW
                  </div>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Estimated Annual Production of{" "}
                        <strong>7,983 kWh</strong>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        <strong>12x</strong> Monocrystalline Solar Panels
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Inverter Single Phase w/ <strong>98%</strong> max
                        efficiency
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        System Efficiency of <strong>90%</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Third Grid */}
            <div className="flex flex-col">
              <div className="relative w-full h-48">
                <img
                  src="/assets/images/on-grid-package.png"
                  className="object-contain w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between p-6 border border-t-0 rounded-b transition duration-300 rounded shadow-md hover:shadow">
                <div>
                  <div className="text-center mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl custom-font-2 tracking-wide text-green-900">
                    8.46 kW
                  </div>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Estimated Annual Production of{" "}
                        <strong>11,309 kWh</strong>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        <strong>18x</strong> Monocrystalline Solar Panels
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Inverter Single Phase w/ <strong>98%</strong> max
                        efficiency
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        System Efficiency of <strong>90%</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Fourth Grid */}
            <div className="flex flex-col">
              <div className="relative w-full h-48">
                <img
                  src="/assets/images/on-grid-package.png"
                  className="object-contain w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between p-6 border border-t-0 rounded-b transition duration-300 rounded shadow-md hover:shadow">
                <div>
                  <div className="text-center mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl custom-font-2 tracking-wide text-green-900">
                    10.34 kW
                  </div>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Estimated Annual Production of{" "}
                        <strong>14,635 kWh</strong>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        <strong>22x</strong> Monocrystalline Solar Panels
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 pt-1">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        Inverter Single Phase w/ <strong>98%</strong> max
                        efficiency
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-amber-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          ></polyline>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800 custom-font-2 tracking-normal">
                        System Efficiency of <strong>90%</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-widest text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 capitalize focus:shadow-outline focus:outline-none custom-font-2"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OnGridPackage;
