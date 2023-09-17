import React, { Fragment } from "react";
import Map from "../components/Map";
import ContactSection from "../sections/homepage/ContactSection";

const Contact = () => {
  return (
    <Fragment>
      <section className="bg-white ">
        <div className="mt-10 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-28">
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
                <span className="relative">Get In Touch With Us!</span>
              </span>
            </h2>
          </div>

          <div className="max-w-screen-md text-center sm:text-center sm:mx-auto pb-10 sm:pb-20">
            <p className="font-semibold text-gray-700 text-xl sm:px-4 custom-font-2">
              Ask us everything and we would love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
      <section>
        <div className="mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <Map />
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
