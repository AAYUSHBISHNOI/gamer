import React from 'react'
import seven from "../assets/img/777.png";
import my from "../assets/img/Ellipse22.png";
import mya from "../assets/img/Ellipse25.png";
import { Cardbulb, Dollar, People } from './Mysvg';

const Razones = () => {
  return (
    <div className=' relative  px-4'>
        <img className=' hidden xl:block absolute top-[-100%] left-0' src={my} alt="" />
        <img className=' hidden xl:block absolute top-[5%] right-0' src={mya} alt="" />
        {/* <div className=' rounded-[484px] h-[484px] w-[484px] opacity-50 elpsise absolute top-[-30%] left-[-10%]'></div> */}
        {/* <div className=' rounded-[484px] h-[484px] w-[484px] opacity-50 elpsise absolute top-[30%] right-[-15%]'></div> */}
        <div className="container mx-auto max-w-[1164px] pt-10 md:pt-[80px]">
            <div className=' flex flex-wrap justify-between items-center'>
                <div className=' w-[100%] lg:w-[48%] flex justify-center'>
                    <img src={seven} alt="" />
                </div>
                <div className=' w-[100%] lg:w-[48%] mt-5 lg:mt-0 flex flex-col justify-center lg:justify-start lg:items-start items-center'>
                    <p className=' text-[30px] md:text-[48px] lg:text-[40px] text-white font-normal ff_Anton'>Más razones para elegirnos</p>
                    <div className=' w-[90%] md:w-[374px] py-[24px] px-[56px] rounded-[16px] border-[0.5px] border-[#51c8ef] bg_card mt-5 lg:mt-[40px]'>
                       <div className=' flex gap-[20px] md:gap-[37px]'>
                            <Cardbulb/>
                            <p className=' ff_Anton text-[28px] md:text-[32px] text-white font-normal'>200 <span className=' block ff_inter text-[16px] font-medium'> Páginas creadas</span></p>
                       </div>
                    </div>
                    <div className=' w-[90%] md:w-[374px] py-[24px] px-[56px] mt-[24px] rounded-[16px] border-[0.5px] border-[#51c8ef] bg_card'>
                       <div className=' flex gap-[20px] md:gap-[30px]'>
                            <People/>
                            <p className=' ff_Anton text-[28px] md:text-[32px] text-white font-normal'>98%  <span className=' block ff_inter text-[16px] font-medium'> Clientes Satisfechas</span></p>
                       </div>
                    </div>
                    <div className=' w-[90%] md:w-[374px] py-[24px] px-[56px] mt-[24px] rounded-[16px] border-[0.5px] border-[#51c8ef] bg_card'>
                       <div className=' flex gap-[20px] md:gap-[37px]'>
                            <Dollar/>
                            <p className=' ff_Anton text-[28px] md:text-[32px] text-white font-normal'>200 <span className=' block ff_inter text-[16px] font-medium'> Divisas Disponibles</span></p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Razones