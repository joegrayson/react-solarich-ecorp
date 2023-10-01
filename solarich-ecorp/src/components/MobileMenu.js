import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div>
      <div className="flex lg:hidden px-6">
        <button
          id="menu-toggle"
          type="button"
          className="-m-3.5 inline-flex items-center justify-center rounded-md p-1.5 text-green-500"
          onClick={() => setIsMenuOpen(true)}
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

      {isMenuOpen && (
        <div role="dialog" aria-modal="true" id="menu">
          <div className="fixed inset-0 z-10">
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex lg:hidden px-8 items-center justify-between">
                <a href="#!" className="-m-1.5 p-1.5">
                  <span className="sr-only">Home</span>
                </a>
                <button
                  type="button"
                  id="close-menu"
                  className="inline-flex items-center justify-center rounded-md -ml-6 -mt-2.5 text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
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
                    <Link
                      to="/"
                      className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>

                    <Link
                      to="/learning"
                      className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Learning Guide
                    </Link>
                    <Link
                      to="/packages"
                      className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      System Packages
                    </Link>
                    <Link
                      to="/products"
                      className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Products
                    </Link>
                    <Link
                      to="/about"
                      className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="-mx-3 text-sm font-semibold leading-6 text-center text-gray-900 block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
