import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Sesuaikan dengan path yang benar
import Recommendation from "./pages/Recommendation"; // Sesuaikan dengan path yang benar
import SkinType from "./pages/SkinType"; // Sesuaikan dengan path yang benar

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/skintype" element={<SkinType />} />
      </Routes>
    </>
  );
}

export default App;
