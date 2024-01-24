import React from 'react'
import cart from "../Images/Cart.svg"

function Cart() {


    const sectionStyle = {
        backgroundImage: `url(${cart})`,
        backgroundSize: 'cover', // Adjust the background size if needed
        with: '140px',
        height: '76px', // Set a specific height
    };


    return (
        <div className='max-w-screen-xl m-auto mt-32 flex flex-col gap-14'>
            <div className='flex flex-col items-center justify-center leading-10'>
                <p className='text-[42px] text-[#146C60]'>Explore what resonates best with your preferences.</p>
                <span className='text-[16px] text-[#AEB3B6]'>Select the card category that aligns most fittingly with your inclinations.</span>
            </div>
            <div class=" flex justify-center  gap-14    ">
                <div style={sectionStyle} class="flex items-center justify-center text-white text-[20px]  w-[140px]   ">
                    <p>Classic</p>
                </div>
                <div style={sectionStyle} class="flex items-center justify-center text-white text-[20px] w-[140px]   ">
                    <p>Wood</p>
                </div>
                <div style={sectionStyle} class="flex items-center justify-center text-white text-[20px] w-[140px]   ">
                    <p>Metal</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
