import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Registro from "./components/Registro";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App: React.FC = () => {
  const location = useLocation();
  
  // Ocultar el Navbar en /login y /registro
  const hideNavbar = location.pathname === "/login" || location.pathname === "/registro";

  return (
    <>
      {!hideNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default App;
