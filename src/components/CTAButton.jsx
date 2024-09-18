// CTAButton.js
import React from "react";

const CTAButton = ({ text }) => {
  return (
    <a
      href="https://wa.me/51926932008?text=Hola%20vengo%20de%20tu%20pagina%20web%20y%20necesito%20que%20me%20brindes%20información"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-blue-500 text-white p-2 mb-4 md:px-6 md:py-3 md:text-sm rounded-lg transform transition duration-500 hover:scale-105 hover:bg-[#1B2680]">
        {text}
      </button>
    </a>
  );
};

export default CTAButton;
