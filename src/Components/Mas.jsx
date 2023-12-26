// import Image from "next/image";
import { useState } from "react";
import add from "../assets/img/Vectoradd.png";
import minus from "../assets/img/vectorminus.png";
import { Added, Minus } from "./Mysvg";
// import Ring from "./Ring";
// import Torus from "./common/Torus";
import epl from "../assets/img/Ellipse33.png";

const Mas = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
        setOpenAccordion(index);
    }
  };
 const accordianData = [
    {
      id: 1,
      heading: "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 2,
      heading: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 3,
      heading: " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 4,
      heading: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 5,
      heading: "¿Qué métodos de pago aceptan?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 6,
      heading: "¿Puedo probar sus juegos antes de comprometerme?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
  ];
  return (
    <>
      <div id="Faqs" className="faq-main-div mt-16 lg:mt-[170px] relative px-4" >
        <img className=" hidden xl:block absolute left-0 top-[-70%]" src={epl} alt="" />
      {/* <div className=' rounded-[484px] h-[484px] w-[484px] opacity-50 elpsise absolute top-[-10%] left-[-18%]'></div> */}
        <div className="relative container max-w-[1164px] mx-auto">
          <p className=" ff_Anton text-white text-[32px] md:text-[48px] font-normal leading-[57px] text-center md:mb-[60px]">Preguntas más frecuentes</p>
          {accordianData.map((data, index) => (
            <div key={index} className="accordian-main mx-auto mt-[32px] w-[100%] max-w-[970px] overflow-hidden rounded-[6px] border-[0.5px] border-[#ffffff80] bg-transparent pt-[16px] pb-[13px] px-[20px] text-white" open={openAccordion === index} >
              <div onClick={() => toggleAccordion(index)} className="flex">
                <h2 className="accordian-heading mb-0 flex w-[100%] cursor-pointer items-center justify-between text-start ff_Anton text-[15px] md:text-[20px] font-normal leading-[26px]">{data.heading}</h2>
                <span>
                  {openAccordion === index ? (
                    <Minus/>
                  ) : (
                    <Added/>
                  )}
                </span>
              </div>
              <div className={`transition-all duration-300 ease-linear pt-0 pb-0 ${  openAccordion === index ? "sm:h-[65px] h-[100px]" : "h-[0px]" }`} >
                <p className=" font-medium ff_inter leading-[25px] max-w-[850px] text-[#ccd0d1]  pb-0 pt-[8px]">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mas;