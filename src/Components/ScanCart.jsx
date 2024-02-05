import React from 'react'


function ScanCart({ img, menuheading, menusubheading, menusubheading1 }) {


    return (
        <div className=' max-w-screen-xl p-3  xl:mt-32 mt-12 flex flex-wrap justify-evenly  mx-auto'>
            <div className=' '>
                <img
                    src={img}
                    class="object-contain  h-[288px]"
                    alt="tag&tag-scan"
                />
            </div>
            <div className='   flex flex-col  text-center md:text-start justify-center gap-8 xl:w-[47%]'>
                <div>
                    <p className='xl:text-[36px] text-2xl text-[#4D4D4D] '>{menuheading}</p>
                    <p className='xl:text-[36px] text-2xl leading-8  text-[#4D4D4D] '>{menusubheading1}</p>
                </div>
                <div className='text-[18px] font-[inter] font-thin  leading-normal text-[#717171] '>
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
