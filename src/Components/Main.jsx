import React, { useState } from "react";
import MologLogo from "../Images/molog logo 1.svg"
import phone from "../Images/phone.png";
import back from "../Images/Group2.png";
import { Link } from "react-router-dom";
import img from "../Images/Tap & Tag white logo 2.png";
import img2 from "../Images/Photo by Edmond Dantès.png";
import { IoIosArrowDown } from "react-icons/io";
import MobilePreview from "../Components/MobilePreview";
import MobileExample from "./MobileExample";
import "../Css/home.css"

function Main() {
  const styleborder = {
    boxShadow:
      "-6px -6px 6px 0px #F5F2F0, 4px 4px 4px 0px #022D2440, 3px 3px 6px 3px #F5F2F0",
  };

  const sectionStyle = {
    backgroundImage:` url(${back})`,
    backgroundSize: "cover", // Adjust the background size if needed
  };

  function toggleOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("opacity-100");
    overlay.classList.toggle("pointer-events-none");
    overlay.classList.toggle("pointer-events-auto");
  }

  const [isHidden, setIsHidden] = useState(false);

  const handleanimation = () => {
    setIsHidden(!isHidden);
  };

  const gradientTextStyle = {
    background: 'linear-gradient(180deg, #1E1E1E -61.11%, #079376 177.78%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
};
const isUserLoggedIn = localStorage.getItem('tpt_token') != null ;

  return (
    <>
      <div className="flex flex-wrap xl:max-w-screen-xl xl:pt-52 pt-24 xl:px-8 p-5 gap-16 xl:gap-0 mx-auto items-center justify-between">
        <div className="flex flex-col gap-10">
          <div className=" ">
            <p className="md:text-[75px] leading-10 text-3xl  text-[#146C60]">
              The professional way
            </p>
            <p className="md:text-[85px]  leading-tight text-3xl   tracking-wide   text-[#022D24]">
              for networking
            </p>
            <span className=" xl:text-[16px] font-sans leading-loose font-light text-sm text-[#717171]">
              For those aiming to leave a fantastic initial impact.
            </span>
          </div>
          <div>
          <button className="btn-hover  color-5 ">
              {isUserLoggedIn ?(
              <Link to={"/qrform"}>Get Your Card</Link>
              ):(
                <Link to={"/login"}>Get Your Card</Link>
              )}
            </button>
          </div>
        </div>
        <div className="">
          <div
            style={styleborder}
            className="xl:w-[424px] w-[300px] h-[150px] flex flex-col justify-between xl:h-[230px] p-3 xl:p-10 bg-[FAF9F4] rounded-xl "
          >
            <div className=" ">
              <p className="xl:text-[19px] text-[#1C1C1C]">FULL NAME</p>
            </div>
            <div className="flex flex-col gap-1 md:leading-4 mt-1">
              <span className="md:text-[11px]  text-[9px] text-gray-600 font-light  font-[Poppins]">
                Employee’s Designation
              </span>
              <span className="md:text-[11px] text-[9px] text-gray-600 font-light font-[Poppins]">
                +91 7047017862
              </span>
            </div>

            <div className="flex  w-full   items-end justify-end ">
              <img
                src={MologLogo}
                class=" xl:h-[91px] h-14 xl:mt-10 mt-4 "
                alt="Molog Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <section
        style={sectionStyle}
        className="xl:mt-32 mt-10  h-[684px] flex items-center justify-center "
      >
        {/* <img src={phone} alt="" /> */}
        <div className={`  overflow-hidden rounded-2xl flex flex-col h-[600px]  w-72`}>
          <div style={{ backgroundImage: 'url("/image/phone look bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} className={` flex flex-col items-center justify-between  w-72 ${isHidden ? "h-[0px] opacity-0  overflow-hidden transition-all ease-in-out duration-1000"
                : "opacity-100 h-[600px] transition-all ease-in-out duration-1000"
            }`}
          >
            <div className="flex w-full justify-end items-start pt-6 p-3">
              <img src={img} alt="" />
            </div>
            <div>
              <div className="w-full flex  justify-center">
                <img src={img2} alt="" />
              </div>
              <div className="w-full flex justify-center">
                <span className="text-white font-sans font-light text-[34px]">Your Fullname</span>
              </div>
              <div className="w-full flex justify-center">
                <span className="text-white text-[18px]">Your Designation</span>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-center">
                <span className=" font-bold font-sans text-[#FFFFFF]">COMPANY LOGO</span>
              </div>
            </div>
           
            <div>
              <div className="w-full pb-3 flex justify-center">
                <span
                  onClick={handleanimation}
                  className="text-white cursor-pointer"
                >
                  <IoIosArrowDown className="text-[#079376]" />
                </span>
              </div>
            </div>
          </div>
         
          <div
            className={` flex flex-col  w-72 ${
              isHidden
                ? "h-[600px]  opacity-100 transition-all ease-in-out duration-1000"
                : "h-[0px] opacity-0 overflow-hidden transition-all ease-in-out duration-1000"
            }`}
          >
            <MobileExample />
            <div className="w-full  relative  bottom-[450px]  flex items-end justify-center">
              <span
                onClick={handleanimation}
                className="text-white cursor-pointer"
              >
                <IoIosArrowDown className="text-[#079376]" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;