import React, { useState } from 'react'

function DigitalCard() {

    const styleborder = {
        boxShadow: "3px 3px  #022D24"  // Replace #FF0000 with your desired color
    }

    const radialGradient = {
        background: 'radial-gradient(circle at center, #146C60, #022D24)'  // Colors with 100% opacity
    };
    const [showPara, setShowPara] = useState(true)
    const [showPara2, setShowPara2] = useState(true)
    const [showPara3, setShowPara3] = useState(true)
    const [showPara4, setShowPara4] = useState(true)

    const handleParagraph = () => {
        setShowPara(false)
    }
    const handleLeave = () => {
        setShowPara(true)
    }

    const handleParagraph3 = () => {
        setShowPara3(false)
    }
    const handleLeave3 = () => {
        setShowPara3(true)
    }
    const handleParagraph2 = () => {
        setShowPara2(false)
    }
    const handleLeave2 = () => {
        setShowPara2(true)
    }
    const handleParagraph4 = () => {
        setShowPara4(false)
    }
    const handleLeave4 = () => {
        setShowPara4(true)
    }



    return (
        <div className=' xl:max-w-screen-xl m-auto p-3 flex xl:gap-6 gap-12 flex-wrap xl:flex-col items-center  '>
            <div className=' flex flex-col items-center text-center  '>
                <p className='xl:text-[44px] leading-normal text-3xl text-[#4D4D4D]'>Unveiling the Array of Digital Business Cards</p>
                <p className='text-[16px] xl:w-[40%] text-[#717171]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='flex flex-wrap  justify-center gap-10 xl:p-8' >
                <div className='flex flex-col gap-4 '>
                    {showPara ? (
                        <div
                            style={styleborder}
                            onMouseEnter={handleParagraph}
                            className="border border-[#022D24] leading-none flex justify-center items-center text-[#146C60] p-8 w-[262px] h-[140px] rounded-xl text-center text-[24px] transition-all duration-300 ease-in-out delay-150"
                        >
                            Effortless<br />
                            Digital Networking
                        </div>
                    ) : (
                        <div
                            style={styleborder}
                            onMouseLeave={handleLeave}
                            className="border border-[#022D24] leading-none flex justify-center items-center text-[#146C60] p-8 w-[262px] h-[140px] rounded-xl text-center text-[12px] "
                        >
                            With a single tap, seamlessly share comprehensive information including phone number, email, company address, LinkedIn, website, and portfolio, eliminating the need for traditional paper business cards
                        </div>
                    )}


                    {showPara3 ? (
                        <div
                            style={radialGradient}
                            onMouseEnter={handleParagraph3}
                            className='border p-4 text-white leading-none flex justify-center items-center pt-8 w-[262px] h-[140px] text-center rounded-xl text-[24px] transition-all duration-300 ease-in-out delay-150'>
                            Versatile & Aesthetically Pleasing Design
                        </div>) : (
                        <div
                            style={styleborder}
                            onMouseLeave={handleLeave3}
                            className=" border border-[#022D24] bg-[#022D24] leading-none flex justify-center items-center text-white p-8 w-[262px] h-[140px] rounded-xl text-center text-[12px] "
                        >
                            Utilizing encrypted NFC technology ensures safe and secure data transactions, while also contributing to environmental sustainability by planting a tree for every wooden font card sold, reducing paper waste.
                        </div>)
                    }
                </div>
                <div className='flex flex-col    gap-4'>
                    {showPara2 ? (
                        <div
                            onMouseEnter={handleParagraph2}
                            style={radialGradient}
                            className='borde text-white flex  items-center justify-center leading-none p-8 w-[262px] h-[140px] text-center rounded-xl text-[24px] transition-all duration-300 ease-in-out delay-150'>
                            Secure & Eco-friendly Data Transfer
                        </div>) : (
                        <div
                            style={styleborder}
                            onMouseLeave={handleLeave2}
                            className=" border border-[#022D24] bg-[#022D24] leading-none flex justify-center items-center text-white p-8 w-[262px] h-[140px] rounded-xl text-center text-[12px] "
                        >
                            Utilizing encrypted NFC technology ensures safe and secure data transactions, while also contributing to environmental sustainability by planting a tree for every wooden font card sold, reducing paper waste.
                        </div>)}
                    {showPara4 ? (
                        <div
                            onMouseEnter={handleParagraph4}
                            style={styleborder}
                            className='border p-5 pt-8 w-[262px] h-[140px] leading-none text-center rounded-xl text-[24px] transition-all duration-300 ease-in-out delay-150'>
                            <span>Multimedia Integration</span><br />
                            <span className='text-[16px]'>for </span> Enhanced Communication
                        </div>) : (
                        <div
                            style={styleborder}
                            onMouseLeave={handleLeave4}
                            className=" border border-[#022D24] text-[#022D24] leading-none flex justify-center items-center bg-white p-7 w-[262px] h-[140px] rounded-xl text-center text-[12px] "
                        >
                            Beyond conventional details, our cards can be customized to include multimedia elements such as videos and photographs, making them an ideal choice for professionals like photographers who want to showcase their work directly on their card. This feature helps in facing language barriers and adds a personalized touch to your professional identity.                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default DigitalCard
