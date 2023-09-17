import React, { Fragment } from "react";

const OnGridSystem = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85">
        <div className="mt-10 container px-4 py-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
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
                <span className="relative">Solar PV Systems</span>
              </span>
              <br />
              Learning Guide
            </h2>
          </div>

          <div className="max-w-screen-md text-center sm:text-center sm:mx-auto pb-10 sm:pb-20">
            <p className="font-semibold text-gray-700 text-xl sm:px-4 custom-font-2">
              Welcome to our Solar PV Systems Learning Guide! Whether you're new
              to solar or an enthusiast, this comprehensive guide empowers you
              with knowledge on grid-tied, off-grid, and hybrid systems.
            </p>
          </div>
          <div className="p-8 rounded-lg border-2 border-green-300 shadow-lg sm:p-16 py-12">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  Grid-Tied / On-Grid
                  <br className="hidden sm:block" /> Solar Systems
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-lg font-semibold text-green-950 custom-font-2">
                  Grid-tied, on-grid, utility-interactive, grid intertie and
                  grid back feeding are all terms used to describe the same
                  concept - a solar system that is connected to the utility
                  power grid.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 row-gap-10 lg:grid-cols-2 pt-12">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide text-gray-800">
                    Introduction to Grid-Tied/On-Grid Solar Systems
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Grid-Tied or On-Grid Solar Systems connect to the main
                    electrical grid and generate electricity from sunlight using
                    solar panels. They interact with the grid, allowing users to
                    draw electricity when solar production is insufficient and
                    export surplus energy. This integration combines solar and
                    grid power for a reliable energy solution.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide">
                    How Grid-Tied Solar Systems Work
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Grid-tied solar systems consist of solar panels, an
                    inverter, and a bi-directional meter. Solar panels convert
                    sunlight into DC electricity, and the inverter converts it
                    into AC electricity, suitable for use. The bi-directional
                    meter measures energy flow, recording both electricity
                    consumed and surplus energy sent back to the grid.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide">
                    Advantages of Grid-Tied Solar Systems
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    These systems offer reliable power supply by using both
                    solar energy and grid power. Excess power generated on sunny
                    days is sent back to the grid, earning users credits or
                    incentives. Grid-tied systems are easier to install and
                    maintain compared to off-grid setups as they don't require
                    costly battery banks.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 py-12">
              <img
                className="object-contain w-full h-full col-span-2 rounded shadow-lg"
                src="/assets/images/on-grid.jpg"
                alt=""
              />
              <img
                className="object-contain w-full h-full col-span-2 rounded shadow-lg"
                src="/assets/images/on-grid-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OnGridSystem;
