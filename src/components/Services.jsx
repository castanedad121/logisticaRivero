import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiShipLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuFiles } from "react-icons/lu";
import { GrBarChart } from "react-icons/gr";
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
    image:
      "https://antaresaduanas.com.pe/new-web-preview/api-transmeridian/public/repository/subsections/portada-nosotrosx640.jpg",
    logo: <LuFiles className="size-8 m-auto" />,
  },
  {
    title: "Consultoría Logística Integral",
    description:
      "Análisis de costos, optimización de márgenes y precios competitivos",
    image:
      "https://www.ulima.edu.pe/sites/default/files/ublog/img/transporte-maritimo_600x300.jpg",
    logo: <GrBarChart className="size-8 m-auto" />,
  },
];

const Services = () => {
  const [serviceActive, setServiceActive] = useState({
    service0: true,
    service1: false,
    service2: false,
    service3: false,
    service4: false,
  });
  return (
    <section className="lg:py-[150px] py-20 px-10 flex ">
      <div className="w-[25%] container mx-auto text-center">
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
                ? "relative bg-green-600/90 shadow-lg rounded-lg overflow-hidden flex p-2 justify-between content-center"
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
      <div className="container mx-auto text-center w-2/3 flex  flex-col lg:flex-nowrap flex-wrap gap-2 mt-10 overflow-hidden rounded-xl shadow-xl bg-gray-100/5">
        {serviceActive.service0 && (
          <div className="w-full flex ">
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
                Ofrecemos fletes marítimos para todo tipo de carga, incluyendo:
              </p>
              <ul className="font-light">
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga LCL
                  (Consolidada)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga FCL
                  (Full Contenedores)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga REEFER
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga
                  Peligrosa - IMO
                </li>
              </ul>
              <p>
                Contamos con una amplia experiencia en el transporte marítimo y
                podemos ofrecerte un servicio personalizado y de alta calidad.
              </p>
            </div>
          </div>
        )}
        {serviceActive.service1 && (
          <div className="w-full flex ">
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
          </div>
        )}
        {serviceActive.service2 && (
          <div className="w-full flex ">
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
                Ofrecemos fletes marítimos para todo tipo de carga, incluyendo:
              </p>
              <ul className="font-light">
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga LCL
                  (Consolidada)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga FCL
                  (Full Contenedores)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga REEFER
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga
                  Peligrosa - IMO
                </li>
              </ul>
              <p>
                Contamos con una amplia experiencia en el transporte marítimo y
                podemos ofrecerte un servicio personalizado y de alta calidad.
              </p>
            </div>
          </div>
        )}
        {serviceActive.service3 && (
          <div className="w-full flex ">
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
                Ofrecemos fletes marítimos para todo tipo de carga, incluyendo:
              </p>
              <ul className="font-light">
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga LCL
                  (Consolidada)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga FCL
                  (Full Contenedores)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga REEFER
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga
                  Peligrosa - IMO
                </li>
              </ul>
              <p>
                Contamos con una amplia experiencia en el transporte marítimo y
                podemos ofrecerte un servicio personalizado y de alta calidad.
              </p>
            </div>
          </div>
        )}
        {serviceActive.service4 && (
          <div className="w-full flex ">
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
                Ofrecemos fletes marítimos para todo tipo de carga, incluyendo:
              </p>
              <ul className="font-light">
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga LCL
                  (Consolidada)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga FCL
                  (Full Contenedores)
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga REEFER
                </li>
                <li>
                  <span className="text-[#1B2680] text-xl">◦</span> Carga
                  Peligrosa - IMO
                </li>
              </ul>
              <p>
                Contamos con una amplia experiencia en el transporte marítimo y
                podemos ofrecerte un servicio personalizado y de alta calidad.
              </p>
            </div>
          </div>
        )}
        <div className="w-full h-full flex gap-2 justify-center items-center ">
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
    </section>
  );
};

export default Services;
