import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

const ContactForm = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    const email = "johanna@logisticarivero.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // El mensaje se oculta después de 3 segundos
    });
  };
  return (
    <section className="bg-[#1B2680] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-10">
        {/* Formulario */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-green-600">
            Contáctanos
          </h2>

          <form className="bg-white shadow-lg p-8 rounded-lg">
            <div className="flex justify-around items-center gap-1 md:gap-2 flex-col pb-4 ">
              <span className="flex gap-1 ">
                <CiLocationOn className="size-6 text-[#1B2680]" /> Av. San Borja
                Norte 459, Dpto. 603 – San Borja
              </span>
              <span className="flex gap-1 ">
                <CiPhone className="size-6 text-[#1B2680]" /> 926 932 008
              </span>
              <span
                className="flex gap-1  hover:cursor-pointer hover:text-green-600"
                onClick={handleCopyEmail}
              >
                <CiMail className="size-6 text-[#1B2680]" />{" "}
                johanna@logisticarivero.com
              </span>
              {/* Mensaje de confirmación */}
              {copied && (
                <p className="text-green-400">
                  ¡Correo copiado al portapapeles!
                </p>
              )}
            </div>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-4 mb-4 border border-gray-300 rounded focus:border-green-600"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-4 mb-4 border border-gray-300 rounded focus:border-green-600"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full p-4 mb-4 border border-gray-300 rounded focus:border-green-600"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Mapa
        <div className="mt-10 md:mt-0 md:w-5/12 md:ml-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.825374939852!2d-76.99452718466563!3d-12.11119789142511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c64fe5a9df1b%3A0xa9d7e3c9be6a6d04!2sAv.%20San%20Borja%20Nte%20459%2C%20San%20Borja%2015021!5e0!3m2!1ses-419!2spe!4v1602026185737!5m2!1ses-419!2spe"
            width="100%"
            height="300"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default ContactForm;
