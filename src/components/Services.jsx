import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiShipLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuFiles } from "react-icons/lu";
import { GrBarChart } from "react-icons/gr";
import imageService4 from "../assets/agenciamientoaduana.png";
const services = [
  {
    title: "Carga Marítima Internacional",
    description: "LCL, FCL, REEFER, Peligrosa - IMO",
    image:
      "https://www.ulima.edu.pe/sites/default/files/ublog/img/transporte-maritimo_600x300.jpg",
    logo: <RiShipLine className="size-8 m-auto " />,
  },
  {
    title: "Carga Aérea Internacional",
    description: "Carga Aérea Consolidada, Back to Back",
    image:
      "https://www.southexpress.pe/wp-content/uploads/2023/10/transporte-de-carga-aerea-internacional-South-Express.png",
    logo: <GiAirplaneDeparture className="size-8 m-auto " />,
  },
  {
    title: "Carga Terrestre Nacional e Internacional",
    description:
      "Contenedores, cargas sueltas, camión furgón, transporte internacional",
    image:
      "https://www.southexpress.pe/wp-content/uploads/2022/10/TERRESTRE-1.jpg",
    logo: <LiaShippingFastSolid className="size-8 m-auto" />,
  },
  {
    title: "Agenciamiento de Aduanas",
    description: "Trámites aduaneros rápidos y seguros",
    image: imageService4,
    logo: <LuFiles className="size-8 m-auto" />,
  },
  {
    title: "Consultoría Logística Integral",
    description:
      "Análisis de costos, optimización de márgenes y precios competitivos",
    image:
      "https://ilen.edu.pe/wp-content/uploads/2021/11/Responsable-de-logistica-1200x600-1.jpg",
    logo: <GrBarChart className="size-8 m-auto" />,
  },
];

