import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.css";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Components
import Loader from "./components/Loader";
import Learning from "./pages/Learning";
import Packages from "./pages/Packages";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <HelmetProvider>
      <div>
        {isLoading ? (
          // Loading screen component
          <Loader />
        ) : (
          // Render your routes when loading is complete
          <div>
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Set dynamic meta description for the home page */}
                    <Helmet>
                      <meta
                        name="description"
                        content="Solarich Enterprises - Your Trusted Solar PV Systems Provider. Explore top-quality products & packages for eco-friendly solar solutions. Contact us today!"
                      />
                    </Helmet>
                    <Home />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    {/* Set dynamic meta description for the about page */}
                    <Helmet>
                      <meta
                        name="description"
                        content="Solarich Enterprises - Your premier solar installation provider for residential, commercial, and industrial clients. Quality solutions for clean energy."
                      />
                    </Helmet>
                    <About />
                  </>
                }
              />
              <Route
                path="/learning"
                element={
                  <>
                    {/* Set dynamic meta description for the learning page */}
                    <Helmet>
                      <meta
                        name="description"
                        content="Explore the world of solar energy with Solarich's Learning Guide on Solar PV Systems. Discover grid-tied, off-grid, and hybrid systems for a greener future!"
                      />
                    </Helmet>
                    <Learning />
                  </>
                }
              />
              <Route
                path="/packages"
                element={
                  <>
                    {/* Set dynamic meta description for the packages page */}
                    <Helmet>
                      <meta
                        name="description"
                        content="Explore System Packages at Solarich Corp for cost-effective solar solutions. Choose from on-grid & hybrid systems for residential & commercial needs. Embrace clean energy today!"
                      />
                    </Helmet>
                    <Packages />
                  </>
                }
              />
              <Route
                path="/products"
                element={
                  <>
                    {/* Set dynamic meta description for the products page */}
                    <Helmet>
                      <meta
                        name="description"
                        content="Discover top-notch solar products at Solarich Enterprises. Choose from a wide range of quality panels and inverters for your clean energy needs."
                      />
                    </Helmet>
                    <Products />
                  </>
                }
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
