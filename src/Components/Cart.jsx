import React from 'react'
import cart from "../Images/Cart.svg"

function Cart() {


    const sectionStyle = {
        backgroundImage: `url(${cart})`,
        backgroundSize: 'cover', // Adjust the background size if needed
        with: '140px',
        height: '76px', // Set a specific height
    };

    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <div className='xl:max-w-screen-xl m-auto mt-12 xl:mt-32 flex flex-col gap-14'>
            <div className='flex flex-col p-2 sm:p-0 text-center items-center justify-center '>
                <p style={linearGradientStyle} className='xl:text-[42px] text-3xl leading-none  '>Step boldly into the</p>
                <p style={linearGradientStyle} className='xl:text-[42px] text-3xl leading-loose  '>future of digital revolution with Tap and Tag</p>
                <span className='xl:text-[16px]  font-[inter] font-normal  text-sm text-[#AEB3B6]'>Select the card category that aligns most fittingly with your inclinations.</span>
            </div>
            <div class=" flex flex-wrap justify-center gap-5  md:gap-14    ">
                <div style={sectionStyle} class="flex items-center  font-[inter] font-bold justify-center text-white text-[20px]  w-[140px]   ">
                    <p>Classic</p>
                </div>
                <div style={sectionStyle} class="flex items-center  font-[inter] font-bold justify-center text-white text-[20px] w-[140px]   ">
                    <p>Wood</p>
                </div>
                <div style={sectionStyle} class="flex items-center  font-[inter] font-bold justify-center text-white text-[20px] w-[140px]   ">
                    <p>Metal</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
