import React from 'react'


function ScanCart({ img, menuheading, menusubheading }) {


    return (
        <div className=' max-w-screen-xl p-3  gap-16 xl:mt-32 mt-12 flex flex-wrap justify-evenly  mx-auto'>
            <div className=' '>
                <img
                    src={img}
                    class="object-contain  h-[288px]"
                    alt="tag&tag-scan"
                />
            </div>
            <div className='   flex flex-col  text-center md:text-start justify-center gap-8 xl:w-[45%]'>
                <div>
                    <p className='text-[36px] leading-8   text-[#393939] '>{menuheading}</p>
                </div>
                <div className='text-[22px] font-thin leading-5 text-[#4D4D4D] '>
                    {menusubheading}
                </div>
                <div>
                    <button className='hover:btn-hover hover:color-5 text-[20px] px-7 text-[#022D24] border-[#022D24]  py-2 rounded-md bg-white border '>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ScanCart
