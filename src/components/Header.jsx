import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logoRivero.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [viewMenuMobile, setViewMenuMobile] = useState(false);

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
      <div className="w-full relative  bg-white/95 shadow  p-2 flex justify-between items-center ">
        <a className="m-auto" href="/">
          <img src={logo} alt="Logística Rivero" className="h-8 md:h-10 " />
        </a>

        {/* Menú de Navegación */}
        <nav className="hidden md:w-[50%] md:flex  space-x-8">
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
            Nuestros Servicios
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

        {viewMenuMobile ? (
          <IoClose
            className="size-8  absolute top-3 right-3 md:hidden hover:text-red-500"
            onClick={() => setViewMenuMobile(false)}
          />
        ) : (
          <IoMenu
            className="size-8  absolute top-3 right-3 md:hidden hover:text-green-500"
            onClick={() => setViewMenuMobile(true)}
          />
        )}
      </div>
      {viewMenuMobile && (
        <nav className="flex flex-col  w-full text-center ">
          <a
            href="#missionVision"
            className=" text-black  hover:bg-blue-500  hover:text-white transition duration-300"
            onClick={() => setViewMenuMobile(false)}
          >
            Nuetros Pilares
          </a>
          <a
            href="#about"
            className="text-black  hover:bg-blue-500  hover:text-white transition duration-300"
            onClick={() => setViewMenuMobile(false)}
          >
            ¿Quiénes Somos?
          </a>
          <a
            href="#services"
            className=" text-black  hover:bg-blue-500  hover:text-white transition duration-300"
            onClick={() => setViewMenuMobile(false)}
          >
            Nuestros Servicios
          </a>
          <a
            href="#customer"
            className="  text-black  hover:bg-blue-500  hover:text-white transition duration-300"
            onClick={() => setViewMenuMobile(false)}
          >
            Nuestros clientes
          </a>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
