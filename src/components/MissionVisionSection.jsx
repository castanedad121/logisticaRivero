import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WavyDiv from "./WavyDiv";
import logoCorto from "../assets/logo_corto.png";

const MissionVisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const pillarsVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Variantes para animar los círculos
  const circleVariants = {
    animate: {
      scale: [1, 1.5, 1], // Escalado en secuencia
      opacity: [1, 0.5, 1], // Cambio de opacidad
      transition: {
        duration: 1, // Duración de cada ciclo
        repeat: Infinity, // Repetir indefinidamente
        ease: "easeInOut", // Suavizado
      },
    },
  };

  return (
    <>
      <WavyDiv />

      <section className="bg-white py-10 px-20 lg:py-40" ref={ref}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
          {/* Imagen de la izquierda */}
          <motion.div
            className="lg:w-1/3 w-full flex justify-center lg:justify-start"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img
              src="https://templates.hibootstrap.com/ezio/default/assets/img/about-img.jpg"
              alt="Operador en almacén"
              className="h-full object-cover rounded-md"
            />
          </motion.div>

          {/* Misión y Visión */}
          <motion.div
            className="lg:w-1/3 w-full bg-gray-100 p-6 rounded-md shadow-md mt-6 lg:mt-0 lg:absolute lg:left-[450px]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <div className="mb-6 lg:mb-10">
              <img src={logoCorto} alt="Logo" className="h-24 mb-8 m-auto" />
              <h2 className="text-blue-900 text-xl font-bold">
                Nuestra Misión:
              </h2>
              <p className="text-gray-600">
                Brindar un servicio integral de liderazgo en la cadena de
                suministro y logística internacional, generando confianza y
                fidelidad en nuestros clientes.
              </p>
            </div>
            <div>
              <h2 className="text-green-700 text-xl font-bold">
                Nuestra Visión:
              </h2>
              <p className="text-gray-600">
                Ser la empresa líder en comercio internacional, reconocida por
                su excelencia en la gestión de la cadena de suministro y
                logística.
              </p>
            </div>
          </motion.div>

          {/* Pilares */}
          <motion.div
            className="lg:w-1/4 w-full bg-blue-900 text-white p-6 rounded-md shadow-md mt-6 lg:mt-0 lg:absolute lg:right-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={pillarsVariants}
          >
            <h2 className="text-[#00934F] text-4xl font-bold mb-1">Nuestros</h2>
            <h2 className="text-white text-6xl font-bold mb-10">Pilares</h2>

            <ul className=" text-lg pl-2">
              <li className="hover:rotate-6">Experiencia y conocimiento.</li>
              <li className="hover:rotate-6">Servicio integral.</li>
              <li className="hover:rotate-6">Confianza y fidelidad.</li>
              <li className="hover:rotate-6">Innovación y tecnología.</li>
              <li className="hover:rotate-6">Excelencia y resultados.</li>
            </ul>
            <div className="m-auto w-1/3 grid grid-cols-6 gap-2 pt-10 pb-4">
              {/* Animación para cada círculo */}
              {[...Array(12)].map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-full size-2 bg-[#00934F]"
                  variants={circleVariants}
                  animate="animate"
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionSection;
