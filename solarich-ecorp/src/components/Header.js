import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { Route, Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomepage = location.pathname === "/";
  const dropdownMenuClass = isHomepage && scrolled ? "header-scrolled" : "";
  const headerClass = isHomepage
    ? scrolled
      ? "header-scrolled"
      : "header-transparent"
    : "shadow-lg";

  return (
    <Fragment>
      <div
        className={`px-6 bg-gray-50 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          isHomepage
            ? scrolled
              ? "header-scrolled"
              : "header-transparent"
            : dropdownMenuClass
        } ${headerClass}`}
        id="main-header"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex h-8 sm:h-12 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a
                className="block"
                href="https://solarichenterprises.netlify.app/"
              >
                <span className="sr-only">Home</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src="/assets/images/logo-name-only.png"
                  alt="logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden px-6">
              <button
                id="menu-toggle"
                type="button"
                className="-m-3.5 inline-flex items-center justify-center rounded-md p-1.5 text-green-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    href="/#residential"
                  >
                    Residential
                  </a>
                </li>

                <li>
                  <a
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    href="/#commercial"
                  >
                    Commercial
                  </a>
                </li>

                <li>
                  <a
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    href="/#solar-training"
                  >
                    Solar PV Training
                  </a>
                </li>

                <li className="nav-link">
                  <span className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400">
                    Solar Solutions
                  </span>
                  <div
                    className={`dropdown-menu rounded-b-md ${dropdownMenuClass}`}
                  >
                    <a
                      className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                      href="/learning"
                    >
                      Learning Guide
                    </a>
                    <a
                      className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                      href="/pages/system-packages.html"
                    >
                      System Packages
                    </a>
                    <a
                      className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                      href="/pages/products.html"
                    >
                      Products
                    </a>
                  </div>
                </li>

                <li>
                  <a
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    href="/#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    href="/#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden" role="dialog" aria-modal="true" id="menu">
              <div className="fixed inset-0 z-10">
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex lg:hidden px-8 items-center justify-between">
                    <a href="!#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Home</span>
                    </a>
                    <button
                      type="button"
                      id="close-menu"
                      className="inline-flex items-center justify-center rounded-md -ml-6 -mt-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        <a
                          href="https://solarichenterprises.netlify.app/"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Home
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#residential"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Residential
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#commercial"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Commercial
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#solar-training"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Solar PV Training
                        </a>
                        <a
                          href="/pages/learning-guide.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Learning Guide
                        </a>
                        <a
                          href="/pages/system-packages.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          System Packages
                        </a>
                        <a
                          href="/pages/products.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Products
                        </a>
                        <a
                          href="/pages/about.html"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          About
                        </a>
                        <a
                          href="https://solarichenterprises.netlify.app/#contact"
                          className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
