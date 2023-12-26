import React from 'react'
import { Underline } from './Mysvg'
import card10 from "../assets/img/card10.png";
import card11 from "../assets/img/carrd11.png";
import card12 from "../assets/img/card12.png";

const Ellos = () => {
  return (
    <div className=' px-4'>
        <div className="container mx-auto max-w-[1164px] pt-16 md:pt-[150px]">
            <p className=' text-[38px] md:text-[48px] ff_Anton text-white leading-[120%] font-normal text-center'>Ellos eligieron apostar con nosotros</p>
            <div className=' flex flex-wrap justify-center gap-6 md:gap-0 md:justify-between mt-5 md:mt-10 lg:mt-[60px]'>
            <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Rcasinovip</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card10} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card mt-1 sm:mt-0'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Rcasinovip</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card11} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card mt-1 sm:mt-1 md:mt-0'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Rcasinovip</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card12} alt="img" />
                </div>
              </div>
            </div>
            <p className=' text-center text-[14px] md:text-[16px] font-semibold ff_inter leading-[160%] text-white mt-5 md:mt-[38px]'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego. <span className=' lg:block'>Ahora, la próxima apuesta está en tus manos.</span><span className=' lg:block'>Elige ganar. Elige exclusive game.</span></p>
        </div>
    </div>
  )
}

export default Ellos