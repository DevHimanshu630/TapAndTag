import React from 'react'
import MologLogo from "../Images/molog logo 1.svg"
import phone from "../Images/phone.png"
import back from '../Images/Group2.png'
import { Link } from 'react-router-dom';




function Main() {

    const styleborder = {
        boxShadow: "-6px -6px 6px 0px #F5F2F0, 4px 4px 4px 0px #022D2440, 3px 3px 6px 3px #F5F2F0"
    };


    const sectionStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover', // Adjust the background size if needed

    };

    function toggleOverlay() {
        var overlay = document.getElementById('overlay');
        overlay.classList.toggle('opacity-0');
        overlay.classList.toggle('opacity-100');
        overlay.classList.toggle('pointer-events-none');
        overlay.classList.toggle('pointer-events-auto');
    }


    return (
        <>
            <div className='flex flex-wrap xl:max-w-screen-xl xl:pt-52 pt-24 xl:px-8 p-5 gap-16 xl:gap-0 mx-auto items-center justify-between'>
                <div className='flex flex-col gap-10'>
                    <div className=' '>
                        <p className='md:text-[75px] leading-10 text-3xl  text-[#146C60]'>The professional way</p>
                        <p className='md:text-[85px]  leading-tight text-3xl   tracking-wide   text-[#022D24]'>for networking</p>
                        <span className=' xl:text-[16px] font-sans leading-loose font-light text-sm text-[#717171]'>For those aiming to leave a fantastic initial impact.</span>
                    </div>
                    <div>
                        <button className='btn-hover  color-5 '>
                            <Link to={'/qrform'}>
                            Get Your Card
                            </Link>
                        </button>
                    </div>


                </div>
                <div className=''>
                    <div style={styleborder} className='xl:w-[424px] w-[300px] h-[150px] flex flex-col justify-between xl:h-[230px] p-3 xl:p-10 bg-[FAF9F4] rounded-xl '>
                        <div className=' '>
                            <p className='xl:text-[19px] text-[#1C1C1C]'>FULL NAME</p>
                        </div>
                        <div className='flex flex-col gap-1 md:leading-4 mt-1'>
                            <span className='md:text-[11px]  text-[9px] text-gray-600 font-light  font-[Poppins]'>Employee’s Designation</span>
                            <span className='md:text-[11px] text-[9px] text-gray-600 font-light font-[Poppins]'>+91 7047017862</span>
                        </div>

                        <div className='flex  w-full   items-end justify-end '>
                            <img src={MologLogo} class=" xl:h-[91px] h-14 xl:mt-10 mt-4 " alt="Molog Logo" />
                        </div>
                    </div>

                </div>
            </div >
            <section style={sectionStyle} className='xl:mt-32 mt-10  xl:h-[684px] flex items-center justify-center '>
                <img src={phone} alt="" />
            </section>

        </>
    )
}

export default Main
