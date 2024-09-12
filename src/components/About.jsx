import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageAbout from "../assets/about1.jpg";
import imageAbout2 from "../assets/about2.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo se dispara una vez cuando el elemento es visible
    threshold: 0.2, // Se activa cuando el 20% de la sección es visible
  });

  // Variantes para las animaciones de las imágenes
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Variantes para los divs de colores
  const colorDivVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section ref={ref} className="pt-24 pb-[150px]">
      <div className="container mx-auto text-center animate-fadeIn pt-10 flex">
        <div className="flex w-full flex-col lg:flex-row items-center lg:items-start">
          <div className="xl:w-1/2 p-4 flex flex-col justify-center">
            <motion.h2
              className="text-4xl font-bold xl:mb-16 animate-slideIn text-[#1B2680]"
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : ""}
              transition={{ duration: 1 }}
            >
              ¿Quiénes Somos?
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl mx-auto py-2 xl:py-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : ""}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Somos un equipo de ejecutivos con amplia experiencia en comercio
              internacional, operaciones y administración. Ofrecemos un servicio
              integral de liderazgo en la cadena de suministro y logística
              internacional.
            </motion.p>
            <motion.p
              className="text-lg font-medium max-w-2xl py-6 xl:py-12 xl:px-20 mx-auto text-[#009450]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : ""}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Nuestros sólidos valores nos han permitido generar la confianza y
              fidelidad de nuestros clientes.
            </motion.p>
          </div>

          <div className="relative xl:w-1/2 p-4 h-full flex flex-grow justify-around">
            {/* Div de colores con animaciones */}
            <motion.div
              className="w-1/2 flex gap-10"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={colorDivVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-9 h-full bg-transparent rounded-md"></div>
              <div className="w-9 h-full bg-[#1B2680] rounded-md"></div>
              <div className="w-9 h-full bg-green-600 rounded-md"></div>
            </motion.div>
            <motion.div
              className="w-1/2 flex gap-10 justify-end"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={colorDivVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-9 h-full bg-[#1B2680] rounded-md"></div>
              <div className="w-9 h-full bg-green-600 rounded-md"></div>
              <div className="w-9 h-full bg-transparent rounded-md"></div>
            </motion.div>

            {/* Imágenes con zoom suave en hover */}
            <motion.div
              className="w-full lg:w-[50%] h-auto rounded-lg shadow-lg absolute left-4 top-4 overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8 }}
            >
              <img
                src={imageAbout}
                alt="Equipo de Logística"
                className="w-full transition-transform duration-700 ease-in-out transform hover:scale-110 shadow-lg"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-[50%] h-auto rounded-lg shadow-lg absolute right-4 bottom-4 overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={imageAbout2}
                alt="Equipo de Logística"
                className="w-full transition-transform duration-700 ease-in-out transform hover:scale-110 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
