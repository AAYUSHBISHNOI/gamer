import React from 'react'
import spinner from "../assets/img/spinner.png";
import under from "../assets/img/spinnerunder.png";
import { Doubletick, Tick, Underline, Underlinegreen } from './Mysvg';
import roll from "../assets/img/greenroll.svg";
import card from "../assets/img/one.svg";
import one from "../assets/img/twoa.svg";
import dice from "../assets/img/dice.svg";
import group from "../assets/img/Group.png";
import btnwhite from "../assets/img/btnwhite.png";
import btgr from "../assets/img/btnline.png";
import imgwhi from "../assets/img/btnwhite.png";
import elpsa from "../assets/img/Ellipse16.png";
import elpse from "../assets/img/Ellipse16.png";
import mye from "../assets/img/Ellipse26.png";
import myel from "../assets/img/Ellipse27.png";

const Ofertas = () => {
  return (
    <div className=' relative  px-4'>
        <img className=' hidden xl:block absolute left-0 top-[50%]' src={mye} alt="" />
        <img className=' hidden xl:block absolute right-0 bottom-[-25%]' src={myel} alt="" />
        {/* <div className=' rounded-[484px] h-[484px] w-[484px] opacity-50 elpsise absolute bottom-[15%] left-[-18%]'></div> */}
        {/* <div className=' rounded-[484px] h-[484px] w-[484px] opacity-50 elpsise absolute bottom-[1%] right-[-30%]'></div> */}
        <img className='  hidden lg:block absolute top-[9%] left-[17%]' src={elpsa} alt="" />
        <img className='  hidden lg:block absolute bottom-[9%] right-[18%]' src={elpse} alt="" />
        <div className="container mx-auto max-w-[1164px] mt-10 md:pt-20 lg:pt-[100px]">
            <p className=' text-[48px] font-normal text-white ff_Anton text-center leading-[120%]'>Nuestras ofertas</p>
            <p className=' text-[16px] font-medium text-white ff_inter text-center leading-[160%]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
            <div className=' bg_silver_card w-[99%] xl:w-[1140px] h-[100%] xl:h-[627px] mt-10 md:mt-[60px] relative'>
               <div className=' flex flex-wrap lg:items-center px-[20px] pt-5 pb-5 md:pb-10 md:pt-[45px]'>
                <div className=' w-[100%] lg:w-[50%]'>
                    <div className=' flex flex-col justify-center '>
                        <img className='w-[100%]' src={spinner} alt="" />
                        <img className=' mix-blend-multiply mt-3 md:mt-[24px] w-[100%]' src={under} alt="" />
                    </div>
                </div>
                <div className=' w-[100%] lg:w-[40%] mt-10 md:mt-0'>
                    <p className=' text-[32px] text-white font-normal ff_Anton leading-[130%]'>Silver</p>
                    <p className=' text-[#cdd2d3] font-medium ff_inter text-[16px] leading-[160%] pt-1 md:pt-[16px]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                    <p className=' text-[48px] font-normal ff_Anton text-white pt-5 md:pt-7 lg:pt-[32px]'>$5000</p>
                    <div className=' flex gap-2'>
                        <Tick/>
                        <p className=' text-[#cdd2d3] font-medium ff_inter text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[160%] '>Disponibles Payku, Pix, Depósitos en Euros, <span className=' lg:block'> Criptomonedas, Cargas manuales</span></p>
                    </div>
                    <div className=' flex gap-2 mt-2 md:mt-[12px]'>
                        <Tick/>
                        <p className=' text-[#cdd2d3] font-medium ff_inter text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[160%] '>Control de RTP (controlás qué porcentaje pagar)</p>
                    </div>
                    <div className=' flex gap-2 mt-2 md:mt-[12px]'>
                        <Tick/>
                        <p className=' text-[#cdd2d3] font-medium ff_inter text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[160%] '>Bonos Editables, Happy Hours, Jackpots, Códigos <span className=' lg:block'>Promocionales Regalo</span></p>
                    </div>
                    <div className=' flex gap-2 mt-2 md:mt-[12px]'>
                        <Tick/>
                        <p className=' text-[#cdd2d3] font-medium ff_inter text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[160%] '>Aplicación para Android y Windows de regalo.</p>
                    </div>
                    <div className=' flex gap-2 mt-2 md:mt-[12px]'>
                        <Tick/>
                        <p className=' text-[#cdd2d3] font-medium ff_inter text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] leading-[160%] '>Tiempo de creación 2 a 3 semanas</p>
                    </div>
                    <div className=' relative mt-[40px] z-50'>
                    <button className=' text-white text-[16px] font-bold ff_inter py-[13px] px-[43px] my_btnn'>Comprar ahora</button>
                      <div className=' absolute bottom-[-6px] left-[-6px] z-[-2]'>
                        <img className=' z-[-2]' src={btnwhite} alt="" />
                      </div>
                    </div>
                </div>
               </div>
            </div>
            <div className=' bg_luxury relative py-[30px] px-[10px] md:py-[46px] mt-10 md:mt-[64px]'>
                <img className=' absolute hidden lg:block lg:left-[10%] xl:left-[15%] top-[15%]' src={roll} alt="" />
                <img className=' absolute hidden lg:block lg:left-[5%] xl:left-[10%] bottom-[18%]' src={card} alt="" />
                <img className=' absolute hidden lg:block lg:right-[6%] xl:right-[12%] top-[13%]' src={one} alt="" />
                <img className=' absolute hidden lg:block lg:right-[10%] xl:right-[15%] bottom-[20%]' src={dice} alt="" />
                <p className=' text-[32px] font-normal text-white ff_Anton text-center leading-[130%]'>Luxury</p>
                <p className=' text-[#cdd5d6] text-[16px] font-medium ff_inter text-center leading-[160%]'>lleva tu experiencia de juego al siguiente nivel. Con <span className=' lg:block'>todas las características de la versión Silver y la</span><span className=' lg:block'> potencia adicional de la tecnología React .</span></p>
                <p className=' text-[48px] font-normal text-white ff_Anton text-center leading-[120%] mt-[32px]'>$9000</p>
                    <div className=' flex justify-center'>
                    <div className=' flex items-start flex-col'>
                        <div className='flex w-full gap-2 mt-[16px]'>
                            <Doubletick/>
                            <p className=' text-center w-full text-[#cdd2d4] font-medium text-[13px] md:text-[16px] ff_inter'>Disponibles Payku, Pix, Depósitos en Euros, <span className=' lg:block'>Criptomonedas, Cargas manuales</span></p>
                        </div>
                        <div className='flex w-full gap-2 mt-[12px]'>
                            <Doubletick/>
                            <p className=' text-center w-full text-[#cdd2d4] font-medium text-[13px] md:text-[16px] ff_inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='flex w-full gap-2 mt-[12px]'>
                            <Doubletick/>
                            <p className=' text-center w-full text-[#cdd2d4] font-medium text-[13px] md:text-[16px] ff_inter'>Bonos Editables, Happy Hours, Jackpots, Códigos <span className=' lg:block'>Promocionales Regalo</span></p>
                        </div>
                        <div className='flex w-full gap-2 mt-[12px]'>
                            <Doubletick/>
                            <p className=' text-center w-full text-[#cdd2d4] font-medium text-[13px] md:text-[16px] ff_inter'>Aplicación para Android y Windows de regalo.</p>
                        </div>
                        <div className='flex w-full gap-2 mt-[12px]'>
                            <Doubletick/>
                            <p className=' text-center w-full text-[#cdd2d4] font-medium text-[13px] md:text-[16px] ff_inter'>Tiempo de creación 2 a 3 semanas</p>
                        </div>
                    </div>
                    </div>
                    <div className=' mt-5 md:mt-[36px] flex justify-center'>
                    <div className=' relative z-[10]'>
                        <button className=' my_btn ff_inter font-bold text-[16px] text-[#00141b] py-[13px] px-[46px] rounded-[100px] bg_bttn'>Comprar ahora</button>
                    <div>
                        <img className=' absolute bottom-[-6px] left-[-6px] z-[-2]' src={btgr} alt="" />
                    </div>
                    </div>
                    </div>
                    
            </div>
            <div className="bg_silver_card w-[99%] xl:w-[1140px] h-[100%] xl:h-[575px] mt-10 lg:mt-[64px] relative py-10 md:py-16 lg:py-[80px] px-[20px] md:px-[45px]">
               <div className=' flex flex-wrap items-center'>
                <div className=' w-[100%] md:w-[50%]'>
                <p className=' text-white text-[32px] font-normal ff_Anton'>Platinum</p>
                <p className=' text-[#ced4d4] text-[16px] font-medium ff_inter leading-[160%] mt-2 md:mt-[16px]'>Diseño totalmente personalizado. Contáctanos <span className=' lg:block'>para un presupuesto.</span></p>
                <p className=' text-[40px] md:text-[48px] font-normal text-white ff_Anton leading-[120%] mt-5 md:mt-[32px]'>Consultar precio</p>
                <div className='flex gap-2 mt-3 md:mt-[24px]'>
                    <Doubletick/>
                    <p className=' text-center text-[#cdd2d4] font-medium text-[16px] ff_inter'>Personalizable </p>
                </div>
                <div className=' mt-5 md:mt-[36px] relative z-50'>
                        <button className=' ff_inter font-bold text-[16px] text-[#fff] py-[13px] px-[46px] my_btnn'>Comprar ahora</button>
                        <div className=' z-[-2]'>
                            <img className=' z-[-2] absolute bottom-[-6px] left-[-5px]' src={imgwhi} alt="" />
                    </div>
                </div>
                </div>
                <div className=' w-[100%] md:w-[50%] mt-10'>
                    <img src={group} alt="" />
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Ofertas