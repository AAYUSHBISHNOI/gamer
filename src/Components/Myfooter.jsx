import React from 'react'
import logo from "../assets/img/logohead.svg";
import { Facebook, Instagram, Linkdin, Message, Phone } from './Mysvg';
import elone from "../assets/img/Ellipse23.png";
import eltwo from "../assets/img/Ellipse24.png";

const Myfooter = () => {
  return (
    <div className=' bg-black relative overflow-hidden'>
        <img className=' hidden xl:block absolute bottom-0' src={elone} alt="" />
        <img className=' hidden xl:block absolute right-0' src={eltwo} alt="" />
        <div className="container mx-auto max-w-[1164px]  px-4">
            <div className=' flex flex-wrap justify-between pt-10 md:pt-[64px]'>
                <div className=' w-[100%] sm:w-[60%] lg:w-[36%]'>
                    <img src={logo} alt="" />
                    <p className=' ff_inter text-[16px] lg:text-[15px] xl:text-[16px] font-medium text-[#cccccc] leading-[160%] pt-[16px]'>En Exclusive Games somos un equipo <span className=' lg:block'>apasionado de personas dedicadas al desarrollo</span> <span className=' lg:block'>de multiplataformas para juegos de azar</span></p>
                    <div className=' flex pt-2 md:pt-[24px] gap-3'>
                        <a href="https://www.instagram.com/"><Instagram/></a>
                        <a href="https://www.facebook.com/"><Facebook/></a>
                        <a href="https://www.linkedin.com/feed/"><Linkdin/></a>
                    </div>
                </div>
                <div className=' w-[100%] sm:w-[30%] lg:w-[18%] mt-5 sm:mt-0'>
                    <ul>
                        <li className=' text-[16px] font-bold ff_inter text-white leading-[160%]'>Menú principal</li>
                        <li className=' pt-2 md:pt-[16px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Hogar</a></li>
                        <li className=' pt-[6px] md:pt-[12px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Misión</a></li>
                        <li className=' pt-[6px] md:pt-[12px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Tragamonedas</a></li>
                        <li className=' pt-[6px] md:pt-[12px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Por qué elegirnos</a></li>
                        <li className=' pt-[6px] md:pt-[12px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Ofertas</a></li>
                    </ul>
                </div>
                <div className=' w-[100%] sm:w-[50%] lg:w-[18%] mt-5 lg:mt-0'>
                    <ul>
                        <li className=' text-[16px] font-bold ff_inter text-white leading-[160%]'>Atención al cliente</li>
                        <li className=' pt-2 md:pt-[16px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>¿Necesitas ayuda?</a></li>
                        <li className=' pt-[6px] md:pt-[12px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>política de privacidad</a></li>
                        <li className=' pt-[6px] md:pt-[12px]'><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>Términos de servicios</a></li>
                    </ul>
                </div>
                <div className=' w-[100%] sm:w-[50%] lg:w-[25%] mt-5 lg:mt-0'>
                    <ul>
                        <li className=' text-[16px] font-bold ff_inter text-white leading-[160%]'>Ponerse en contacto</li>
                        <li className=' pt-2 md:pt-[16px] flex  gap-2 items-center'><a href=""><Message/></a>
                        <a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'> juegosexclusivos@gmail.com</a>
                        </li>
                        <li className=' pt-[6px] md:pt-[12px] flex gap-2 items-center'>
                            <a href=""><Phone/></a><a href="" className=' text-[16px] font-medium ff_inter leading-[160%] text-[#cccccc] relative after:left-[50%] after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-5px] hover:after:left-0 after:duration-700 inline hover:after:w-full'>(101)342-7873</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=' w-full h-[1px] bg-[#191919] mt-[40px]'></div>
        <p className=' px-4 text-[#808080] mt-[20px] text-[14px] ff_inter font-medium pb-[20px] md:text-center'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
    </div>
  )
}

export default Myfooter