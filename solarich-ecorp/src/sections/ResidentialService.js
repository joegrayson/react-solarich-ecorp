import React, { Fragment } from "react";

const ResidentialService = () => {
  return (
    <Fragment>
      <section
        className="bg-gray-50 bg-opacity-85 scroll-section"
        id="residential"
      >
        <div className="container pt-32 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="text-gray-200 w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  Residential Solar
                  <br className="hidden md:block" />
                  <span className="inline-block">Installation Services</span>
                </h2>
                <p className="text-lg font-semibold text-gray-700 md:text-lg tracking-wide custom-font-2">
                  Home solar solutions that save you money and reduce your
                  carbon footprint. Trust Solarich for expert installations.
                </p>
              </div>
              <div>
                <a
                  href="#getQuote"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-green-500 custom-font-1 tracking-wide"
                >
                  Get a quote
                  <svg
                    className="inline-block w-3 mt-0.5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 duration-500 hover:scale-105"
                  src="/assets/images/residential-img-4_cleanup.jpg"
                  alt="residential"
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 duration-500 hover:scale-105"
                  src="/assets/images/residential-img-3.jpg"
                  alt="residential"
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 duration-500 hover:scale-105"
                  src="/assets/images/residential-gallery-2.jpg"
                  alt="residential"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ResidentialService;
