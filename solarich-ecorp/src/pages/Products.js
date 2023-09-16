import React, { Fragment } from "react";

const Products = () => {
  return (
    <Fragment>
      <section className="bg-gray-50">
        <div className="container mt-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
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
                <span className="relative">
                  Solar PV
                  <br />
                  Products & Accessories
                </span>
              </span>
            </h2>
          </div>
          <div className="max-w-screen-md text-center sm:mx-auto pb-20">
            <p className="font-semibold text-gray-700 text-xl sm:px-4 custom-font-2">
              Browse our top-quality solar products to cater to your clean
              energy needs. From high-performance solar panels to reliable
              inverters, our products are designed to harness the power of the
              sun efficiently.
            </p>
          </div>

          {/* New Products Collection Grid */}
          <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            {/* First Row */}
            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/jinko-panel.png"
                  alt="jinko-panel"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  Jinko panel
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/sofar-inverter.png"
                  alt="sofar-inverter"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  sofar inverter
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-4"
                  src="/assets/images/sunways-inverter.png"
                  alt="sunways-inverter"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  sunways inverter
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/deye-inverter.png"
                  alt="deye-inverter"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  deye inverter
                </p>
              </div>
            </div>

            {/* Second Row */}

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/meritsun-battery.png"
                  alt="meritsun-battery"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  meritsun battery
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/genixgreen-battery.png"
                  alt="genixgreen-battery"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  genixgreen battery
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/end-clamp.png"
                  alt="end-clamp"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  end clamp
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/mid-clamp.png"
                  alt="mid-clamp"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  mid clamp
                </p>
              </div>
            </div>

            {/* Third Row */}

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/l-foot.png"
                  alt="l-foot"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  l-foot
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/dc-breaker.png"
                  alt="dc-breaker"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  dc breaker
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-4"
                  src="/assets/images/dc-spd.png"
                  alt="dc-spd"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  dc spd
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-4"
                  src="/assets/images/ac-breaker.png"
                  alt="ac-breaker"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  ac breaker
                </p>
              </div>
            </div>

            {/* Fourth Row */}

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/ac-spd.png"
                  alt="ac-spd"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  ac spd
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/royu-circuit-breaker.png"
                  alt="royu-circuit-breaker"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  royu circuit breaker
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/mc4-connector.png"
                  alt="mc4-connector"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  mc4 connector
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/pv-wire.png"
                  alt="pv-wire"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  pv wire
                </p>
              </div>
            </div>

            {/* Fifth Row */}

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg p-2"
                  src="/assets/images/cable-tray.png"
                  alt="cable-tray"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  cable tray
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/railing.png"
                  alt="railing"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  railing
                </p>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 lg:pb-64 transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl bg-green-200">
                <img
                  className="absolute object-contain w-full h-full rounded-lg"
                  src="/assets/images/railing-connector.png"
                  alt="railing-connector"
                />
              </div>
              <div className="flex flex-col text-center">
                <p className="text-lg font-bold custom-font-2 tracking-wide uppercase">
                  railing connector
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Products;
