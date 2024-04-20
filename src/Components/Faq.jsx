import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
// import faq from "../Images/faq.svg"


function Faq() {

    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const toggleFAQ = (button) => {
        const content = button.nextElementSibling;
        button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
        content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
    };

    return (
        <div className='bg-[#FAF9F6] xl:py-32  py-4  w-full '>
            <div className=" items-center justify-evenly xl:gap-14 m-auto max-w-screen-lg  flex flex-wrap ">
                <div className="flex flex-col  leading-tight text-left py-3 md:py-0 ">
                    <p style={linearGradientStyle} className='text-[48px]'>Frequently</p>
                    <p style={linearGradientStyle} className='text-[48px]'> Asked Questions</p>
                    <img src={"faq"} alt="" className='h-[123px] ml-12 mt-10 w-[123px]' />
                </div>
                <ul className="xl:basis-1/2 p-4 xl:p-0">
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">The most popular option for digital business cards ?</span>
                            <MdKeyboardArrowRight className='text-[#717171]' />
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Can I order multiple Digital Tap & Tag cards ?</span>
                            <MdKeyboardArrowRight className='text-[#717171]' />
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 text-[16px] font-sans font-normal leading-relaxed text-[#717171]">Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Privacy related question ?</span>
                            <MdKeyboardArrowRight className='text-[#717171]' />
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 text-[16px] font-sans font-normal leading-relaxed text-[#717171]">There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded="false"
                            onClick={(e) => toggleFAQ(e.currentTarget)}>
                            <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">The most popular option for digital business cards ?</span>
                            <MdKeyboardArrowRight className='text-[#717171]' />
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 text-[16px] font-sans font-normal leading-relaxed text-[#717171]">There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Faq;
