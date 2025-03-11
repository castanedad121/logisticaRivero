import React, { useEffect, useState, useRef } from "react";

const Customer = () => {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Cuando el 10% del elemento sea visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <section className="bg-white pt-14  md:pt-20  md:pb-4 " ref={sectionRef}>
        <div className=" mx-auto w-full ">
          <div className="flex flex-col  md:mb-8 justify-start w-full content-start text-center ">
            <h2 className="text-3xl font-bold text-[#1B2680] drop-shadow-md">
              Nuestros
            </h2>
            <h2 className="text-5xl font-bold text-green-600 drop-shadow-md">
              Clientes
            </h2>
          </div>
          <div
            className={`overflow-hidden ${isVisible ? "animate-flip-up" : ""}`}
            // className="overflow-hidden  animate-flip-up "
          >
            <div
              className={`flex items-center whitespace-nowrap ${
                isVisible ? "animate-scroll" : ""
              }  w-[8800px]`}
            >
              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center"
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667075/01-MEDIIMAGEN-min_oenytz_pwa2dp.png"
                  alt=""
                  className="h-28  opacity-50  hover:opacity-100"
                />
              </a>
              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667103/02-JATSUMI-min_y0qf1h_spwzhk.png"
                  alt=""
                  className="m-auto h-60 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667143/03-santofa-min_yof9pd_oskyxt.png"
                  alt=""
                  className="m-auto h-24 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667179/04-OPTIDENT-min_sy4jqd_dbgeus.png"
                  alt=""
                  className="m-auto h-40 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667208/05-servomotion-min_jrdbum_cmqgxq.png"
                  alt=""
                  className="m-auto h-20 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667241/06-frankolmotors-min_fgpkpf_w8bxf6.png"
                  alt=""
                  className="m-auto h-32 opacity-50  hover:opacity-100"
                />
              </a>
              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667282/07-IDENTIGRAF-min_dblach_ptjvaf.png"
                  alt=""
                  className=" m-auto  h-20  opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667315/08-VERSUGAS-min_lclzkh_llxh9d.png"
                  alt=""
                  className="m-auto h-44 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667345/09-aqm-min_oggx8u_ii53by.png"
                  alt=""
                  className="m-auto h-20 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667377/11-CIRCUITS_yw7ev7_vgs6ec.png"
                  alt=""
                  className="m-auto h-40 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667416/10-huaquian-min_fmrqby_egdzqz.png"
                  alt=""
                  className="m-auto h-32 opacity-50  hover:opacity-100"
                />
              </a>

              {/* segunda ronda */}
              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center"
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667075/01-MEDIIMAGEN-min_oenytz_pwa2dp.png"
                  alt=""
                  className="h-28  opacity-50  hover:opacity-100"
                />
              </a>
              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667103/02-JATSUMI-min_y0qf1h_spwzhk.png"
                  alt=""
                  className="m-auto h-60 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667143/03-santofa-min_yof9pd_oskyxt.png"
                  alt=""
                  className="m-auto h-24 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667179/04-OPTIDENT-min_sy4jqd_dbgeus.png"
                  alt=""
                  className="m-auto h-40 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667208/05-servomotion-min_jrdbum_cmqgxq.png"
                  alt=""
                  className="m-auto h-20 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667241/06-frankolmotors-min_fgpkpf_w8bxf6.png"
                  alt=""
                  className="m-auto h-32 opacity-50  hover:opacity-100"
                />
              </a>
              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667282/07-IDENTIGRAF-min_dblach_ptjvaf.png"
                  alt=""
                  className=" m-auto  h-20  opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667315/08-VERSUGAS-min_lclzkh_llxh9d.png"
                  alt=""
                  className="m-auto h-44 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667345/09-aqm-min_oggx8u_ii53by.png"
                  alt=""
                  className="m-auto h-20 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667377/11-CIRCUITS_yw7ev7_vgs6ec.png"
                  alt=""
                  className="m-auto h-40 opacity-50  hover:opacity-100"
                />
              </a>

              <a
                href="!#"
                className="h-[300px] w-[400px] flex justify-center items-center content-center "
              >
                <img
                  src="https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667416/10-huaquian-min_fmrqby_egdzqz.png"
                  alt=""
                  className="m-auto h-32 opacity-50  hover:opacity-100"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
