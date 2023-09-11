import React, { Fragment } from "react";

const BrandAssociations = () => {
  return (
    <Fragment>
      <section className="bg-gray-50 bg-opacity-85">
        <div className="max-w-screen-xl mx-auto py-4">
          <div className="px-4 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="brand-logo flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-36"
                src="/assets/images/deye-removebg-preview.png"
                alt="Deye"
              />
            </div>

            <div className="brand-logo flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-16"
                src="/assets/images/jinko-logo-removebg-preview.png"
                alt="Jinko"
              />
            </div>

            <div className="brand-logo flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img
                className="h-48"
                src="/assets/images/sunways.png"
                alt="Sunways"
              />
            </div>

            <div className="brand-logo flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <img
                className="h-6"
                src="/assets/images/meritsun-removebg-preview.png"
                alt="Meritsun"
              />
            </div>

            <div className="brand-logo flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <img
                className="h-20"
                src="/assets/images/genixgreen.png"
                alt="Genixgreen"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BrandAssociations;
