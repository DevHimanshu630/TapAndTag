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
                        <p className='text-[16px]  font-[inter] font-medium text-[#717171]'>All civil contracts for Part-A of HORC project have been awarded and </p>
                        <p className='text-[16px] font-[inter] font-medium text-[#717171]'>works are in progress. Contract of construction of 4.7 km Twin Tunnel </p>
                        <p className='text-[16px] font-[inter] font-medium text-[#717171]'>for Part B has been awarded and tenders for other packages of Part B</p>
                        <p className='text-[16px] font-[inter] font-medium text-[#717171]'>are in various stages of procurement. Govt. of Haryana is providing</p>
                        <p className='text-[16px] font-[inter] font-medium text-[#717171]'>necessary support in all fields viz land acquisition, forest clearance</p>
                        <p className='text-[16px] font-[inter] font-medium text-[#717171]'>and financing of project.</p>
                        <div className=" leading-none mt-3">
                        </div>
                        <p className='text-[#146C60] text-[19px]'>Full Name</p>
                        <p className='text-[16px] text-[#89939E]'>Designation of the card user</p>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[16px] text-[#717171]'>
                            All civil contracts for Part-A of HORC project have been awarded and works are in progress. Contract of construction of 4.7 km Twin Tunnel for Part B has been awarded and tenders for other packages of Part B are in various stages of procurement. Govt. of Haryana is providing necessary support in all fields viz land acquisition, forest clearance and financing of project.
                        </p>
                        <p className='text-[#146C60] mt-4 text-[19px]'>Full Name</p>
                        <p className='text-[16px] text-[#89939E]'>Designation of the card user</p>
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
