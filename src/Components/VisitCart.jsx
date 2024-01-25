import React from 'react'
import people from '../Images/Vector.svg'
import scan from '../Images/Vector1.svg'
import carts from '../Images/Vector3.svg'
import hand from '../Images/Group99.svg'

function VisitCart() {
    return (
        <div className='w-full bg-[#FAF9F6] my-10 xl:my-24 h-[288px] py-5 xl:py-20'>

            <div className='flex xl:max-w-screen-xl flex-wrap md:flex-nowrap gap-12 xl:px-10 items-center justify-evenly  m-auto'>
                <div className=' w-full xl:py-3 text-center md:text-start '>
                    <p className='xl:text-[40px] leading-tight text-2xl'>The unseen potential of sustainable</p>
                    <p className='xl:text-[40px] text-xl text-[#146C60]'>digital visiting cards awaits discovery.</p>
                    <p className='xl:text-[20px] text-[#9F9F9F] mt-3'>Revolutionizing Government Networking</p>
                </div>
                <div className='flex  items-center  justify-evenly w-full '>
                    <div className='flex flex-col gap-5 xl:gap-10'>
                        <div className=' flex gap-3'>
                            <img src={people} alt="" />
                            <div className=' leading-5 flex flex-col xl:gap-3'>
                                <p className='xl:text-[28px] text-[#4D4D4D]'>241</p>
                                <p className='xl:text-[16px] text-[#717171]'>Cards generated</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <img src={carts} alt="" />
                            <div className=' leading-5 flex flex-col xl:gap-3'>
                                <p className='xl:text-[28px] text-[#4D4D4D]'>4</p>
                                <p className='xl:text-[16px] text-[#717171]'>Types of Cards</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 xl:gap-10'>
                        <div className=' flex gap-3'>
                            <img src={scan} alt="" />

                            <div className=' leading-5 flex flex-col xl:gap-3'>
                                <p className='xl:text-[28px] text-[#4D4D4D]'>46.3k</p>
                                <p className='xl:text-[16px] text-[#717171]'>Scans</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <img src={hand} className='' alt="" />
                            <div className=' leading-5 flex flex-col xl:gap-3'>
                                <p className='xl:text-[28px] text-[#4D4D4D]'>1.9k</p>
                                <p className='xl:text-[16px] text-[#717171]'>Trees saved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitCart
