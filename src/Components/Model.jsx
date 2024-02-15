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
import Model from './Model';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: "24px",
    boxShadow: 24,
};


function Model1() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div className='flex flex-col gap-10 xl:h-[700px] xl:w-[582px]  '>
                        <div className='w-full flex pl-14 pr-10 pt-10 pb-1 items-center text-center justify-center '>
                            <div>
                                <p className='text-[28px] font-normal'>
                                    Order Now
                                </p>
                                <p className='text-[#9B9B9B]   font-sans font-normal'>
                                    Get Your Own Digital Card
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 ml-16 mb-14 mr-10 overflow-y-scroll  '>
                            <div className='  flex items-center justify-center'>
                                <div className='border h-[121px] w-[213px]'>

                                </div>
                            </div>
                            <div className=' flex w-full   items-center'>
                                <div className='w-[80%]'>
                                    <p style={linearGradientStyle} className='text-[24px]  font-normal'>
                                        Classic
                                    </p>
                                    <div className='flex mt-2 items-center gap-2'>
                                        <p className='flex items-center text-[21px] text-[#484848] font-semibold font-sans'><LuIndianRupee className=' text-[21px] text-[#484848] font-semibold font-sans' />2,499 </p><p className='flex items-center text-[#D9D9D9] font-semibold  line-through text-[16px] font-sans'><LuIndianRupee className=' text-[#D9D9D9] font-semibold  line-through text-[16px] font-sans' />2,999</p> <span className='flex items-center text-[#4CAF4F] font-semibold text-[16px] font-sans'>17%</span> <span className='text-[#D9D9D9] text-[11px] mt-1 font-sans font-semibold'>One time purchase</span>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
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
                                    <button type="button" style={{ borderRadius: "34px" }} className=" btn-hover  hidden lg:block color-5">Buy Now</button>
                                    <button type="button" style={{ borderRadius: "34px" }} className=" border-[#146C60] text-[#022D24]  border-[1.5px] px-12 ">Add to Cart</button>
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
        </div>

    )
}

export default Model1
