import React, { Fragment } from "react";

import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

const CommercialService = () => {
  return (
    <Fragment>
      <section
        className="bg-gray-50 bg-opacity-85 scroll-section"
        id="commercial"
      >
        <div className="container px-4 pt-32 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="text-gray-200 w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  ></path>
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  Commercial Solar
                  <br className="hidden md:block" />
                  <span className="inline-block">Installation Services</span>
                </h2>
                <p className="text-lg font-semibold text-gray-700 md:text-lg tracking-wide custom-font-2">
                  As a preferred partner of DALI Convenience Stores, we bring
                  our expertise and innovation to empower businesses like yours.
                  Join our growing community of eco-conscious leaders and
                  embrace a brighter, greener future with Solarich.
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

            <div className="mb-6 shadow-xl lg:mb-8">
              {/* Carousel */}
              <div
                id="carouselExampleSlidesOnly"
                className="relative"
                data-te-carousel-init
                data-te-ride="carousel"
              >
                {/* Carousel items */}
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  {/* First item */}
                  <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active
                  >
                    <img
                      src="/assets/images/commercial-1.jpg"
                      className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                      alt="Installation Service with DALI"
                    />
                  </div>
                  {/* Second item */}
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                  >
                    <img
                      src="/assets/images/commercial-2.jpg"
                      className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                      alt="Installation Service with DALI"
                    />
                  </div>
                  {/* Third item */}
                  <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                  >
                    <img
                      src="/assets/images/commercial-3.jpg"
                      className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                      alt="Installation Service with DALI"
                    />
                  </div>
                </div>
              </div>
              {/* End of Carousel */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CommercialService;
