import React from 'react'
import { useState } from 'react'
import logo from "../assets/img/logohead.svg";
import { Close, Open, Underline, Underlinegreen } from './Mysvg';
import line from "../assets/img/btnline.png";

const Myheader = () => {
  const [show, setShow] = useState(false);
  if(show){
    document.body.classList.add("overflow-hidden")
  }else{
    document.body.classList.remove("overflow-hidden")
  }
  return (
    <div className=' bcg_header '>
        <nav className='bg_nav py-[24px] relative z-[20]'>
          <div className=' container mx-auto max-w-[1164px] px-4'>
           <div className=' flex justify-between items-center'>
           <div className=' flex items-center gap-[101px]'>
              <div>
                <a href=""><img src={logo} alt="" /></a>
              </div>
              <div>
              <ul className={`${show ? "left-0" : "left-[-100%]"} flex flex-col min-h-screen xl:min-h-fit fixed xl:static w-full xl:w-auto items-center justify-center top-0 bg-black z-[100] xl:bg-[unset] xl:flex-row right-0 gap-8 ps-0 duration-1000`}>                        
                  <li><a href="" className=' ff_inter text-[#d2d7d9] text-[16px] font-medium hover:text-white duration-700 relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Hogar</a></li>
                  <li><a href="" className=' ff_inter text-[#d2d7d9] text-[16px] font-medium hover:text-white duration-700 relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Misión</a></li>
                  <li><a href="" className=' ff_inter text-[#d2d7d9] text-[16px] font-medium hover:text-white duration-700 relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Tragamonedas </a></li>
                  <li><a href="" className=' ff_inter text-[#d2d7d9] text-[16px] font-medium hover:text-white duration-700 relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Por qué elegirnos</a></li>
                  <li><a href="" className=' ff_inter text-[#d2d7d9] text-[16px] font-medium hover:text-white duration-700 relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Ofertas</a></li>
                </ul>
              </div>
            </div>
            <div className=' relative hidden xl:block z-50'>
                <button className=' my_btnn ff_inter font-bold text-[16px] text-white py-[13px] px-[46px]'>Acceso</button>
                <div className=' absolute bottom-[-12%] left-[-4%] z-[-2]'>
                  <Underline/>
                </div>
            </div>
              <button className=' z-[120] relative xl:hidden' onClick={() => {setShow(!show); }}>{show ? <Close/>:<Open/>}</button>
           </div>
          </div>
        </nav>
        <section className=' pt-24 pb-16 md:pt-[200px] md:pb-[250px] px-4'>
          <div className=' container mx-auto max-w-[1164px] flex justify-center flex-col'>
            <h1 className=' ff_Anton text-[48px] md:text-[72px] text-white font-normal uppercase text-center leading-[120%]'>Exclusive Games. <span className=' block'> Pasión por ganar</span></h1>
            <p className=' ff_inter text-white text-[13px] md:text-[16px] font-medium text-center leading-[140%] pt-[16px]'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de <span className=' lg:block'> multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de</span> <span className=' lg:block'> juegos hasta que un día decidimos crear los propios.</span></p>
            <div className=' flex justify-center mt-[40px] z-10'>
            <div className='  relative '>
              <button className=' my_btn z-30 ff_inter font-bold text-[16px] text-[#00141b] py-[13px] px-[46px] rounded-[100px] bg_bttn'>Empezar</button>
              <div className=' z-[-2]'>
                <img className=' absolute bottom-[-5px] left-[-4px] z-[-2]' src={line} alt="" />
              </div>
            </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Myheader