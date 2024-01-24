import React from 'react'
import MologLogo from "../Images/molog logo 1.svg"
import phone from "../Images/phone.png"
import back from '../Images/Group2.png'




function Main() {

    const styleborder = {
        boxShadow: "-6px -6px 6px 0px #F5F2F0, 4px 4px 4px 0px #022D2440, 3px 3px 6px 3px #F5F2F0"
    };


    const sectionStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover', // Adjust the background size if needed
        height: '684px', // Set a specific height
    };


    return (
        <>
            <div className='flex max-w-screen-xl pt-52 px-8 mx-auto items-center justify-between'>
                <div className='flex flex-col gap-10'>
                    <div className='leading-none'>
                        <p className='text-[75px]  text-[#146C60]'>The professional way</p>
                        <p className='text-[85px] tracking-wide   text-[#022D24]'>for networking</p>
                        <span style={{ fontFamily: "Open Sans" }} className=' text-[20px] text-[#717171]'>For those aiming to leave a fantastic initial impact.</span>
                    </div>
                    <div>
                        <button className='btn-hover color-5 '>
                            Get Your Card
                        </button>
                    </div>
                </div>
                <div className=''>
                    <div style={styleborder} className='w-[424px]  flex flex-col justify-between h-[230px] p-10 bg-[#F5F2F0]   rounded-xl '>
                        <div className=' '>
                            <p className='text-[19px] text-[#1C1C1C]'>FULL NAME</p>
                        </div>
                        <div className='flex flex-col gap-1 leading-4 mt-1'>
                            <span className='text-[12px] text-gray-600 font-light  font-[Poppins]'>Employee’s Designation</span>
                            <span className='text-[12px] text-gray-600 font-light font-[Poppins]'>+91 7047017862</span>
                        </div>

                        <div className='flex  w-full   items-end justify-end '>
                            <img src={MologLogo} class=" h-[91px] mt-10 " alt="Molog Logo" />
                        </div>
                    </div>

                </div>
            </div >
            <section style={sectionStyle} className='mt-32 flex items-center justify-center '>
                <img src={phone} alt="" />
            </section>

        </>
    )
}

export default Main
