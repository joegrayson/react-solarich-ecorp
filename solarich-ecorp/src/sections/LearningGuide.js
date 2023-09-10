import React, { Fragment } from "react";

const LearningGuide = () => {
  return (
    <Fragment>
      <section>
        <div class="container py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col lg:flex-row">
            <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 class="mb-5 font-sans text-3xl font-bold tracking-normal text-green-900 sm:text-4xl sm:leading-none custom-font-2">
                Are you new to solar energy?
                <br class="hidden md:block" />
                No worries, we've got you covered!
              </h2>
              <div>
                <a
                  href="/pages/learning-guide.html"
                  aria-label=""
                  class="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-green-500 custom-font-1 tracking-wide"
                >
                  Learn more
                  <svg
                    class="inline-block w-3 mt-0.5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="lg:w-1/2 -mb-4">
              <p class="text-lg md:text-xl text-gray-700 custom-font-2 font-semibold tracking-wide">
                At Solarich Enterprises Corp, we're dedicated to supporting both
                beginners and enthusiasts as they embark on their exciting path
                towards clean energy. Our comprehensive
                <a
                  href="/pages/learning-guide.html"
                  class="underline underline-offset-4 hover:text-green-500 transition-colors duration-200"
                >
                  Learning Guide
                </a>
                on Solar PV Systems is designed to provide you with all the
                essential knowledge and insights you need to understand the
                world of solar energy. Whether you're curious about grid-tied,
                off-grid, or hybrid solar systems, our guide will take you
                through the fundamentals and help you make informed decisions
                for your sustainable journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LearningGuide;
