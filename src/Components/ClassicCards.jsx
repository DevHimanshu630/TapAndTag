import React, { useState } from 'react'
// import classicmobile from "../Images/classicmobile.svg"
// import classichip from "../Images/classicchip.svg"
// import classiandoride from "../Images/andoride.svg"
// import carbon_sustainability from "../Images/carbon_sustainability.svg"
import { SiIos } from "react-icons/si";


function ClassicCards() {
    const styleborder = {
        boxShadow: "3px 3px  #022D24"  // Replace #FF0000 with your desired color
    }

    const radialGradient = {
        background: 'radial-gradient(circle at center, #146C60, #022D24)'  // Colors with 100% opacity
    };



    return (
        <div className=' max-w-screen-xl m-auto flex flex-wrap gap-6 flex-col items-center  '>

            <div className='flex flex-wrap gap-10 xl:p-8' >
                <div className='flex flex-col flex-wrap gap-4 '>

                    <div
                        style={radialGradient}
                        className='borde text-white flex gap-8 xl:pl-10 pl-5 p-3 items-center leading-none xl:p-8 xl:w-[422px] h-[141px] text-center rounded-xl text-[24px]'>
                        <img src={"classicmobile"} alt="" />
                        <div className='flex flex-col  gap-2 justify-start items-start'>
                            <span className='xl:text-[28px] text-lg'>Unlimited Taps</span>
                            <div className='flex flex-col items-start'>
                                <span className='text-[12px]'>Tap your card on a phone and share </span>
                                <span className='text-[12px]'>your contact details without contact.</span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={radialGradient}
                        className='borde text-white flex gap-4 xl:pl-10 pl-5 p-3 items-center leading-none xl:p-8 xl:w-[422px] h-[141px] text-center rounded-xl xl:text-[24px]'>
                        <div className='flex items-center  divide-gray-50 justify-center gap-1.5 '>
                            <img src={"classiandoride"} alt="" />
                            <div className='border-r border h-4 '></div>
                            <SiIos size={32} className='pl-1' />
                        </div>
                        <div className='flex flex-col  gap-2 justify-start items-start'>
                            <span className='xl:text-[28px] text-lg'>Device Support</span>
                            <div className='flex flex-col text-left items-start'>
                                <span className='text-[12px]'>Works on both Android and ios devices </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div
                        style={radialGradient}
                        className='borde text-white flex gap-8 xl:pl-10  pl-5 p-3 items-center leading-none xl:p-8 xl:w-[422px] h-[141px] text-center rounded-xl xl:text-[24px]'>
                        <img src={"classichip"} alt="" />
                        <div className='flex flex-col  gap-2 justify-start items-start'>
                            <span className='xl:text-[28px] text-lg'>NFC Chips</span>
                            <div className='flex flex-col items-start'>
                                <span className='text-[12px]'>Works better than a business card. </span>
                                <span className='text-[12px]'>Share and become a trusted contact.</span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={radialGradient}
                        className='borde text-white flex gap-8 xl:pl-10 pl-5 p-3  items-center leading-none xl:p-8 xl:w-[422px] h-[141px] text-center rounded-xl xl:text-[24px]'>
                        <img src={"carbon_sustainability"} alt="" />
                        <div className='flex flex-col  gap-2 justify-start items-start'>
                            <span className='xl:text-[28px] text-lg'>Sustainibility</span>
                            <div className='flex flex-col items-start'>
                                <span className='text-[12px] text-left'>Limit your carbon footprint by reducing </span>
                                <span className='text-[12px]'>your reliance on environment.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ClassicCards
