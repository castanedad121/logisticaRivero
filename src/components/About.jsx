import React from "react";
import imageAbout from "../assets/about.avif";

const About = () => {
  return (
    <section className="pt-20 pb-32 bg-gray-100">
      <div className="container mx-auto text-center animate-fadeIn pt-10">
        <h2 className="text-4xl font-bold xl:mb-16 animate-slideIn text-[#1B2680]">
          ¿Quiénes Somos?
        </h2>
        <div className="flex w-full flex-col lg:flex-row items-center lg:items-start">
          <div className="xl:w-1/2 p-4 flex  flex-col justify-center">
            <p className="text-lg max-w-2xl mx-auto py-2 xl:py-4 ">
              Somos un equipo de ejecutivos con amplia experiencia en comercio
              internacional, operaciones y administración. Ofrecemos un servicio
              integral de liderazgo en la cadena de suministro y logística
              internacional, lo que nos ha permitido ganar una cuota de mercado
              significativa.
            </p>
            <p className="text-lg font-medium max-w-2xl py-6 xl:py-12  xl:px-20 mx-auto text-[#009450] ">
              Nuestros sólidos valores nos han permitido generar la confianza y
              fidelidad de nuestros clientes.
            </p>
          </div>
          <div className="xl:w-1/2 p-4 flex justify-center">
            <img
              src={imageAbout}
              alt="Equipo de Logística"
              className=" w-[90%] h-auto rounded-lg shadow-lg  animate-slideIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
