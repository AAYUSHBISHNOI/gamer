import React from 'react'
import { Underlinegreen } from './Mysvg'
import btnnn from "../assets/img/btnline.png";

const Lanza = () => {
  return (
    <div className=' px-4'>
        <div className="container mx-auto max-w-[1164px] mt-10 md:mt-20 lg:mt-[166px] flex justify-center mb-10 sm:mb-20 lg:mb-[150px]">
            <div className=' bg_lanza relative py-[40px] md:py-[90px] px-5 md:px-0'>
                <p className=' text-[24px] md:text-[32px] ff_Anton text-white font-normal leading-[130%] text-center'>Lanza tu propia plataforma en sólo 2 semanas</p>
               <div className=' mt-7 md:mt-[40px] flex justify-center '>
               <div className='relative z-50'>
                        <button className= ' my_btn ff_inter font-bold text-[16px] text-[#00141b] py-[13px] px-[46px] rounded-[100px] bg_bttn'>Comprar ahora</button>
                        <div className=' z-[-2]'>
                          <img className=' absolute bottom-[-5px] left-[-4px] z-[-2]' src={btnnn} alt="" />
                        </div>
                 </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Lanza