import React from 'react'
import cart from "../Images/Cart.svg"

function Cart() {
    return (
        <div className='max-w-screen-xl m-auto mt-32 flex flex-col gap-10'>
            <div className='flex flex-col items-center justify-center leading-10'>
                <p className='text-[42px]'>Explore what resonates best with your preferences.</p>
                <span className='text-[16px] text-[#AEB3B6]'>Select the card category that aligns most fittingly with your inclinations.</span>
            </div>
            <div class=" flex justify-center  gap-14    ">
                <div class="flex items-center  w-[140px]   ">
                    <img src={cart} alt="classic" />
                </div>
                <div class="flex items-center  w-[140px]   ">
                    <img src={cart} alt="wood" />
                </div>
                <div class="flex items-center  w-[140px]   ">
                    <img src={cart} alt="metal" />
                </div>
            </div>
        </div>
    )
}

export default Cart
