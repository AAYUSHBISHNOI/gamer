import React from 'react'
import { Underlinegreen } from './Mysvg'
import casino from "../assets/img/casino.png";
import btnlin from "../assets/img/btnline.png";

const Por = () => {
  return (
    <div className=' bg_por relative px-4'>
        <div className="container mx-auto max-w-[1164px] py-[40px] lg:py-[300px]">
            <div className=' flex flex-wrap justify-between lg:items-center flex-col md:flex-row'>
                <div className=' w-[100%] md:w-[45%] pt-5 md:pt-0 order-2 md:order-1'>
                    <p className=' text-[#00141b] text-[48px] md:text-[45px] font-normal leading-[120%] ff_Anton'>Por qué elegirnos</p>
                    <p className=' text-[#00141b] text-[16px] font-medium leading-[160%] ff_inter pt-2 md:pt-[16px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos <span className=' xl:block'>todo lo invertido en fichas en la moneda que elijas. En Exclusive</span><span className=' xl:block'> Games siempre sumamos nuevos juegos. Juegos crash, los juegos</span><span className=' xl:block'> interactivos que más pide la gente. Con Exclusive Games empezás a </span><span className=' xl:block'> ganar ya! Creamos tu plataforma en solo 2 semanas.</span></p>
                    <div className=' mt-3 md:mt-[24px] relative z-50 cursor-pointer'>
                        <button className=' my_btn ff_inter font-bold text-[16px] text-[#00141b] py-[13px] px-[46px] rounded-[100px] bg_bttn'>Mostrar más</button>
                        <div >
                            <img className=' absolute bottom-[-4px] left-[-4px] z-[-2]' src={btnlin} alt="" />
                    </div>
                    </div>
                </div>
                <div className=' w-[100%] md:w-[48%] flex justify-center order-1 md:order-2'>
                    <img className=' rounded-[16px]' src={casino} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Por