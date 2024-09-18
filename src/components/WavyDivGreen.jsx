import React from "react";

const WavyDivGreen = () => {
  return (
    <>
      {/* Sección con borde curvado superior */}
      <div className="hidden md:block relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute top-0 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#009450"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,170.7C840,160,960,96,1080,96C1200,96,1320,160,1380,192L1440,224V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0V224Z"
          ></path>
        </svg>
      </div>

      {/* Sección con borde curvado inferior */}
      <div className="hidden md:block  relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute bottom-0 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#009450"
            fillOpacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,202.7C480,203,600,245,720,234.7C840,224,960,160,1080,160C1200,160,1320,224,1380,256L1440,288V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V288Z"
          ></path>
        </svg>
      </div>

      <div className="md:hidden relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute top-0 left-0 w-full h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#009450"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,170.7C840,160,960,96,1080,96C1200,96,1320,160,1380,192L1440,224V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0V224Z"
          ></path>
        </svg>
      </div>

      {/* Sección con borde curvado inferior */}
      <div className=" md:hidden  relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute bottom-0 left-0 w-full h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#009450"
            fillOpacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,202.7C480,203,600,245,720,234.7C840,224,960,160,1080,160C1200,160,1320,224,1380,256L1440,288V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V288Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WavyDivGreen;
