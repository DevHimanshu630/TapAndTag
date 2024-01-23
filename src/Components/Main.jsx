import React from 'react'
import MologLogo from "../Images/molog logo 1.svg"
import phone from "../Images/phone.png"
import Cart from './Cart'



function Main() {

    const boxShadowStyle = {
        boxShadow: '5px 10px 14px 3px gray',
    };



    return (
        <>
            <div className='flex max-w-screen-xl pt-52 mx-auto items-center justify-between'>
                <div className='flex flex-col gap-10'>
                    <div className='leading-none'>
                        <p className='text-[75px]  text-[#146C60]'>The professional way</p>
                        <p className='text-[85px]   text-[#022D24]'>for networking</p>
                        <span style={{ fontFamily: "Open Sans" }} className=' text-[22px] text-[#717171]'>For those aiming to leave a fantastic initial impact.</span>
                    </div>
                    <div>
                        <button className='btn-hover color-5 '>
                            Get Your Card
                        </button>
                    </div>
                </div>
                <div className=''>
                    <div className='w-[424px] shadow-[rgba(0,_0,_0,_0.44)_6px_5px_12px] flex flex-col justify-between h-[230px] p-10 bg-[#F5F2F0]   rounded-xl '>
                        <div className='leading-3 '>
                            <div><span className='text-[19px]'>FULL NAME</span></div>
                            <div><span className='text-[11px]'>Employee’s Designation</span></div>
                            <div><span className='text-[11px]'>+91 7047017862</span></div>
                        </div>
                        <div className='flex  w-full   items-end justify-end '>
                            <img src={MologLogo} class=" h-[91px] mt-10 " alt="Molog Logo" />
                        </div>
                    </div>

                </div>
            </div >
            <section className='mt-32  '>
                <img src='/Group2.png' className='    w-full ' alt="" />
            </section>

        </>
    )
}

export default Main
