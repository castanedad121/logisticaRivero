import React from "react";

const WaviDivOndeado = () => {
  return (
    <>
      {/* Sección con borde ondulado superior dramático */}
      <div className="relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute top-0 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#D9D9D9"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,133.3C672,149,768,139,864,133.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V224Z"
          ></path>
        </svg>
      </div>

      {/* Sección con borde ondulado inferior dramático */}
      <div className="relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute bottom-0 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#D9D9D9"
            fillOpacity="1"
            d="M0,288L48,250.7C96,213,192,139,288,128C384,117,480,171,576,186.7C672,203,768,181,864,176C960,171,1056,181,1152,213.3C1248,245,1344,299,1392,325.3L1440,352V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V288Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WaviDivOndeado;
