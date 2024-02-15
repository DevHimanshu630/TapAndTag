import React, { useState, useEffect } from 'react';
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GoShareAndroid } from "react-icons/go";
import save from "../Images/Save.png"
import { LuIndianRupee } from "react-icons/lu";
import recClassic from "../Images/ClassicRectangle.png"
import recWood from "../Images/WoodRectangle.png"
import recMetal from "../Images/MetalRectangle.png"
import profile from "../Images/iconamoon_profile-circle.png"
import qrScan from "../Images/qr-code-scan.png"
import tapPay from "../Images/tap-to-pay.png"
import "../Css/home.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: "24px",
    boxShadow: 24,
};


function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [top, setTop] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            // Scrolling up
            setTop(0);
        } else {
            // Scrolling down
            setTop(-100);
        }

        setPrevScrollpos(currentScrollPos);
    };

    const handleMouseEnter = () => {
        setTop(0);
    };

    const handleMouseLeave = () => {
        setTop(-100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);

    const navbarStyle = {
        backgroundColor: '#FAF9F6',
        boxShadow: '0px 0px 20px gray',
        position: 'fixed',
        top: `${top}px`,
        width: '100%',
        height: '108px',
        display: 'block',
        transition: 'top 0.5s ease-in-out',
        zIndex: "2"
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuNav, setIsMenuNav] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsMenuNav(!isMenuNav)
    };


    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const myStyles = {
        background: 'linear-gradient(180deg, #F7EF8A 0%, #AE8625 100%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };



    return (
        <div id="navbar" className='' style={navbarStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <nav class="p-5  ">
                <div class={`${isMenuNav ? ' ' : ''} " max-w-screen-xl flex flex-wrap items-center mx-auto justify-between xl:px-10 p-4"`}>
                    <div>
                        <Link to={"/"} class="">
                            <img src={logo} class="md:w-[140px] w-[120px]" alt="Flowbite Logo" />
                        </Link>
                    </div>
                    <div className='flex gap-5'>
                        <div class="flex md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <Button type="button" class=" btn-hover  hidden lg:block color-5   " onClick={handleOpen}>Order Now</Button>
                        </div>
                        <div class="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                                <li>
                                    <Link to={"/"} class="block py-2 px-3 md:p-0 text-[20px]  bg-[#FAF9F6] " aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={"/product"} class="block py-2 px-3 md:p-0 text-[20px]  rounded bg-[#FAF9F6] ">Product</Link>
                                </li>
                                <li>
                                    <Link to={"/Sustainability"} class="block py-2 px-3 md:p-0 text-[20px]   rounded bg-[#FAF9F6] ">Sustainability</Link>
                                </li>
                                <li>
                                    <Link to={'/'} class="in-block py-2 px-3 md:p-0 ml-5  text-[18px]  rounded bg-gradient-to-r from-[#022D24]  to-[#146C60]  text-transparent bg-clip-text  ">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-fit gap-3 lg:hidden  p-4 flex items-center '>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center    justify-center   text-sm text-black rounded-lg  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-toggle"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div className='flex flex-col gap-5 xl:gap-10 xl:h-[700px] h-[500px] md:h-[650px] md:w-[582px] xl:w-[582px]  '>
                        <div className='w-full flex pl-14 pr-10 xl:pt-10 pt-7 pb-1 items-center text-center justify-center '>
                            <div>
                                <p className='text-[28px] font-normal'>
                                    Order Now
                                </p>
                                <p className='text-[#9B9B9B] font-sans font-normal'>
                                    Get Your Own Digital Card
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 xl:gap-8 ml-8 xl:ml-16 mb-8  xl:mb-14 mr-6 xl:mr-10 overflow-y-scroll  '>
                            <div className='  flex items-center justify-center'>
                                <div className='border h-[121px] w-[213px]'>

                                </div>
                            </div>
                            <div className=' flex w-full    xl:items-center'>
                                <div className='xl:w-[80%] w-[70%] '>
                                    <p style={linearGradientStyle} className='text-[24px]  font-normal'>
                                        Classic
                                    </p>
                                    <div className='flex mt-2 items-center gap-2'>
                                        <p className='flex items-center text-[21px] text-[#484848] font-semibold font-sans'><LuIndianRupee className=' text-[21px] text-[#484848] font-semibold font-sans' />2,499 </p><p className='flex items-center text-[#D9D9D9] font-semibold  line-through text-[16px] font-sans'><LuIndianRupee className=' text-[#D9D9D9] font-semibold  line-through text-[16px] font-sans' />2,999</p> <span className='flex items-center text-[#4CAF4F] font-semibold text-[16px] font-sans'>17%</span> <span className='text-[#D9D9D9] text-[11px] mt-1 font-sans font-semibold'>One time purchase</span>
                                    </div>
                                </div>
                                <div className='flex gap-3 pt-2 md:pt-0'>
                                    <GoShareAndroid className='w-[19px] h-[19px] cursor-pointer text-[#CCCCCC]' />
                                    <img src={save} className='w-[19px] h-[19px] cursor-pointer ' alt="" />
                                </div>
                            </div>
                            <div className='flex  gap-3'>
                                <div className=' text-center'>
                                    <div className='border cursor-pointer h-10 w-10'>
                                        <img src={recClassic} className='w-full h-full' alt="recClassic" />
                                    </div>
                                    <span className='text-[11px] font-semibold font-sans text-[#5A5A5A] '>Classic</span>
                                </div>
                                <div className=' text-center'>
                                    <div className='border cursor-pointer h-10 w-10'>
                                        <img src={recWood} className='w-full h-full' alt="recWood" />
                                    </div>
                                    <span className='text-[11px] font-semibold font-sans text-[#5A5A5A] '>Wood</span>
                                </div>
                                <div className=' text-center'>
                                    <div className='border cursor-pointer h-10 w-10'>
                                        <img src={recMetal} className='w-full h-full' alt="recMetal" />
                                    </div>
                                    <span className='text-[11px] font-semibold font-sans text-[#5A5A5A] '>Metal</span>
                                </div>
                            </div>
                            <div className='w-full flex-col flex gap-3'>
                                <div className='flex gap-3'>
                                    <button type="button" style={{ borderRadius: "34px" }} className=" btn-hover  color-5">Buy Now</button>
                                    <button type="button" style={{ borderRadius: "34px" }} className=" border-[#146C60] text-[#022D24] px-4 border-[1.5px] xl:px-12 ">Add to Cart</button>
                                </div>
                                <p>
                                    <span className='text-[11px] font-sans  font-extralight'>Delivery in </span><span className='text-[#5A5A5A] text-[11px] font-sans font-semibold'>7-12 business days</span>
                                </p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[#3E3E3E]  uppercase text-[14px] font-sans font-semibold'>Features</p>
                                <div className='flex items-center gap-5'>
                                    <div className='flex flex-col gap-2 items-center text-center'>
                                        <div style={myStyles} className=' border-2  border-soild rounded-full border-[#AE8625] flex justify-center  items-center  h-12 w-12'>
                                            <img src={tapPay} className=' object-contain w-[26px] h-[26px]' alt="" />
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>
                                                Unlimited
                                            </span>
                                            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>Taps</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 text-center'>
                                        <div className='border-[1.5px] border-b-[2px] border-[#AE8625] flex justify-center  items-center rounded-full h-12 w-12'>
                                            <img src={qrScan} className=' object-contain w-[26px] h-[26px]' alt="" />
                                        </div>
                                        <div className='flex  gap-1 '>
                                            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>
                                                QR
                                            </span>
                                            <span className='text-[11px] mb-4 font-semibold font-sans text-[#AE8625] '> Code</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 text-center'>
                                        <div className='border-[1.5px]  border-b-[2px] border-[#AE8625] flex justify-center  items-center rounded-full h-12 w-12'>
                                            <img src={profile} className=' object-contain w-[26px] h-[26px]' alt="" />
                                        </div>
                                        <div className='flex  flex-col items-center'>
                                            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>
                                                Personal
                                            </span>
                                            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>Profile</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>





            <div className={`w-full   xl:hidden ${isMenuOpen ? 'block   bg-[#FAF9F6]  ' : 'hidden'}  `} id="navbar-toggle">
                <div className='flex flex-col items-center gap-10 '>
                    <ul class="flex flex-col w-full font-medium  rounded-lg bg-[#FAF9F6]   ">
                        <li className='border'>
                            <Link to={"/"} class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded " aria-current="page">Home</Link>
                        </li>
                        <li className='border'>
                            <Link to={"/product"} class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded " aria-current="page">Product</Link>
                        </li>
                        <li className='border'>
                            <Link to={"/Sustainability"} class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded " aria-current="page">Sustainability</Link>
                        </li>

                        {/* <li className='border'>
                            <a href="#" class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded ">Pricing <IoIosArrowForward size={24} /></a>
                        </li> */}
                    </ul>

                </div>
            </div>
        </div >
    )
}

export default Navbar
