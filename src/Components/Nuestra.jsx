import React from 'react'
import game from "../assets/img/poker.png";
import avitor from "../assets/img/aviator.png";
import elps from "../assets/img/Ellipse12.png";
import eplsa from "../assets/img/Ellipse31.png";
import eplsaw from "../assets/img/Ellipse30.png";

const Nuestra = () => {
  return (
    <div className=' relative px-4'>
        <img className=' hidden xl:block absolute left-0 top-[1%]' src={eplsa} alt="" />
        <img className=' hidden xl:block absolute right-0 top-[50%]' src={eplsaw} alt="" />
        {/* <img className=' absolute left-[40%] top-[20%]' src={elps} alt="" /> */}
        <div className=' container mx-auto max-w-[1164px]'>
            <div className=' pt-8 md:pt-[74px] pb-10 md:pb-[100px] flex flex-wrap justify-between'>
                <div className=' w-[100%] sm:w-[48%]'>
                    <img className=' rounded-[16px]' src={game} alt="" />
                    <p className=' font-normal text-[48px] text-white ff_Anton mt-5 md:mt-[60px] leading-[57px]'>Nuestra Visión</p>
                    <p className=' leading-[25px] text-[#ccd0d2] ff_inter text-[16px] font-medium mt-2 md:mt-[16px]'>Nuestra visión es ser líderes indiscutibles en la industria <span className=' lg:block'>de los juegos de azar y llevar nuestra pasión por el</span> <span className=' lg:block'> entretenimiento más allá de las fronteras. Imagina un</span> <span className=' lg:block'> mundo donde la emoción y la diversión no tengan límites,</span> <span className=' lg:block'> y ese es el mundo que queremos crear contigo.</span></p>
                    <div className=' mt-3 md:mt-[24px]'>
                        <a href="" className=' text-[#7af57a] text-[16px] font-bold ff_inter relative after:left-[50%] after:absolute after:bg-[#7af57a] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Aprende más --></a>
                    </div>
                </div>
                <div className=' w-[100%] sm:w-[48%] flex flex-col'>
                   <div className='order-2  sm:order-1 mt-5 sm:mt-0'>
                        <p className=' font-normal text-[48px] text-white ff_Anton leading-[57px]'>Nuestra Misión</p>
                        <p className=' leading-[25px] text-[#ccd0d2] ff_inter text-[16px] font-medium mt-2 md:mt-[16px]'>Nuestra misión es simple pero poderosa: proporcionarte <span className=' lg:block'>la más amplia gama de soluciones de entretenimiento de</span> <span className=' lg:block'> alta calidad y rentabilidad. Estamos comprometidos a </span> <span className=' lg:block'> elevar tus expectativas y brindarte experiencias</span> <span className=' lg:block'>inigualables.</span></p>
                        <div className=' mt-3 md:mt-[24px]'>
                            <a href="" className=' text-[#7af57a] text-[16px] font-bold ff_inter relative after:left-[50%] after:absolute after:bg-[#7af57a] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Aprende más --></a>
                        </div>
                   </div>
                   <div className='order-1 sm:order-2 mt-10 md:mt-[60px]'>
                    <img className=' rounded-[16px]' src={avitor} alt="" />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nuestra