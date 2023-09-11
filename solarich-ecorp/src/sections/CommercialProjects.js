import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CommercialProjects = () => {
  return (
    <Fragment>
      <section
        className="bg-gray-50 bg-opacity-85 scroll-section"
        id="commercial"
      >
        <div className="container px-4 py-4 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6 lg:pb-20">
          <div className="relative">
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-12">
              <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center sm:text-center">
                <h2 className="mb-8 font-sans text-2xl font-bold tracking-normal text-green-900 sm:text-5xl sm:leading-none custom-font-2">
                  Our Featured Projects with
                  <br className="hidden md:block" />
                  <span className="relative inline-block px-3 py-2 mt-2">
                    <div className="absolute inset-0 transform -skew-x-12 custom-bg-dali"></div>
                    <span className="relative text-gray-50">
                      DALI Everyday Grocery
                    </span>
                  </span>
                </h2>
                <div className="flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 mb-2 mx-auto transition duration-300 hover:scale-110">
                  <img
                    className="w-full"
                    src="/assets/images/dali-logo-removebg-preview.png"
                    alt="Dali Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/* Content Block 1 */}
            <div className="overflow-hidden transition-shadow duration-300">
              <div className="group block overflow-hidden rounded-t-lg">
                <div className="relative h-[250px]">
                  <img
                    src="/assets/images/content-block-1_cleanup.jpg"
                    alt="Content block"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="/assets/images/content-block-1-1_cleanup.jpg"
                    alt="Content block"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="p-5 border-2 border-t-0 rounded-b-lg">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-gray-800">
                    on-grid
                  </span>
                  <span className="text-gray-600">— 27 Jun 2023</span>
                </p>
                <Link
                  to="https://web.facebook.com/solarichecorp/posts/pfbid02QzxhzZmVL2iWoWTwdyB8TJRgEKqGezhb4htnbod411nJc86BHQDv4KHFwDhcFtRvl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-3 text-2xl font-bold leading-8 transition-colors duration-200 text-green-800 hover:text-green-500 underline underline-offset-4 custom-font-2 tracking-wide"
                >
                  DALI Wales, Parañaque
                </Link>
                <p className="mb-2 text-gray-700 line-clamp-3 custom-font-2 tracking-wide font-medium read-more-text">
                  Solarich ECorp is proud to provide the best solar energy
                  solutions, and we are delighted to announce the completion of
                  another successful commercial PV installation. This time, we
                  had the privilege to work with DALI Everyday Grocery in Wales,
                  Parañaque, where we installed a 15kW On-Grid System. We extend
                  our heartfelt gratitude to DALI for choosing us as their
                  trusted solar energy partner. Our commitment to delivering
                  exceptional customer service remains unwavering, and we look
                  forward to serving DALI and all our valued customers with the
                  highest level of excellence. Thank you for your trust in
                  Solarich ECorp!
                </p>
                <span
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-green-500 cursor-pointer read-more-link"
                  onClick="toggleReadMore(event)"
                >
                  Read more
                </span>
              </div>
            </div>

            {/* Content Block 2 */}
            <div className="overflow-hidden transition-shadow duration-300">
              <div className="group block overflow-hidden rounded-t-lg">
                <div className="relative h-[250px]">
                  <img
                    src="/assets/images/content-block-2_cleanup.jpg"
                    alt="Content block"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="/assets/images/content-block-2-1_cleanup.jpg"
                    alt="Content block"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="p-5 border-2 border-t-0 rounded-b-lg">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-gray-800">
                    on-grid
                  </span>
                  <span className="text-gray-600">— 14 Jul 2023</span>
                </p>
                <Link
                  to="https://web.facebook.com/solarichecorp/posts/pfbid0rPYwCZWiu21jwuPWkiF8fJydvoEHYPNj3cughHNFG1gTTsFfcXgEdGfVkd5DLtrol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-3 text-2xl font-bold leading-8 transition-colors duration-200 text-green-800 hover:text-green-500 underline underline-offset-4 custom-font-2 tracking-wide"
                >
                  DALI JFelipe Cavite City
                </Link>
                <p className="mb-2 text-gray-700 line-clamp-3 custom-font-2 tracking-wide font-medium read-more-text">
                  We warmly invite you to witness the remarkable newly installed
                  solar system at DALI Everyday Grocery in JFelipe Cavite City.
                  This impressive installation features a 15kW On-Grid System,
                  harnessing the power of the sun to meet their energy needs. We
                  extend our heartfelt gratitude to our valued customer, DALI
                  Everyday Grocery at JFelipe Cavite City, for entrusting us
                  with their solar project. Rest assured, we are fully committed
                  to providing you with the best customer service possible as we
                  continue to support your business. Thank you for placing your
                  trust in Solarich ECorp; we eagerly anticipate a continued
                  partnership in promoting sustainable energy solutions.
                </p>
                <span
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-green-500 cursor-pointer read-more-link"
                  onClick="toggleReadMore(event)"
                >
                  Read more
                </span>
              </div>
            </div>

            {/* Content Block 3 */}
            <div className="overflow-hidden transition-shadow duration-300">
              <div className="group block overflow-hidden rounded-t-lg">
                <div className="relative h-[250px]">
                  <img
                    src="/assets/images/content-block-3_cleanup.jpg"
                    alt="Content block"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="/assets/images/content-block-3-1_cleanup.jpg"
                    alt="Content block"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="p-5 border-2 border-t-0 rounded-b-lg">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-gray-800">
                    maintenance
                  </span>
                  <span className="text-gray-600">— 19 Jul 2023</span>
                </p>
                <Link
                  to="https://web.facebook.com/solarichecorp/posts/pfbid0rPYwCZWiu21jwuPWkiF8fJydvoEHYPNj3cughHNFG1gTTsFfcXgEdGfVkd5DLtrol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-3 text-2xl font-bold leading-8 transition-colors duration-200 text-green-800 hover:text-green-500 underline underline-offset-4 custom-font-2 tracking-wide"
                >
                  DALI Cabezas, Trece, Cavite
                </Link>
                <p className="mb-2 text-gray-700 line-clamp-3 custom-font-2 tracking-wide font-medium read-more-text">
                  Introducing our preventive maintenance service for solar
                  energy systems in DALI Cabezas, Trece, Cavite, brought to you
                  by Solarich Enterprises Corp. We are committed to ensuring the
                  optimal performance and longevity of your solar power system.
                  Our expert team will conduct thorough inspections, cleanings,
                  and maintenance to proactively identify and address any
                  potential issues. By entrusting your solar energy system to
                  us, you can have peace of mind, knowing that it will continue
                  to operate at its best, providing you with sustainable and
                  cost-effective energy. Experience the reliability and
                  effectiveness of Solarich Enterprises Corp's preventive
                  maintenance service for your solar energy system in DALI
                  Cabezas, Trece, Cavite.
                </p>
                <span
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:text-green-500 cursor-pointer read-more-link"
                  onClick="toggleReadMore(event)"
                >
                  Read more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CommercialProjects;
