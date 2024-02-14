import React from 'react'
import { MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";




function Userdetails() {
    return (
        <div className=' w-[100vw] h-[100vh] flex xl:justify-center border bg-gray-50 p-2  '>
            <div className='xl:h-[55vh] bg-white shadow-sm rounded-md w-full xl:w-[70%] flex flex-col '>
                <div className=' bg-[#fcba03] font-sans rounded-md flex gap-4 items-center w-full p-2 md:p-0 xl:pl-2 xl:h-48'>
                    <div className='border w-36 h-36 bg-white rounded-full'></div>
                    <div className='flex text-white text-lg flex-col'>
                        <span>Himanshu</span>
                        <span>Team Lead</span>
                        <span>Molog</span>
                    </div>
                </div>
                <div className='  p-2'>
                    <div>
                        <button className=' border w-full h-10 rounded-md font-sans bg-[#8803fc] text-white'>Download vCard</button>
                    </div>
                    <div className='flex gap-3 font-sans font-extralight  mt-4 flex-col'>
                        <div className='flex   flex-col leading-5'>
                            <span className='flex  items-center gap-2'>
                                <MdPhone />
                                Phone</span>
                            <span className='text-gray-400 '>+9999993242</span>
                        </div>
                        <div className='flex flex-col leading-5'>
                            <span className='flex items-center gap-2'><TfiEmail />
                                Email</span>
                            <span className='text-gray-400 '>Team@gmail.com</span>
                        </div>

                        <div className='flex flex-col leading-5'>
                            <span className='flex items-center gap-2'>
                                <SlLocationPin />
                                Addres</span>
                            <span className='text-gray-400 '>Delhi</span>
                        </div>
                        <div className='flex flex-col leading-5'>
                            <span className='flex items-center gap-2'><CiGlobe />
                                Website</span>
                            <span className='text-gray-400 '>https://www.molog.in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetails
