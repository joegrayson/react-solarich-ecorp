import React, { Fragment } from "react";

const HybridSystem = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85">
        <div className="container px-8 py-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <div className="p-8 rounded-lg border-2 border-green-300 shadow-lg sm:p-16 py-12">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  Hybrid <br className="hidden sm:block" />
                  Solar Systems
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-lg font-semibold text-green-950 custom-font-2">
                  Hybrid solar systems combines the best from grid-tied and
                  off-grid solar systems. These systems can either be described
                  as off-grid solar with utility backup power, or grid-tied
                  solar with extra battery storage.
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
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide text-green-900">
                    Introduction to Hybrid Solar Systems
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    A Hybrid Solar System, also known as a Hybrid PV System,
                    combines the features of both grid-tied and off-grid solar
                    systems. This setup integrates solar panels with energy
                    storage solutions, such as batteries, as well as the ability
                    to connect to the main electrical grid. The goal of a hybrid
                    solar system is to optimize energy usage, ensure power
                    backup during outages, and achieve greater energy
                    independence.
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
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide text-green-900">
                    How Hybrid Solar Systems Work
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Hybrid solar systems function by generating electricity from
                    solar panels during the day. The energy produced is used to
                    power the electrical appliances and devices in the building.
                    The surplus energy not immediately consumed is stored in
                    batteries for later use. If the battery storage is
                    insufficient or the energy demand exceeds the solar
                    production, the system can draw additional electricity from
                    the grid to meet the needs.
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
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide text-green-900">
                    Advantages of Hybrid Solar Systems
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Hybrid solar systems offer several benefits. They provide
                    backup power during grid outages, ensuring a continuous
                    electricity supply even when sunlight is limited. The
                    ability to draw electricity from the grid when needed and
                    feed excess energy back to the grid when there is a surplus
                    allows users to take advantage of net metering programs and
                    potentially reduce electricity bills. Hybrid systems also
                    promote energy efficiency by optimizing the use of solar
                    energy and minimizing reliance on grid power.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 py-12">
              <img
                className="object-contain w-full h-full col-span-2 rounded shadow-lg"
                src="/assets/images/hybrid.jpg"
                alt=""
              />
              <img
                className="object-contain w-full h-full col-span-2 rounded shadow-lg"
                src="/assets/images/hybrid-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HybridSystem;
