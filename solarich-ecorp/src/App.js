import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Components
import Loader from "./components/Loader";

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
        </Routes>
      )}
    </div>
  );
}

export default App;
