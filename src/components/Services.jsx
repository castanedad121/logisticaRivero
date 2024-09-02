import React from "react";
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
    logo: <RiShipLine className="size-8 text-white" />,
  },
  {
    title: "Carga Aérea Internacional",
    description: "Carga Aérea Consolidada, Back to Back",
    image:
      "https://www.southexpress.pe/wp-content/uploads/2023/10/transporte-de-carga-aerea-internacional-South-Express.png",
    logo: <GiAirplaneDeparture className="size-8 text-white" />,
  },
  {
    title: "Carga Terrestre Nacional e Internacional",
    description:
      "Contenedores, cargas sueltas, camión furgón, transporte internacional",
    image:
      "https://www.southexpress.pe/wp-content/uploads/2022/10/TERRESTRE-1.jpg",
    logo: <LiaShippingFastSolid className="size-8 text-white" />,
  },
  {
    title: "Agenciamiento de Aduanas",
    description: "Trámites aduaneros rápidos y seguros",
    image:
      "https://antaresaduanas.com.pe/new-web-preview/api-transmeridian/public/repository/subsections/portada-nosotrosx640.jpg",
    logo: <LuFiles className="size-8 text-white" />,
  },
  {
    title: "Consultoría Logística Integral",
    description:
      "Análisis de costos, optimización de márgenes y precios competitivos",
    image:
      "https://www.ulima.edu.pe/sites/default/files/ublog/img/transporte-maritimo_600x300.jpg",
    logo: <GrBarChart className="size-8 text-white" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5 text-green-600">
          Nuestros Servicios
        </h2>
        <div className="flex flex-col items-center xl:flex-row md:justify-around flex-wrap gap-x-10 gap-y-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden w-96 h-[230px] flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute sha right-5 top-5 bg-[#1B2680]/90 p-2 rounded-md">
                {service.logo}
              </div>
              <img className=" w-full" src={service.image} alt="" />
              <div className="absolute z-0 bottom-12 w-full">
                <h3 className=" bg-green-600/75 drop-shadow-md text-white text-xl font-semibold top-0">
                  {service.title}
                </h3>
              </div>
              <div
                name="todo"
                className="w-full   flex justify-center items-center flex-grow"
                flex-grow
              >
                <p className="leading-none drop-shadow-md	">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
