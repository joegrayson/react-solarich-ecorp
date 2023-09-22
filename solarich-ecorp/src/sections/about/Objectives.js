import React, { Fragment } from "react";

const Objectives = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85 ">
        <div className="container px-8 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
          <div className="grid max-w-screen-xl gap-8 sm:gap-x-20 lg:grid-cols-2 sm:mx-auto mb-12">
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-80 col-span-2 rounded shadow-lg"
                src="/assets/images/about-image.JPG"
                alt=""
              />
              <img
                className="object-cover w-full h-72 rounded shadow-lg"
                src="/assets/images/about-the-company-1.jpg"
                alt=""
              />
              <img
                className="object-cover w-full h-72 rounded shadow-lg"
                src="/assets/images/about-image-1.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center custom-font-2 tracking-wide">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400 custom-font-2">
                  Our Objectives
                </p>
              </div>
              <div className="pb-4 mb-4 border-b">
                <h6 className="mb-4 text-xl font-bold leading-5">
                  Solarich Enterprises Corporation
                </h6>
                <p className="text-lg font-medium text-gray-700">
                  At Solarich, we recognize the importance of reducing our
                  carbon footprint and helping clients achieve a greener way of
                  living. With this ethos in mind we strive to deliver a
                  comprehensive range of solar solutions that cater to the
                  unique needs and requirements of each client.
                </p>
              </div>
              <div className="pb-4 mb-4 border-b">
                <p className="text-lg font-medium text-gray-700">
                  We innovate and improve solutions for our clients by applying
                  our high expertise in advanced materials and technology.
                </p>
              </div>
              <div className="pb-4 mb-4 border-b">
                <p className="text-lg font-medium text-gray-700">
                  Our team of skilled professionals is dedicated to delivering
                  bespoke solar installations that exceed client expectations.
                  We understand that every project is unique and require a
                  tailored approach, which is why we work closely with clients
                  to understand their specific needs and provide customized
                  solutions.
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Whether you're looking for top-notch solar services for your
                  commercial or residential property, Solarich Enterprises Corp
                  has got you covered. Our teams of experts is committed to
                  delivering exceptional service, quality solutions, and
                  unbeatable value for money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Objectives;