// Variantes de animación para cada servicio
const serviceVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Services = () => {
  const [serviceActive, setServiceActive] = useState({
    service0: true,
    service1: false,
    service2: false,
    service3: false,
    service4: false,
  });

  const elementRefs = {
    div1: useRef(null),
    div2: useRef(null),
    div3: useRef(null),
    div4: useRef(null),
    div5: useRef(null),
  };

  // Efecto para hacer scroll cuando se activa un servicio
  useEffect(() => {
    const activeServiceIndex = Object.keys(serviceActive).find(
      (key) => serviceActive[key]
    );
    if (activeServiceIndex) {
      const refKey = `div${activeServiceIndex.slice(-1)}`;
      const ref = elementRefs[refKey];
      if (ref && ref.current) {
        // Aumentar el retraso a 300 ms
        setTimeout(() => {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      }
    }
  }, [serviceActive]);

  const handleScroll = (id) => {
    setServiceActive((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === id;
        return acc;
      }, {}),
    }));
  };
  return (
    <section className="py-10 md:px-10  md:py-[150px] flex ">
      <div className="hidden md:block w-[25%] container mx-auto text-center">
        <div className="flex flex-col  mb-8 justify-start w-full content-start text-left px-4">
          <h2 className="text-3xl font-bold text-[#1B2680] drop-shadow-md">
            Nuestros
          </h2>
          <h2 className="text-5xl font-bold text-green-600 drop-shadow-md">
            Servicios
          </h2>
        </div>
        <div className="flex flex-col w-full text-white gap-2">
          <motion.div
            key={0}
            className={
              serviceActive.service0
                ? "relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center "
                : "relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 * 0.2 }}
            onClick={() =>
              setServiceActive({
                service0: true,
                service1: false,
                service2: false,
                service3: false,
                service4: false,
              })
            }
          >
            <div className="w-[10%] ">{services[0].logo}</div>
            <div className="w-[90%] flex justify-center content-center">
              <h2 className="">{services[0].title}</h2>
            </div>
          </motion.div>
          <motion.div
            key={1}
            className={
              serviceActive.service1
                ? "relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                : "relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 * 0.2 }}
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: true,
                service2: false,
                service3: false,
                service4: false,
              })
            }
          >
            <div className="w-[10%] ">{services[1].logo}</div>
            <div className="w-[90%] flex justify-center content-center">
              <h2 className="">{services[1].title}</h2>
            </div>
          </motion.div>
          <motion.div
            key={2}
            className={
              serviceActive.service2
                ? "relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                : "relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2 * 0.2 }}
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: true,
                service3: false,
                service4: false,
              })
            }
          >
            <div className="w-[10%] ">{services[2].logo}</div>
            <div className="w-[90%] flex justify-center content-center">
              <h2 className="">{services[2].title}</h2>
            </div>
          </motion.div>
          <motion.div
            key={3}
            className={
              serviceActive.service3
                ? "relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                : "relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 3 * 0.2 }}
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: false,
                service3: true,
                service4: false,
              })
            }
          >
            <div className="w-[10%] ">{services[3].logo}</div>
            <div className="w-[90%] flex justify-center content-center">
              <h2 className="">{services[3].title}</h2>
            </div>
          </motion.div>
          <motion.div
            key={4}
            className={
              serviceActive.service4
                ? "relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                : "relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
            }
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 4 * 0.2 }}
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: false,
                service3: false,
                service4: true,
              })
            }
          >
            <div className="w-[10%] ">{services[4].logo}</div>
            <div className="w-[90%] flex justify-center content-center">
              <h2 className="">{services[4].title}</h2>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hidden container mx-auto text-center w-2/3 md:flex  flex-col lg:flex-nowrap flex-wrap gap-2 mt-10 overflow-hidden rounded-xl shadow-xl bg-gray-100/5">
        <AnimatePresence mode="wait">
          {serviceActive.service0 && (
            <motion.div
              key={0}
              className="w-full flex"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                <img
                  className="rounded-br-[100px]"
                  src={services[0].image}
                  alt=""
                />
              </div>
              <div className="w-full mx-4 my-2 text-start">
                <h2 className="font-bold text-green-600 ">
                  ¿Necesitas transportar tu carga por mar?
                </h2>
                <p className="font-light">
                  Ofrecemos fletes marítimos para todo tipo de carga,
                  incluyendo:
                </p>
                <ul className="">
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Carga LCL
                    (Consolidada)
                  </li>
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Carga FCL
                    (Full Contenedores)
                  </li>
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Carga
                    REEFER
                  </li>
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Carga
                    Peligrosa - IMO
                  </li>
                </ul>
                <p className="font-light">
                  Contamos con una amplia experiencia en el transporte marítimo
                  y podemos ofrecerte un servicio personalizado y de alta
                  calidad.
                </p>
              </div>
            </motion.div>
          )}
          {serviceActive.service1 && (
            <motion.div
              key={1}
              className="w-full flex"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                <img
                  className="rounded-br-[100px]"
                  src={services[1].image}
                  alt=""
                />
              </div>
              <div className="w-full mx-4 my-2 text-start">
                <h2 className="font-bold text-[#1B2680]">
                  ¿Necesitas enviar tu mercancía de forma rápida y económica? La
                  carga aérea consolidada es la mejor
                </h2>
                <p className="font-light">
                  La carga aérea consolidada es la mejor opción para envíos
                  urgentes.
                </p>

                <h2 className="text-[#1B2680] font-semibold ">
                  ◦ Carga Aérea Consolidada
                </h2>
                <p className="font-light ml-2">
                  Es una excelente alternativa para optimizar los costos en la
                  gestión logística.
                </p>

                <h2 className="text-[#1B2680] font-semibold">
                  ◦ Carga Aérea Back to Back
                </h2>
                <p className="font-light ml-2">
                  Garantizamos entregas rápidas y eficientes mediante vuelos
                  directos y conexiones, disponibles tanto diaria como
                  interdiariamente.
                </p>
              </div>
            </motion.div>
          )}
          {serviceActive.service2 && (
            <motion.div
              key={2}
              className="w-full flex"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                <img
                  className="rounded-br-[100px]"
                  src={services[2].image}
                  alt=""
                />
              </div>
              <div className="w-full mx-4 my-2 text-start">
                <h2 className="font-bold text-green-600 ">
                  ¿Tiene alguna necesidad de transporte de carga terrestre
                  nacional o internacional en este momento?
                </h2>
                <p className="font-light">
                  Ofrecemos una amplia gama de servicios de transporte de carga
                  terrestre nacional e internacional, incluyendo:
                </p>
                <ul className="">
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Transporte
                    de contenedores (1x20st, 1x40HQ).
                  </li>
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Transporte
                    para cargas sueltas.
                  </li>
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Transporte
                    en camión furgón.
                  </li>
                  <li>
                    <span className="text-[#1B2680] text-xl">◦</span> Transporte
                    internacional a fronteras.
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
          {serviceActive.service3 && (
            <motion.div
              key={3}
              className="w-full flex"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                <img
                  className="rounded-br-[100px]"
                  src={services[3].image}
                  alt=""
                />
              </div>
              <div className="w-full mx-4 my-2 text-start">
                <h2 className="font-bold text-[#1B2680] ">
                  ¿Está cansado de perder tiempo y dinero en los trámites
                  aduaneros?
                </h2>
                <p className="font-light my-5 mx-2">
                  ¡Confíe para que su mercancía llegue a su destino de forma
                  rápida, segura y sin complicaciones!
                </p>

                <p className="mx-2">
                  El servicio de aduanas comprende desde la llegada de la
                  mercancía al Perú hasta la posterior entrega en sus
                  instalaciones.
                </p>
              </div>
            </motion.div>
          )}
          {serviceActive.service4 && (
            <motion.div
              key={4}
              className="w-full flex"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                <img
                  className="rounded-br-[100px]"
                  src={services[4].image}
                  alt=""
                />
              </div>
              <div className="w-full mx-4 my-2 text-start">
                <h2 className="font-bold text-green-600 ">
                  Nuestra consultoría integral te ayuda a:
                </h2>
                <p className="font-light">
                  Ofrecemos fletes marítimos para todo tipo de carga,
                  incluyendo:
                </p>
                <ul className="font-light mx-2 list-disc leading-5">
                  <li className="mx-3">
                    <span className="font-semibold">
                      Establecer márgenes de utilidad óptimos
                    </span>{" "}
                    que maximicen tus ganancias.
                  </li>
                  <li className="mx-3">
                    <span className="font-semibold">
                      Determinar con precisión los costos de logística integral,
                    </span>{" "}
                    incluyendo transporte, almacenamiento, inventario y gestión
                    de pedidos.
                  </li>
                  <li className="mx-3">
                    <span className="font-semibold">
                      Establecer precios de productos competitivos
                    </span>{" "}
                    que se ajusten a las condiciones del mercado y te permitan
                    aumentar tus ventas.
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-full flex gap-2 justify-center items-center mt-4">
          <div
            className={
              serviceActive.service0
                ? "size-4 bg-green-600/90 shadow-lg rounded-full  flex justify-between "
                : "size-3 bg-[#1B2680]/90 shadow-lg rounded-full flex  justify-between  hover:bg-green-600/90 hover:cursor-pointer"
            }
            onClick={() =>
              setServiceActive({
                service0: true,
                service1: false,
                service2: false,
                service3: false,
                service4: false,
              })
            }
          ></div>
          <div
            className={
              serviceActive.service1
                ? "size-4 bg-green-600/90 shadow-lg rounded-full  flex justify-between "
                : "size-3 bg-[#1B2680]/90 shadow-lg rounded-full flex  justify-between  hover:bg-green-600/90 hover:cursor-pointer"
            }
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: true,
                service2: false,
                service3: false,
                service4: false,
              })
            }
          ></div>
          <div
            className={
              serviceActive.service2
                ? "size-4 bg-green-600/90 shadow-lg rounded-full  flex justify-between "
                : "size-3 bg-[#1B2680]/90 shadow-lg rounded-full flex  justify-between  hover:bg-green-600/90 hover:cursor-pointer"
            }
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: true,
                service3: false,
                service4: false,
              })
            }
          ></div>
          <div
            className={
              serviceActive.service3
                ? "size-4 bg-green-600/90 shadow-lg rounded-full  flex justify-between "
                : "size-3 bg-[#1B2680]/90 shadow-lg rounded-full flex  justify-between  hover:bg-green-600/90 hover:cursor-pointer"
            }
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: false,
                service3: true,
                service4: false,
              })
            }
          ></div>
          <div
            className={
              serviceActive.service4
                ? "size-4 bg-green-600/90 shadow-lg rounded-full  flex justify-between "
                : "size-3 bg-[#1B2680]/90 shadow-lg rounded-full flex  justify-between  hover:bg-green-600/90 hover:cursor-pointer"
            }
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: false,
                service3: false,
                service4: true,
              })
            }
          ></div>
        </div>
      </div>

      <div
        className={
          !serviceActive.service0 &&
          !serviceActive.service1 &&
          !serviceActive.service2 &&
          !serviceActive.service3 &&
          !serviceActive.service4
            ? "md:hidden container pb-28 mx-auto text-center w-full"
            : "md:hidden container py-4 mx-auto text-center w-full"
        }
      >
        <div className="flex flex-col  mb-4 justify-start w-full content-center  px-2">
          <h2 className="text-2xl font-bold text-[#1B2680] drop-shadow-md">
            Nuestros
          </h2>
          <h2 className="text-4xl font-bold text-green-600 drop-shadow-md">
            Servicios
          </h2>
        </div>
        <div className="flex flex-col w-full  gap-2">
          <button
            onClick={() =>
              setServiceActive({
                service0: !serviceActive.service0,
                service1: false,
                service2: false,
                service3: false,
                service4: false,
              })
            }
          >
            <motion.div
              key={0}
              className={
                serviceActive.service0
                  ? "text-white mx-4 relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                  : "text-white mx-4  relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 * 0.2 }}
              onClick={() => handleScroll("div1")}
            >
              <div className="w-[10%] ">{services[0].logo}</div>
              <div className="w-[90%] flex justify-center content-center">
                <h2 className="">{services[0].title}</h2>
              </div>
            </motion.div>
          </button>
          <AnimatePresence mode="wait">
            {serviceActive.service0 && (
              <motion.div
                key={0}
                className="w-full flex flex-col"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div1}
              >
                <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                  <img
                    className="rounded-br-[100px]"
                    src={services[0].image}
                    alt=""
                  />
                </div>
                <div className="w-[90%] mx-4 my-2 text-start">
                  <h2 className="font-bold text-green-600 ">
                    ¿Necesitas transportar tu carga por mar?
                  </h2>
                  <p className="font-light">
                    Ofrecemos fletes marítimos para todo tipo de carga,
                    incluyendo:
                  </p>
                  <ul className="">
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span> Carga
                      LCL (Consolidada)
                    </li>
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span> Carga
                      FCL (Full Contenedores)
                    </li>
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span> Carga
                      REEFER
                    </li>
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span> Carga
                      Peligrosa - IMO
                    </li>
                  </ul>
                  <p className="font-light">
                    Contamos con una amplia experiencia en el transporte
                    marítimo y podemos ofrecerte un servicio personalizado y de
                    alta calidad.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: !serviceActive.service1,
                service2: false,
                service3: false,
                service4: false,
              })
            }
          >
            <motion.div
              key={1}
              className={
                serviceActive.service1
                  ? "text-white mx-4  relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                  : "text-white mx-4  relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 * 0.2 }}
              onClick={() => handleScroll("div2")}
            >
              <div className="w-[10%] ">{services[1].logo}</div>
              <div className="w-[90%] flex justify-center content-center">
                <h2 className="">{services[1].title}</h2>
              </div>
            </motion.div>
          </button>
          <AnimatePresence mode="wait">
            {serviceActive.service1 && (
              <motion.div
                key={1}
                className="w-full flex flex-col"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div2}
              >
                <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                  <img
                    className="rounded-br-[100px]"
                    src={services[1].image}
                    alt=""
                  />
                </div>
                <div className="w-[90%]  mx-4 my-2 text-start">
                  <h2 className="font-bold text-[#1B2680]">
                    ¿Necesitas enviar tu mercancía de forma rápida y económica?
                    La carga aérea consolidada es la mejor
                  </h2>
                  <p className="font-light">
                    La carga aérea consolidada es la mejor opción para envíos
                    urgentes.
                  </p>

                  <h2 className="text-[#1B2680] font-semibold ">
                    ◦ Carga Aérea Consolidada
                  </h2>
                  <p className="font-light ml-2">
                    Es una excelente alternativa para optimizar los costos en la
                    gestión logística.
                  </p>

                  <h2 className="text-[#1B2680] font-semibold">
                    ◦ Carga Aérea Back to Back
                  </h2>
                  <p className="font-light ml-2">
                    Garantizamos entregas rápidas y eficientes mediante vuelos
                    directos y conexiones, disponibles tanto diaria como
                    interdiariamente.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: !serviceActive.service2,
                service3: false,
                service4: false,
              })
            }
          >
            <motion.div
              key={2}
              className={
                serviceActive.service2
                  ? "text-white mx-4 relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                  : "text-white mx-4 relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2 * 0.2 }}
              onClick={() => handleScroll("div3")}
            >
              <div className="w-[10%] ">{services[2].logo}</div>
              <div className="w-[90%] flex justify-center content-center">
                <h2 className="">{services[2].title}</h2>
              </div>
            </motion.div>
          </button>
          <AnimatePresence mode="wait">
            {serviceActive.service2 && (
              <motion.div
                key={2}
                className="w-full flex flex-col"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div3}
              >
                <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                  <img
                    className="rounded-br-[100px]"
                    src={services[2].image}
                    alt=""
                  />
                </div>
                <div className="w-[90%] mx-4 my-2 text-start">
                  <h2 className="font-bold text-green-600 text-center ">
                    ¿Tiene alguna necesidad de transporte de carga terrestre
                    nacional o internacional en este momento?
                  </h2>
                  <p className="font-light">
                    Ofrecemos una amplia gama de servicios de transporte de
                    carga terrestre nacional e internacional, incluyendo:
                  </p>
                  <ul className="">
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span>{" "}
                      Transporte de contenedores (1x20st, 1x40HQ).
                    </li>
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span>{" "}
                      Transporte para cargas sueltas.
                    </li>
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span>{" "}
                      Transporte en camión furgón.
                    </li>
                    <li>
                      <span className="text-[#1B2680] text-xl">◦</span>{" "}
                      Transporte internacional a fronteras.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: false,
                service3: !serviceActive.service3,
                service4: false,
              })
            }
          >
            <motion.div
              key={3}
              className={
                serviceActive.service3
                  ? "text-white mx-4 relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                  : "text-white mx-4 relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 3 * 0.2 }}
              onClick={() => handleScroll("div4")}
            >
              <div className="w-[10%] ">{services[3].logo}</div>
              <div className="w-[90%] flex justify-center content-center">
                <h2 className="">{services[3].title}</h2>
              </div>
            </motion.div>
          </button>
          <AnimatePresence mode="wait">
            {serviceActive.service3 && (
              <motion.div
                key={3}
                className="w-full  flex flex-col"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                id="div4"
                ref={elementRefs.div4}
              >
                <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                  <img
                    className="rounded-br-[100px]"
                    src={services[3].image}
                    alt=""
                    ref={elementRefs.div4}
                  />
                </div>
                <div className="w-[90%] mx-4 my-2 text-start">
                  <h2 className="font-bold text-[#1B2680] text-center ">
                    ¿Está cansado de perder tiempo y dinero en los trámites
                    aduaneros?
                  </h2>
                  <p className="font-light my-2 mx-2">
                    ¡Confíe para que su mercancía llegue a su destino de forma
                    rápida, segura y sin complicaciones!
                  </p>

                  <p className="mx-2">
                    El servicio de aduanas comprende desde la llegada de la
                    mercancía al Perú hasta la posterior entrega en sus
                    instalaciones.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() =>
              setServiceActive({
                service0: false,
                service1: false,
                service2: false,
                service3: false,
                service4: !serviceActive.service4,
              })
            }
          >
            <motion.div
              key={4}
              className={
                serviceActive.service4
                  ? "text-white mx-4 relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
                  : "text-white mx-4 relative bg-[#1B2680]/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center  hover:bg-green-600/90 hover:cursor-pointer"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 4 * 0.2 }}
              onClick={() => handleScroll("div5")}
            >
              <div className="w-[10%] ">{services[4].logo}</div>
              <div className="w-[90%] flex justify-center content-center">
                <h2 className="">{services[4].title}</h2>
              </div>
            </motion.div>
          </button>
          <AnimatePresence mode="wait">
            {serviceActive.service4 && (
              <motion.div
                key={4}
                className="w-full flex flex-col"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div5}
              >
                <div className="w-full bg-green-600 h-min rounded-br-[70px]">
                  <img
                    className="rounded-br-[100px]"
                    src={services[4].image}
                    alt=""
                  />
                </div>
                <div className="w-[90%] mx-4 my-2  text-start">
                  <h2 className="font-bold text-green-600 tracking-wider ">
                    Nuestra consultoría integral te ayuda a:
                  </h2>
                  <p className="font-light">
                    Ofrecemos fletes marítimos para todo tipo de carga,
                    incluyendo:
                  </p>
                  <ul className="font-light mx-2 list-disc leading-5">
                    <li className="mx-3">
                      <span className="font-semibold">
                        Establecer márgenes de utilidad óptimos
                      </span>{" "}
                      que maximicen tus ganancias.
                    </li>
                    <li className="mx-3">
                      <span className="font-semibold">
                        Determinar con precisión los costos de logística
                        integral,
                      </span>{" "}
                      incluyendo transporte, almacenamiento, inventario y
                      gestión de pedidos.
                    </li>
                    <li className="mx-3">
                      <span className="font-semibold">
                        Establecer precios de productos competitivos
                      </span>{" "}
                      que se ajusten a las condiciones del mercado y te permitan
                      aumentar tus ventas.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
