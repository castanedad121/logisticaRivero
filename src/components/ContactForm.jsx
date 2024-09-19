import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const ContactForm = ({ setShowContact }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    const email = "johanna@logisticarivero.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // El mensaje se oculta después de 3 segundos
    });
  };
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    // Mostrar el mensaje
    setShowMessage(true);

    // Ocultar el mensaje después de 2 segundos (2000 ms)
    setTimeout(() => {
      document.getElementById("message").innerHTML = "";
      document.getElementById("name").innerHTML = "";
      document.getElementById("email").innerHTML = "";
      setShowMessage(false);
    }, 2000);
  };
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 h-modal  bg-blue-950/90 "
    >
      <section className=" py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-10">
          {showMessage && (
            <div className="absolute flex  w-full h-full">
              <div className="m-auto p-2 bg-green-500 text-white rounded shadow-lg">
                ¡Mensaje enviado con éxito!
              </div>
            </div>
          )}
          {/* Formulario */}
          <div className="text-center md:text-left">
            <div className="relative w-full">
              <h2 className="text-4xl font-bold mb-4 text-green-600">
                Contáctanos
              </h2>
              <IoCloseOutline
                className="size-10 text-white hover:scale-90 hover:text-red-800 absolute top-0 right-0 hover:cursor-pointer"
                onClick={() => setShowContact(false)}
              />
            </div>

            <form className="bg-white shadow-lg p-8 rounded-lg">
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="box"></input>
              <input
                type="hidden"
                name="_subject"
                value="Formulario de contacto"
              ></input>
              <div className="flex justify-around items-center gap-1 md:gap-2 flex-col pb-4 ">
                <span className="flex gap-0 md:gap-1 md:text-base text-sm ">
                  <CiLocationOn className="size-6 md:size-6 text-[#1B2680]" />{" "}
                  Av. San Borja Norte 459, Dpto. 603 – San Borja
                </span>
                <span className="flex gap-1 ">
                  <CiPhone className="size-4 md:size-6 text-[#1B2680]" /> 926
                  932 008
                </span>
                <span
                  className="flex gap-1  hover:cursor-pointer hover:text-green-600"
                  onClick={handleCopyEmail}
                >
                  <CiMail className="size-4 md:size-6 text-[#1B2680]" />{" "}
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
                id="name"
                name="name"
                type="text"
                placeholder="Nombre"
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:border-green-600"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:border-green-600"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Mensaje"
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:border-green-600"
                rows="5"
              ></textarea>

              <input type="hidden" name="_next" value="/"></input>

              <button
                action="https://formsubmit.co/johanna@logisticarivero.com"
                method="POST"
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
                onClick={handleClick}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
