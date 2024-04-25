import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import faq from "../Images/faq.svg"


function Faq() {

    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const toggleFAQ = (button, id) => {
        if(id){const ele = document.getElementById(id);
        const content2 = ele.nextElementSibling;
        ele.setAttribute("aria-expanded", ele.getAttribute("aria-expanded") === "false")
        content2.style.maxHeight = "0";}
        const content = button.nextElementSibling;
        button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
        content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight+ 5 + "px" : "0";
        
    };

    return (
        <div className='bg-[#FAF9F6] xl:py-32  py-4  w-full '>
            <div className=" items-center justify-evenly xl:gap-14 m-auto max-w-screen-lg  flex flex-wrap ">
                <div className="flex flex-col  leading-tight text-left py-3 md:py-0 ">
                    <p style={linearGradientStyle} className='text-[48px]'>Frequently</p>
                    <p style={linearGradientStyle} className='text-[48px]'> Asked Questions</p>
                    <img src={faq} alt="" className='h-[123px] ml-12 mt-10 w-[123px]' />
                </div>
                <ul className="xl:basis-1/2 flex flex-col p-4 xl:p-0">
                    {/* <li>
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
                     */}
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg border-base-content/10"
                            aria-expanded="false"
                            id='down1'
                            onClick={(e) => toggleFAQ(e.currentTarget, 'down2')}>
                            <span className="flex-1 text-base-content text-[16px] font-sans font-bold text-[#717171]">Most Commonly Asked</span>
                            <MdKeyboardArrowRight className='text-[#717171]' />
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <ul >
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Is My Phone NFC Compatible ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] font-sans font-normal leading-relaxed text-[#717171]">Open “Settings” On Your Smartphone Device. Go to Search Option and Type “NFC” Or “Near Field Communication” If you see the app showing results, then your smartphone supports NFC technology.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Does using Tap & Tag Business Cards require mobile internet ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Android  phones don't require Internet and Apple IPhone requires Internet.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">What does tap & tag cost? Are there any additional costs ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">All Tap Tag products come with completely free-forever software that you may use to set up and edit a digital business card profile or your review profile. This service is provided to you for free, no purchase necessary.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Is There A QR Code Available On The Card?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes, QR code is available on the card as an alternative if the phone doesn’t have NFC.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">What is the purpose of QR Code?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">All you have to do is open your camera or QR Code reader app, scan the Code and save the contact info with a tap. QR Code is the digital version of a business card that can easily be saved on a smart device.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]"> How do digital business cards work ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Our cards come with NFC technology which allows information to be transferred with just a tap on a smartphone. NFC can be scanned from a distance of about 3 inches on most phones.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Can I update my digital business card after it has been shared ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes, you can update your card with new information or changes simply through your dashboard and easily distribute the updated version to your contacts.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">What happens if I lose access to my digital business card ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">If you lose access then you can directly deactivate the card through your dashboard and all the information will be erased instantly.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]"> Does Tap & Tag have bulk pricing for its cards ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes! Any order of 5 of the same item or above qualifies for bulk pricing discounts. Automatic discounts would show up in the cart before checkout.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]"> Are digital business cards secure ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes, Our cards are fully encrypted, ensuring data integrity and security.</div>
                                    </div>
                                </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  md:text-lg border-base-content/10"
                            aria-expanded="false"
                            id='down2'
                            onClick={(e) => toggleFAQ(e.currentTarget, 'down1')}>
                            <span className="flex-1 text-base-content text-[16px] font-sans font-bold text-[#717171]">General FAQs</span>
                            <MdKeyboardArrowRight className='text-[#717171]' />
                        </button>
                        <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                            <div className="pb-5 leading-relaxed">
                                <ul>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">How do digital business cards compare to traditional paper business cards in terms of effectiveness ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Digital business cards offer several advantages over traditional paper cards, including ease of sharing, multimedia capabilities, environmental friendliness, and the ability to track engagement metrics.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">How to clean Tap & Tag, can the card get wet ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Our Metal cards, plastic cards are water-resistant and can handle temporary submersion. Clean with a damp cloth. However, our wooden NFC cards are not waterproof and should be kept dry to prevent delamination. Use a dry cloth and minimal water for cleaning.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]"> Are digital business cards environmentally friendly ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes, digital business cards reduce paper waste and are considered more eco-friendly than their paper counterparts, it's not just a card – it's a commitment to a sustainable future.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Can I include multimedia elements like videos and links in my digital business card ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes, you can add multiple images and links of your website or any other relevant document/data.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]">Are digital business cards compatible with all devices and platforms?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Most digital business cards are designed to be compatible with a wide range of devices and platforms, including smartphones, tablets, and laptops.</div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left  border-t  md:text-lg border-base-content/10"
                                    aria-expanded="false"
                                    onClick={(e) => toggleFAQ(e.currentTarget)}>
                                    <span className="flex-1 text-base-content text-[16px] font-sans font-normal text-[#717171]"> Can I customize the design and layout of my digital business card ?</span>
                                    <MdKeyboardArrowRight className='text-[#717171]' />
                                </button>
                                <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 text-[16px] leading-relaxed  font-sans font-normal text-[#717171]">Yes, we offer customization options for design, layout, color, fonts, and branding for you card.</div>
                                    </div>
                                </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Faq;
