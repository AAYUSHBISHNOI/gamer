import React from 'react'
import Logo1 from '../../assets/img/logohead.svg'

function Preloader() {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        document.body.classList.remove("overflowhidden");
    },3000);
  return (
    <div>
  <div id='preloader' className='preloader fixed top-0 start-0 bottom-0 min-h-screen w-full bg-black z-50 flex items-center justify-center'>
                <div className='text-white text-center text-[25px] sm:text-[70px] animate-bounce w-full justify-center flex'>
                    <img className=' w-[10%]' src={Logo1} alt="preloader-logo" />
                </div>
            </div>
    </div>
  )
}

export default Preloader