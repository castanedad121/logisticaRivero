// Hero.js
import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import image from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      className="relative  h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-wrap text-4xl md:text-6xl font-bold"
        >
          Lideramos tu Cadena de Suministro con Excelencia
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl"
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
    </section>
  );
};

export default Hero;
