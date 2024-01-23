import React, { useState } from 'react'

function DigitalCard() {

    const styleborder = {
        boxShadow: "3px 3px  #022D24"  // Replace #FF0000 with your desired color
    }

    const radialGradient = {
        background: 'radial-gradient(circle at center, #146C60, #022D24)'  // Colors with 100% opacity
    };
    const [showPara, setShowPara] = useState(true)

    const handleParagraph = () => {
        setShowPara(false)
    }
    const handleLeave = () => {
        setShowPara(true)
    }
    return (
        <div className=' max-w-screen-xl m-auto flex gap-6 flex-col items-center  '>
            <div className=' flex flex-col items-center text-center  '>
                <p className='text-[44px]  text-[#4D4D4D]'>Unveiling the Array of Digital Business Cards</p>
                <p className='text-[16px] w-[40%] text-[#717171]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='flex gap-10 p-8' >
                <div className='flex flex-col gap-4 '>
                    {showPara ? (
                        <div
                            style={styleborder}
                            onMouseEnter={handleParagraph}
                            className=" border border-[#022D24] leading-none flex justify-center items-center text-[#146C60] p-8 w-[262px] h-[140px] rounded-xl text-center text-[24px] "
                        >
                            Effortless<br />
                            Digital Networking
                        </div>
                    ) : (
                        <div
                            style={styleborder}
                            onMouseLeave={handleLeave}
                            className=" border border-[#022D24] leading-none flex justify-center items-center text-[#146C60] p-8 w-[262px] h-[140px] rounded-xl text-center text-[12px] "
                        >
                            With a single tap, seamlessly share comprehensive information including phone number, email, company address, LinkedIn, website, and portfolio, eliminating the need for traditional paper business cards
                        </div>
                    )}

                    <div style={radialGradient} className='border p-4 text-white leading-none flex justify-center items-center pt-8 w-[262px] h-[140px] text-center rounded-xl text-[24px]'>
                        Versatile & Aesthetically Pleasing Design
                    </div>
                </div>
                <div className='flex flex-col    gap-4'>
                    <div style={radialGradient} className='borde text-white flex  items-center justify-center leading-none p-8 w-[262px] h-[140px] text-center rounded-xl text-[24px]'>
                        Secure & Eco-friendly Data Transfer
                    </div>
                    <div style={styleborder} className='border p-5 pt-8 w-[262px] h-[140px] leading-none text-center rounded-xl text-[24px]'>
                        <span>Multimedia Integration</span><br />
                        <span className='text-[16px]'>for </span> Enhanced Communication
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalCard
