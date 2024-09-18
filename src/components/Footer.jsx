import React, { useState } from "react";
import logo from "../assets/logoRivero-blanco.png";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    const email = "johanna@logisticarivero.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // El mensaje se oculta después de 3 segundos
    });
  };
  return (
    <footer className="bg-gray-800 text-white py-6 w-full overflow-hidden">
      <div className=" mx-auto text-center">
        <img src={logo} alt="" className="h-12 mx-auto mb-6" />
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Logística Rivero. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 text-sm text-nowrap gap-4  md:gap-12">
          <div className="flex justify-around items-center gap-1 md:gap-4 flex-col  md:flex-row text-sm md:text-base">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Av.+San+Borja+Nte.+459,+Lima+15036/@-12.093691,-77.005031,18z/data=!4m6!3m5!1s0x9105c7d73681d3fb:0x630c39bc9c503e05!8m2!3d-12.0938326!4d-77.0050205!16s%2Fg%2F11cs8035bz?hl=es-419&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
              className="flex gap-1 hover:underline hover:text-blue-300"
            >
              <CiLocationOn className="size-4" /> Av. San Borja Norte 459, Dpto.
              603 – San Borja
            </a>
            <a
              href="https://wa.me/51926932008?text=Hola%20vengo%20de%20tu%20pagina%20web%20y%20necesito%20que%20me%20brindes%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 hover:underline hover:text-blue-300"
            >
              <CiPhone className="size-4" /> 926 932 008
            </a>
            <a
              className="flex gap-1 hover:underline hover:text-blue-300 hover:cursor-pointer"
              onClick={handleCopyEmail}
            >
              <CiMail className="size-4" /> johanna@logisticarivero.com
            </a>
            {/* Mensaje de confirmación */}
            {copied && (
              <p className="text-green-400 mt-2">
                ¡Correo copiado al portapapeles!
              </p>
            )}
            <a
              href="/"
              className="flex gap-1 hover:underline hover:text-blue-300"
            >
              <CiGlobe className="size-4" />
              https://logisticarivero.com/
            </a>
          </div>
          <div className="flex w-full md:w-auto pl-10 md:pl-0 justify-start md:items-center gap-4 md:gap-2 pt-4 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/log-stica-rivero-logriv/"
            >
              <CiLinkedin className="size-6 hover:bg-[#0e76a8] rounded-md" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/logrivsac?utm_source=qr&igsh=MTE3cDM4amh6bWlkeg=="
            >
              <CiInstagram className="size-6 rounded-md hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/johannalogriv"
            >
              <CiFacebook className="size-6 rounded-md hover:bg-[#3b5998]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
