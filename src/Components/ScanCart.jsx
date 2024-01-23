import React from 'react'
import scan from "../Images/scan 1.svg"

function ScanCart() {
    return (
        <div className=' max-w-screen-xl  gap-4 mt-52 flex justify-start  mx-auto'>
            <div className=' '>
                <img
                    src={scan}
                    class="w-[570px] h-[307px]"
                    alt="tag&tag-scan"
                />

            </div>
            <div className='  flex flex-col justify-center gap-8 w-[45%]'>
                <div>
                    <p className='text-[36px] text-[#393939] '>Unlock the untapped potential</p>
                </div>
                <div className='text-[22px] '>
                    an eco-friendly innovation poised to revolutionize networking and information exchange.
                </div>
                <div>
                    <button className='hover:btn-hover hover:color-5 text-sm text-[#022D24] border-[#022D24] px-10 py-4 rounded-md bg-white border '>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ScanCart
