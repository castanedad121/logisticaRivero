// Testimonials.js
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100" id="testimonials">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
          Nuestros Clientes Confían en Nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white p-6 shadow-lg rounded-lg"
            data-aos="fade-right"
          >
            <p className="italic">
              {"Excelente servicio, siempre a tiempo y con la mejor atención."}
            </p>
            <p className="mt-4 font-semibold">- Juan Pérez</p>
          </div>
          <div
            className="bg-white p-6 shadow-lg rounded-lg"
            data-aos="fade-left"
          >
            <p className="italic">
              {"Profesionales y confiables, altamente recomendados."}
            </p>
            <p className="mt-4 font-semibold">- María López</p>
          </div>
          {/* Agrega más testimonios según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
