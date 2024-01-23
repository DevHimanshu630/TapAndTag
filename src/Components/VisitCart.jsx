import React from 'react'
import people from '../Images/Vector.svg'
import scan from '../Images/Vector1.svg'
import carts from '../Images/Vector3.svg'
import hand from '../Images/Group99.svg'

function VisitCart() {
    return (
        <div className='w-full bg-[#FAF9F6] my-24 h-[288px] py-20'>

            <div className='flex max-w-screen-xl px-10 items-center justify-evenly  m-auto'>
                <div className=' w-full py-5 leading-none'>
                    <p className='text-[40px]'>The unseen potential of sustainable</p>
                    <p className='text-[40px] text-[#146C60]'>digital visiting cards awaits discovery.</p>
                    <p className='text-[20px] text-[#9F9F9F] mt-3'>Revolutionizing Government Networking</p>
                </div>
                <div className='flex items-center  justify-evenly w-full '>
                    <div className='flex flex-col gap-10'>
                        <div className=' flex gap-3'>
                            <img src={people} alt="" />
                            <div className=' leading-5'>
                                <p className='text-[28px] text-[#4D4D4D]'>241</p>
                                <p className='text-[16px] text-[#717171]'>Cards generated</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <img src={carts} alt="" />
                            <div className=' leading-5'>
                                <p className='text-[28px] text-[#4D4D4D]'>4</p>
                                <p className='text-[16px] text-[#717171]'>Types of Cards</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className=' flex gap-3'>
                            <img src={scan} alt="" />

                            <div className=' leading-5'>
                                <p className='text-[28px] text-[#4D4D4D]'>46.3k</p>
                                <p className='text-[16px] text-[#717171]'>Scans</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <img src={hand} className='' alt="" />
                            <div className=' leading-5'>
                                <p className='text-[28px] text-[#4D4D4D]'>1.9k</p>
                                <p className='text-[16px] text-[#717171]'>Trees saved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitCart
