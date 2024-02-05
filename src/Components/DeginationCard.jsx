import React from 'react'
import dCard from "../Images/dCard.svg"
import img1 from "../Images/img1.svg"
import img2 from "../Images/img2.svg"
import img3 from "../Images/img3.svg"
import img4 from "../Images/img4.svg"
import { IoIosArrowRoundForward } from "react-icons/io";



function DeginationCard() {


    const imgmenu = {
        imageUrl1: img1,
        imageUrl2: img2,
        imageUrl3: img3,
        imageUrl4: img4,

    }


    return (
        <div className='w-full bg-[#FAF9F6] my-12 xl:my-32'>
            <div className=' max-w-screen-xl xl:py-16 py-4 xl:pl-10  m-auto xl:gap-16 flex flex-wrap justify-evenly items-center '>
                <div className=''>
                    <img src={dCard} alt="card" />
                </div>
                <div className=' xl:w-[50%] p-3 text-justify flex flex-col gap-5'>
                    <div className='hidden md:block'>
                        <p className=' font-[inter] font-medium  text-[#717171]'>Tap and Tag transcends the ordinary; it's not just a card – it's a</p>
                        <p className=' font-[inter] font-medium text-[#717171]'>commitment to a sustainable future. Powered by cutting-edge </p>
                        <p className=' font-[inter] font-medium text-[#717171]'>encrypted NFC technology, rest assured your information is a fortress,</p>
                        <p className=' font-[inter] font-medium text-[#717171]'>and exchanges are as reliable as the dawn. Customize your digital </p>
                        <p className=' font-[inter] font-medium text-[#717171]'>cards, breaking free from the constraints of traditional paper,</p>
                        <p className=' font-[inter] font-medium text-[#717171]'>enhancing their utility in ways previously unimagined.</p>
                        <div className=" leading-none mt-3">
                        </div>
                        <p className='text-[#146C60] text-[20px]'>Full Name</p>
                        <p className='text-[16px] text-[#89939E]'>Designation of the card user</p>
                    </div>
                    <div className=' md:hidden'>
                        <p className='text-[16px] text-[#717171]'>
                            Tap and Tag transcends the ordinary; it's not just a card – it's a commitment to a sustainable future. Powered by cutting-edge encrypted NFC technology, rest assured your information is a fortress, and exchanges are as reliable as the dawn. Customize your digital cards, breaking free from the constraints of traditional paper, enhancing their utility in ways previously unimagined.                        </p>
                        <p className='text-[#146C60] md:hidden font-normal mt-4 text-[20px]'>Full Name</p>
                        <p className='text-[16px] md:hidden text-[#89939E]'>Designation of the card user</p>
                    </div>

                    <div className='flex flex-wrap mt-4 gap-10 items-center '>
                        {Object.keys(imgmenu).map((key, index) => (
                            <img key={index} src={imgmenu[key]} alt={`Image ${index + 1}`} />
                        ))}
                        <span className='text-[20px] text-[#146C60]'>Meet all card holders</span><IoIosArrowRoundForward />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeginationCard
