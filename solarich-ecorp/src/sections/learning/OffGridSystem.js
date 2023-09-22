import React, { Fragment } from "react";

const OffGridSystem = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85">
        <div className="container px-8 py-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <div className="p-8 rounded-lg border-2 border-green-300 shadow-lg sm:p-16 py-12">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  Off-Grid
                  <br className="hidden sm:block" /> Solar Systems
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-lg font-semibold text-green-950 custom-font-2">
                  An off-grid solar system (off-the-grid, standalone) is the
                  obvious alternative to one that is grid-tied. For homeowners
                  that have access to the grid, off-grid solar systems are
                  usually out of question.
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
                  <p className="mb-2 text-lg font-bold custom-font-2 tracking-wide">
                    Introduction to Off-Grid Solar Systems
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Off-Grid Solar Systems are standalone setups that generate,
                    store, and supply electricity independently of the main
                    grid. Common in remote areas, they utilize solar panels,
                    batteries, charge controllers, and inverters.
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
                    How Off-Grid Solar Systems Work
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Solar panels capture sunlight and convert it into DC
                    electricity. Charge controllers regulate battery charging,
                    while batteries store excess energy. The inverter converts
                    DC to AC electricity for use.
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
                    Advantages of Off-Grid Solar Systems
                  </p>
                  <p className="text-gray-800 custom-font-2 tracking-wide">
                    Off-grid systems offer energy access in remote locations and
                    independence from the grid. They provide a reliable power
                    supply, reduce reliance on fossil fuels, and promote
                    sustainable living.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 py-12">
              <img
                className="object-contain w-full h-full col-span-2 rounded shadow-lg"
                src="/assets/images/off-grid.jpg"
                alt=""
              />
              <img
                className="object-contain w-full h-full col-span-2 rounded shadow-lg"
                src="/assets/images/off-grid-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OffGridSystem;
