import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
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
              <Link className="block" to="/">
                <span className="sr-only">Home</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src="/assets/images/logo-name-only.png"
                  alt="logo"
                />
              </Link>
            </div>
            <MobileMenu />

            <div className="hidden lg:flex lg:gap-x-12">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-link">
                  <span className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400">
                    Solar Solutions
                  </span>
                  <div
                    className={`dropdown-menu rounded-b-md ${dropdownMenuClass}`}
                  >
                    <Link
                      className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                      to="/learning"
                    >
                      Learning Guide
                    </Link>
                    <Link
                      className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                      to="/packages"
                    >
                      System Packages
                    </Link>
                    <Link
                      className="dropdown-item px-1 py-1 text-md font-medium transition duration-300 tracking-wider custom-font-2 hover:text-green-400"
                      to="/products"
                    >
                      Products
                    </Link>
                  </div>
                </li>

                <li>
                  <Link
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-1 py-1 text-md font-medium transition duration-300 nav-link tracking-wider custom-font-2 hover:text-green-400"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
