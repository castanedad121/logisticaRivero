import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import image from "../assets/hero-image.jpg";
import image2 from "../assets/hero-image2.jpg";
import image3 from "../assets/Banner3.jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [image, image2, image3];

  return (
    <section className="relative h-[420px] md:h-screen flex items-center justify-center  overflow-hidden   bg-gradient-to-br from-indigo-500 to-green-600">
      {/* Imágenes */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-[420px] md:h-auto transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Superposición de color */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Contenido principal */}
      {currentIndex === 0 && (
        <div className=" relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-wrap text-3xl px-10 md:text-6xl font-bold drop-shadow-sm mt-8 md:mt-0"
          >
            Somos tu mejor aliado
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 px-16 mt:px-0 md:mt-4 text-sm md:text-2xl"
          >
            Confianza, fidelidad y resultados en cada envío
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8"
          >
            <CTAButton text="Solicita tu Presupuesto" />
          </motion.div>
        </div>
      )}
      {currentIndex === 1 && (
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-wrap text-3xl px-10 md:text-6xl font-bold drop-shadow-sm mt-8 md:mt-0"
          >
            Servicio personalizado a tu medida
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 px-16 mt:px-0 md:mt-4 text-sm md:text-2xl"
          >
            Confianza, fidelidad y resultados en cada envío
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8"
          >
            <CTAButton text="Solicita tu Presupuesto" />
          </motion.div>
        </div>
      )}
      {currentIndex === 2 && (
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-wrap text-3xl px-10 md:text-6xl font-bold drop-shadow-sm mt-8 md:mt-0"
          >
            Seguimiento de tus envios las 24 horas
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 px-16 mt:px-0 md:mt-4 text-sm md:text-2xl"
          >
            Confianza, fidelidad y resultados en cada envío
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8"
          >
            <CTAButton text="Solicita tu Presupuesto" />
          </motion.div>
        </div>
      )}

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute z-20 top-1/2 left-0 md:left-4 transform -translate-y-1/2  text-white/60 hover:text-white/95 p-1 md:p-2 rounded-full  focus:outline-none"
      >
        <IoIosArrowDropleft className="size-8 md:size-12 " />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute z-20 top-1/2 right-0 md:right-4 transform -translate-y-1/2  text-white/60 hover:text-white/95 p-1 md:p-2 rounded-full focus:outline-none"
      >
        <IoIosArrowDropright className="size-8 md:size-12 " />
      </button>
    </section>
  );
};

export default Hero;
