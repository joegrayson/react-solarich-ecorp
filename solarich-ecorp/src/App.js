import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Components
import Loader from "./components/Loader";
import Learning from "./pages/Learning";
import Packages from "./pages/Packages";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        // Loading screen component
        <Loader />
      ) : (
        // Render your routes when loading is complete
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
