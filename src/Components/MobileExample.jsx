import React, { useState } from 'react'
import mobileedmond from '../Images/Photo by Edmond Dantès.png'
import mobilelogo from '../Images/MobileLOGO.png'
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../Css/home.css"

function MobileExample() {


    const [isHidden, setIsHidden] = useState(false);

    const handleanimation = () => {
        setIsHidden(!isHidden);
    };
    const gradientTextStyle = {
        background: 'linear-gradient(180deg, #1E1E1E -61.11%, #079376 177.78%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
    };
    const gradientTextStyle2 = {
        background: 'bg-gradient-to-r from-gray-900 via-gray-800 to-teal-500 text-transparent',
    };
  return (
    <div className='w-full '>
      <div  style={{ backgroundImage: 'url("/image/phone look bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-full rounded-t-2xl flex flex-col   p-4 h-40'>
        <div className='flex flex-col gap-5 justify-between'>
        <div className='w-full flex items-center justify-end'>
            <img src={mobilelogo} className="w-10" alt="" />
        </div>
        <div className='flex justify-center gap-5  items-center'>
            <div>
                <img className='w-12' src={mobileedmond} alt="" />
            </div>
            <div className='text-white flex flex-col  justify-end'>
                <p className='text-[22px] font-sans font-light'>
                    Your Fullname
                </p>
                <p  className='text-[14px]'>
                    Your Designation
                </p>
            </div>
        </div>
        </div>
        
      </div>


      <div className='   h-full '>
      <div className="flex h-full w-full p-3  bg-white gap-5 justify-start items-start flex-col">
      <div className="flex gap-3 w-full  justify-around mt-3">
               <button style={gradientTextStyle} className='border px-3 font-semibold text-[14px] rounded-full border-[#146C60] '>
                        Share Your Details
               </button>
               <button  className='border rounded-full save text-white px-6 py-1 text-[14px]'>
                        Save               
               </button>
              </div>
         <div className="flex w-full justify-around  ">
        
            <div className='flex  items-center  justify-between w-full px-3'>
           
              <div className="flex gap-2 ">
                <a href={"userData.instagramUrl"} target="_blank">
                  <img src="/image/insta.png" className='width-[22px] height-[22px]' alt="" />
                </a>
                <Link to={""}>
                  <img src="/image/linkedIN.png" className='width-[22px] height-[22px]' alt="" />
                </Link>
                <Link to={""}>
                  <img src="/image/Vector.png" className='width-[22px] height-[22px]' alt="" />
                </Link>
              </div>
              <div className="font-sans">
                <a
                 style={gradientTextStyle}
                  className=" text-[12px] underline underline-offset-2"
                  href={""}
                  target="_himanshu"
                >
                 yourwebsitehere.com
                </a>
              </div>
     </div>
            </div>
              <div className="flex flex-col w-full gap-2 h-full items-center justify-start">
                <div className="w-[95%]  overflow-hidden   rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full text-sm font-sans  bg-[#EEEEEE] py-1 px-5">
                    EMAIL
                  </div>
                  <div className="flex font-sans items-center gap-4 py-1 px-5">
                    <img src="/image/email.png" alt="" />
                        <span className='text-[14px]'>yourname@gmail.com</span>
                    </div>
                </div>
                <div className="w-[95%]  overflow-hidden   rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full text-sm font-sans  bg-[#EEEEEE] py-1 px-5">
                  Mobile
                  </div>
                  <div className="flex font-sans items-center gap-4 py-1 px-5">
                  <img src="/image/phone.png" alt="" />
                        <span className='text-xs'>+91 701772XXXX</span>
                    </div>
                </div>
                <div className="w-[95%]  overflow-hidden   rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full text-sm font-sans  bg-[#EEEEEE] py-1 px-5">
                  SMS
                  </div>
                  <div className="flex font-sans items-center gap-4 py-1 px-5">
                  <img src="/image/sms.png" alt="" />
                        <span className='text-xs'>+91 701772XXXX</span>
                    </div>
                </div>
                <div className="w-[95%]  overflow-hidden   rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full text-sm font-sans  bg-[#EEEEEE] py-1 px-5">
                  ADDRESS
                  </div>
                  <div className="flex font-sans items-center gap-4 py-1 px-5">                
                        <span className='text-xs'>
                            813, Udyog Vihar Phase V,
                        Gurugram, Haryana, India, 122016</span>
                        <img src="/image/location.png" alt="" />
                    </div>
                </div>
                <div className="flex font-sans items-center gap-4 py-1 px-5">                
                        <img src="/image/Tap & Tag Logo 3.png" alt="" />
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default MobileExample