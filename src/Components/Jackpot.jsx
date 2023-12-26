import React from 'react'
import { Doubletick, Underline } from './Mysvg'
import jack from "../assets/img/jCKPOT.png";
import lanza1 from "../assets/img/lanza1.png";
import lanza2 from "../assets/img/lanza2.png";
import card7 from "../assets/img/card7.png";
import card8 from "../assets/img/card8.png";
import card9 from "../assets/img/card9.png";
import eplss from "../assets/img/Ellipse17.png";
import elpsa from "../assets/img/Ellipse29.png";
import elpsaa from "../assets/img/Ellipse28.png";

const Jackpot = () => {
  return (
    <div className=' bg_jackpot relative px-4'>
      <img className=' hidden lg:block absolute top-[-40%] left-0' src={elpsa} alt="" />
      <img className=' hidden lg:block absolute top-[45%] right-0' src={elpsaa} alt="" />
        <img className=' hidden lg:block absolute left-[40%] top-[15%]' src={eplss} alt="" />
        <div className=' container mx-auto max-w-[1164px]  pt-10 lg:pt-0 pb-10 md:pb-[100px]'>
            <div className=' flex flex-wrap justify-between lg:items-center'>
                <div className=' w-[100%] md:w-[48%] flex justify-center'>
                    <img className=' rounded-[16px]' src={jack} alt="" />
                </div>
                <div className=' w-[100%] md:w-[48%]'>
                    <h2 className=' text-white text-[29px] md:text-[30px] lg:text-[48px] ff_Anton font-normal leading-[57px]'>Potenciando sus elecciones</h2>
                    <p className=' text-[#cdd0d2] text-[16px] font-medium ff_inter md:pt-[16px] leading-[25px]'>Con Exclusive Game lo mejor está de tu lado.</p>
                    <div className=' flex items-center mt-2 lg:mt-6 gap-[8px]'>
                        <Doubletick/>
                        <p className=' text-[#cdd0d2] text-[13px] lg:text-[16px] font-medium ff_inter leading-[160%]'>Tecnología HTML5</p>
                    </div>
                    <div className=' flex items-center mt-2 lg:mt-[12px] gap-[8px]'>
                        <Doubletick/>
                        <p className=' text-[#cdd0d2] text-[13px] lg:text-[16px] font-medium ff_inter leading-[160%]'>Versión PC y móvil</p>
                    </div>
                    <div className=' flex items-center mt-2 lg:mt-[12px] gap-[8px]'>
                        <Doubletick/>
                        <p className=' text-[#cdd0d2] text-[13px] lg:text-[16px] font-medium ff_inter leading-[160%]'>Control de RTP (controlás qué porcentaje pagar)</p>
                    </div>
                    <div className=' flex mt-2 lg:mt-[12px] gap-[8px]'>
                        <Doubletick/>
                        <p className=' text-[#cdd0d2] text-[13px] lg:text-[16px] font-medium ff_inter leading-[160%]'>Bonos editables, happy hours, Jackpots, códigos <span className=' block'> promocionales.</span></p>
                    </div>
                    <div className=' flex items-center mt-2 lg:mt-[12px] gap-[8px]'>
                        <Doubletick/>
                        <p className=' text-[#cdd0d2] text-[13px] lg:text-[16px] font-medium ff_inter leading-[160%]'>Aplicación para android y windows de regalo.</p>
                    </div>
                    <p className=' text-[#cdd0d2] text-[16px] font-medium ff_inter leading-[160%] mt-3 md:mt-[24px]'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                </div>
            </div>
            <div className=' mt-10 lg:mt-[150px]'>
                <div className=' bg_laura relative overflow-hidden'>
                    <img className=' absolute w-[40%] -z-10 opacity-20 mix-blend-screen left-0' src={lanza1} alt="" />
                    <img className=' absolute w-[40%] -z-10 opacity-20 mix-blend-screen right-0 bottom-0' src={lanza2} alt="" />
                    <p className=' text-[28px] md:text-[48px] text-white font-normal ff_Anton py-[50px] md:py-[96px] text-center leading-[120%]'>lanza tu propia plataforma <span className=' block'>en sólo 2 semanas</span></p>
                </div>
            </div>
            <p className=' mt-10 lg:mt-[150px] text-[48px] text-white font-normal ff_Anton text-center'>Juegos en vivo</p>
            <div className=' flex flex-wrap justify-center md:justify-between mt-5 lg:mt-[60px] gap-6 md:gap-0'>
            <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Reproducir ahora</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card7} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card mt-1 sm:mt-0'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Reproducir ahora</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card8} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card mt-1 sm:mt-2 md:mt-0'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Reproducir ahora</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card9} alt="img" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Jackpot