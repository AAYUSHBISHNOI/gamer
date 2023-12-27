import React from 'react'
import { Arrows, Arrowtwos, Bulb, Danger, Heart, Underline, Underlinegreen } from './Mysvg'
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import card5 from "../assets/img/card5.png";
import card6 from "../assets/img/card6.png";
import btnln from "../assets/img/btnline.png";
import grn from "../assets/img/greenarw.png";
import grna from "../assets/img/grenarw1.png";

const Marca = () => {
  return (
    <div className=' bg_marca relative px-4'>
        <div className=' container mx-auto max-w-[1164px] py-10 lg:py-[243px]'>
            <h2 className=' text-[28px] md:text-[48px] text-[#00141b] font-normal ff_Anton text-center '>Nuestros Atributos de Marca</h2>
            <div className=' flex flex-wrap justify-center md:justify-between pt-5 md:pt-10 lg:mt-[60px] relative'>
            <img className=' hidden xl:block absolute left-[23%] w-[20%]' src={grn} alt="" />
            <img className=' hidden xl:block absolute left-[58%] top-[40%] w-[20%]' src={grna} alt="" />
              <div className=' w-[100%] sm:w-[50%] md:w-[21%] lg:w-[30%] flex flex-col justify-center items-center'>
                <Bulb/>
                <p className=' text-[#00141b] text-[20px] font-normal ff_Anton pt-[16px]'>Inteligencia</p>
                <p className=' text-center text-[#00141b] text-[16px] font-medium ff_inter'>Comprendemos a la perfección <span className=' lg:block'>los gustos de las personas y el</span><span className=' lg:block'> mundo del gaming.</span></p>
              </div>
              <div className=' w-[100%] sm:w-[50%] md:w-[21%] lg:w-[30%] flex flex-col justify-center items-center pt-6 sm:pt-0'>
                <Danger/>
                <p className=' text-[#00141b] text-[20px] font-normal ff_Anton pt-[16px]'>Proactividad</p>
                <p className=' text-center text-[#00141b] text-[16px] font-medium ff_inter'>Somos creadores de cambios <span className=' lg:block'> que exploran nuevas formas</span><span className=' lg:block'>de entretenimiento.</span></p>
              </div>
              <div className=' w-[100%] sm:w-[50%] md:w-[21%] lg:w-[30%] flex flex-col justify-center items-center pt-6 md:pt-0'>
                <Heart/>
                <p className=' text-[#00141b] text-[20px] font-normal ff_Anton pt-[16px]'>Innovación</p>
                <p className=' text-center text-[#00141b] text-[16px] font-medium ff_inter'>Pensamos fuera de la caja para <span className=' lg:block'>estar siempre un paso adelante.</span></p>
              </div>
            </div>
            <p className=' pt-10 md:pt-16 lg:pt-[150px] text-[#00141b] font-normal ff_Anton text-[48px] leading-[57px] text-center'>Slots </p>
            <p className='text-[#00141b] font-medium ff_inter text-[12px] md:text-[16px] text-center pt-[16px]'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como <span className=' lg:block'>Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para</span><span className=' lg:block'> innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por</span> <span className=' lg:block'> cifrado SSL de 256 bits.</span></p>
            <div className=' flex flex-wrap justify-center md:justify-between mt-5 md:mt-8 lg:mt-[60px] gap-6 md:gap-0'>
            <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Jugar</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card1} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card pt-1 sm:pt-0'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Jugar</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card2} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card pt-1 sm:pt-2 md:pt-0'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Jugar</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card3} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card pt-1 sm:pt-2 md:pt-3 z-50'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Jugar</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card4} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card pt-1 sm:pt-2 md:pt-3'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Jugar</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card5} alt="img" />
                </div>
              </div>
              <div className=' w-[100%] sm:w-[48%] md:w-[32%] Juegos-card pt-1 sm:pt-2 md:pt-3'>
                  <div className=" relative">
                  <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">Jugar</button>
                    <div className=' absolute bottom-[-14%] left-[-4%]'>
                     <Underline/>
                    </div>
                  </div>
                    </div>
                  <img className=" rounded-[8px] w-full h-full " src={card6} alt="img" />
                </div>
              </div>
            </div>
            <div className=' flex flex-wrap justify-center mt-5 md:mt-[40px]'>
            <div className=' relative z-50'>
              <button className=' my_btn ff_inter font-bold text-[16px] text-[#00141b] py-[13px] px-[46px] rounded-[100px] bg_bttn'>Mostrar más</button>
              <div >
                <img className=' absolute bottom-[-4px] left-[-4px] z-[-2]' src={btnln} alt="" />
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Marca