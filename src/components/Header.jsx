import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logoRivero.png";
import logoClaro from "../assets/logo-claro.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/95 shadow" : "bg-white/95 shadow"
      }`}
    >
      <div className="container mx-auto p-2 flex justify-around items-center">
        <a href="/">
          <img src={logo} alt="Logística Rivero" className="h-10" />
        </a>

        {/* Menú de Navegación */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#missionVision"
            className={`text-lg  ${
              scrolled ? "text-black" : "text-black"
            } hover:text-blue-500 transition duration-300`}
          >
            Nuetros Pilares
          </a>
          <a
            href="#about"
            className={`text-lg  ${
              scrolled ? "text-black" : "text-black"
            } hover:text-blue-500 transition duration-300`}
          >
            ¿Quiénes Somos?
          </a>
          <a
            href="#services"
            className={`text-lg  ${
              scrolled ? "text-black" : "text-black"
            } hover:text-blue-500 transition duration-300`}
          >
            Servicios
          </a>
          <a
            href="#customer"
            className={`text-lg  ${
              scrolled ? "text-black" : "text-black"
            } hover:text-blue-500 transition duration-300`}
          >
            Nuestros clientes
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
