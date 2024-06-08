import React from 'react'
import { Link } from 'react-router-dom'

function LandingFooter() {
  return (
    
    <div className=' w-full bg-gradient-to-t to-gray from-black opacity-100 bg-[#0000002c] absolute flex md:justify-center md:gap-[15%] gap-[5%] item-center bottom-0 z-10 '>
        <span className='flex flex-col md:w-[20%] w-[60%] md:text-justify md:justify-around md:my-[2vw] m-[2vw] my-[3vw] md:h-full md:gap-[3vw] gap-[5vw] '>

            <img src="/tatlogo.svg" className='w-[50%]' alt="" />
            <p className='font-[400] md:text-[0.7vw] text-[2.5vw] text-white leading-tight fontopen'>2023 MOLOG OPC Pvt. Ltd. All rights reserved. All data were deemed correct at the time of creation.
                 MOLOG is not liable for errors or omissions. All brand, product, service names and logos are trademarks and/or registered trademarks 
                 of their respective owners and are hereby recognized and acknowledged. www.molog.in</p>
            <div className='flex gap-[2vw] '>
                <img src="/v1.svg" className='md:w-[1.5vw] w-[3vw]' alt="" />
                <img src="/v2.svg" className='md:w-[1.5vw] w-[3vw]' alt="" />
                <img src="/v3.svg" className='md:w-[1.5vw] w-[3vw]' alt="" />
            </div>
        </span>
        <div className='flex flex-col text-white md:w-[20%] w-[40%] font-[400] md:text-[1vw] text-[2.5vw] gap-[25%] md:mt-[5%] mt-[15%] md:justify-center'>
        <span className='flex gap-[4vw]'>
            <div className='flex flex-col'>
                <Link to={'/product'}><p>Product</p></Link>
                <Link to={'sustainability'}><p>Sustainability</p></Link>
                <Link to={'qrform'}><p>Order now</p></Link>
                <Link to={'/product'}><p>How it works</p></Link>
            </div>
            <div className='flex flex-col md:gap-[0.25vw]'>
                <Link to={'/product'}><p>Faq</p></Link>
                <p>Support</p>
                <Link to={'/product'}><p>Features</p></Link>
            </div>
            
        </span>
        <p className='fontopen'>813, Phase V, Udyog Vihar, Gurgaon 122016</p>
        </div>
    </div>
  )
}

export default LandingFooter