import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import image from "../assets/hero-image.jpg";
import image2 from "../assets/hero-image2.jpg";
import image3 from "../assets/Banner3.jpg";

const Hero = () => {
  const [delayOrder, setDelayOrder] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Genera un array con retrasos aleatorios para cada cuadro
    const order = Array.from({ length: 100 }, () => Math.random() * 2);
    setDelayOrder(order);
  }, []);

  useEffect(() => {
    // Configura un temporizador para cambiar el índice de imagen cada 6 segundos
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 8000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const images = [image, image2, image3];

  return (
    <section className="relative h-80 md:h-screen flex items-center justify-center  overflow-hidden   bg-gradient-to-br from-indigo-500 to-green-600">
      {delayOrder.length > 0 && ( // Solo renderiza cuando delayOrder esté listo
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 w-full mt-10">
          {currentIndex === 0 &&
            [...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${images[0]})`,
                  backgroundPosition: `${(i % 10) * 10}% ${
                    Math.floor(i / 10) * 10
                  }%`,
                  backgroundSize: "1100% 1100%", // Ajustar el tamaño para una vista uniforme
                }}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: delayOrder[i], duration: 0.6 }}
              />
            ))}
          {currentIndex === 1 &&
            [...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${images[1]})`,
                  backgroundPosition: `${(i % 10) * 10}% ${
                    Math.floor(i / 10) * 10
                  }%`,
                  backgroundSize: "1100% 1100%", // Ajustar el tamaño para una vista uniforme
                }}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: delayOrder[i], duration: 0.6 }}
              />
            ))}
          {currentIndex === 2 &&
            [...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${images[2]})`,
                  backgroundPosition: `${(i % 10) * 10}% ${
                    Math.floor(i / 10) * 10
                  }%`,
                  backgroundSize: "1100% 1100%", // Ajustar el tamaño para una vista uniforme
                }}
                variants={blockVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: delayOrder[i], duration: 0.6 }}
              />
            ))}
        </div>
      )}
      {/* Fondo dividido en cuadros */}

      {/* Superposición de color */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Contenido principal */}
      {currentIndex === 0 && (
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-wrap text-4xl md:text-6xl font-bold drop-shadow-sm mt-14 md:mt-0"
          >
            Somos tu mejor aliado
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-sm md:text-2xl"
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
            className="text-wrap text-4xl md:text-6xl font-bold drop-shadow-sm mt-14 md:mt-0"
          >
            Servicio personalizado a tu medida
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-sm md:text-2xl"
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
            className="text-wrap text-4xl md:text-6xl font-bold drop-shadow-sm mt-14 md:mt-0"
          >
            Seguimiento de tus envios las 24 horas
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-sm md:text-2xl"
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
    </section>
  );
};

export default Hero;
