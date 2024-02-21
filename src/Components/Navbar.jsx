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
import phone from "../Images/phone2.png"
import axios from "../Axios/Axios";
import formImg from "../Images/formImage.png"
import formUpload from "../Images/formUpload.png"

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

    const [data, setData] = useState({

        name: "",
        brandPhoto: "",
        profilePhoto: "",
        email: '',
        heading: '',
        subHeading: '',
        emailicon: '',
        iconMobile: '',
        iconSms: '',
        headingTitle: '',
        headingDescription: '',
        cardTitle: '',
        cardButtonText: '',
        contactLable: '',
        contactNumber: '',
        emailLable: '',
        lableEmail: '',
        address: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        actionButton: '',
        gmapURL: '',
        imageTitle: '',
        imageDesc: '',
        socialTitle: '',
        socialDesc: '',
        facebookUrl: '',
        instagramUrl: '',
        twitterUrl: '',
        linksTitle: '',
        linksDesc: '',
        additionalLinks: ''

    })

    const handleChange = (e) => {
        console.log(data);
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        console.log(data);
    }
    const token = localStorage.getItem('token')
    const handleSubmitUserData = async (e) => {
        console.log(token);
        e.preventDefault();

        try {
            const res = await axios.post('users/formdata', {
                data
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },

                }
            );
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }
    const [formData, setFormData] = useState({
        file: '',
    });
    const handleInputChange = (e) => {
        const file = e.target.files[0];
        setFormData({ file });
    };


    return (
        <div id="navbar" className='' style={navbarStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <nav class="p-5  ">
                <div class={`${isMenuNav ? ' ' : ''} " max-w-screen-xl flex flex-wrap items-center mx-auto justify-between xl:px-10 p-4"`}>
                    <div>
                        <Link to={"/"} class="">
                            <img src={logo} class="md:w-[140px] w-[120px]" alt="tap&tag Logo" />
                        </Link>
                    </div>
                    <div className='flex gap-5'>
                        <div class="flex md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <Button type="button" class=" btn-hover  hidden lg:block color-5   " onClick={handleOpen}>Order Now</Button>
                        </div>
                        <div class="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                                <li>
                                    <Link to={"/"} class="block py-2 px-3 md:p-0 text-[20px]  bg-[#FAF9F6] hover:text-[#146C60] " aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={"/product"} class="block py-2 px-3 md:p-0 text-[20px]  rounded bg-[#FAF9F6] hover:text-[#146C60] ">Product</Link>
                                </li>
                                <li>
                                    <Link to={"/Sustainability"} class="block py-2 px-3 md:p-0 text-[20px]   rounded bg-[#FAF9F6] hover:text-[#146C60]">Sustainability</Link>
                                </li>
                                <li>
                                    <Link to={'/login'} class="in-block py-2 px-3 md:p-0 ml-5  text-[18px]  rounded bg-gradient-to-r from-[#022D24]  to-[#146C60]  text-transparent bg-clip-text hover:text-[#146C60] ">Login</Link>
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
                    <div className='flex flex-col  xl:h-[90vh] h-[500px] md:h-[650px] md:w-[582px]  lg:w-[1200px] '>
                        <div className='w-full flex pl-14 pr-10 xl:pt-10 pt-7 pb-1 items-center text-center justify-center '>
                            <div>
                                <p className='text-[28px] font-normal'>
                                    Get Your Own Digital Business Card
                                </p>
                                <p className='text-[#9B9B9B] font-sans font-normal'>
                                    Personalise a digital business card for your needs
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between h-full gap-5  m-12 overflow-y-scroll   '>
                            <div className=' w-[70%]'>
                                <form onSubmit={handleSubmitUserData} class="">

                                    <div className="flex flex-col  w-full">
                                        <h1>Profile</h1>
                                        <div class="mb-5 flex m-3 items-center ">
                                            <div className=''>
                                                <label
                                                    for="profilePhoto"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Profile photo
                                                </label>
                                                <input

                                                    type="file"
                                                    id="profilePhoto"
                                                    name="profilePhoto"
                                                    value={data.profilePhoto}
                                                    onChange={handleChange}
                                                    class="bg-gray-50 border border-full border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none"
                                                    placeholder="profile photo"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    for="brandPhoto"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Brand Photo
                                                </label>
                                                <input
                                                    type="file"
                                                    name="brandPhoto"
                                                    id="brandPhoto"
                                                    value={data.brandPhoto}
                                                    onChange={handleChange}
                                                    class="bg-gray-50 border border-full border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-5">

                                            <input
                                                placeholder='Name'
                                                name="Name"
                                                type="text"
                                                id="Name"
                                                value={data.name}
                                                onChange={handleChange}
                                                class="bg-gray-50 border  w-96 border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none"
                                                required
                                            />
                                        </div>

                                        <div class="mb-5 flex gap-5">
                                            <input
                                                placeholder='Designation'
                                                name=" Designation"
                                                type="text"
                                                id=" Designation"
                                                value={data.name}
                                                onChange={handleChange}
                                                class="bg-gray-50 border border-full w-1/2 border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none"
                                                required
                                            />
                                            <input
                                                placeholder='Company Name'
                                                name="Name"
                                                type="text"
                                                id="Name"
                                                value={data.name}
                                                onChange={handleChange}
                                                class="bg-gray-50 border border-full w-1/2 border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div class="mb-5 flex flex-col  gap-5 ">
                                            <p>Create Your Page URL</p>
                                            <input
                                                placeholder='Eg: Enter a combination of your Name and Organisation....../ .linkurl'
                                                name=" Designation"
                                                type="text"
                                                id=" Designation"
                                                value={data.name}
                                                onChange={handleChange}
                                                class="bg-gray-50 border border-full border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-5 w-full">
                                        <div className='flex gap-5 flex-col'>
                                            <p>Profile connect icons</p>
                                            <div className='flex flex-col gap-4'>
                                                <div class=" flex items-center">
                                                    <div className='border rounded-l-full'>
                                                        <label
                                                            for="emailicon"
                                                            class="block p-2 w-32 pl-4 text-left text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Email
                                                        </label></div>
                                                    <div className='border w-[70%]  rounded-r-full bg-gray-50 '>
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="name@flowbite.com"
                                                            type="email"
                                                            name="emailicon"
                                                            id="iconemail"
                                                            value={data.emailicon}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 w-full rounded-r-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className='border rounded-l-full'>
                                                        <label
                                                            for="iconMobile"
                                                            class="block p-2 w-32 pl-4 text-left text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Mobile
                                                        </label>
                                                    </div>
                                                    <div className='border w-[70%]  rounded-r-full bg-gray-50 '>
                                                        <input
                                                            name="iconMobile"
                                                            type="phone"
                                                            id="iconMobile"
                                                            value={data.iconMobile}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 p-2 w-full rounded-r-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none" required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className='border rounded-l-full'>
                                                        <label
                                                            for="IconSms"
                                                            class="block p-2 w-32 pl-4 text-left text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            SMS
                                                        </label>
                                                    </div>
                                                    <div className='border w-[70%]  rounded-r-full bg-gray-50 '>
                                                        <input
                                                            name="IconSms"
                                                            type="text"
                                                            id="sms"
                                                            value={data.iconSms}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 p-2 w-full rounded-r-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none" required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-5  w-full">
                                        <div className='flex gap-5 flex-col'>
                                            <p>Contact Us</p>
                                            <div className='flex flex-col gap-4'>
                                                <div class=" flex items-center">
                                                    <div className='border rounded-l-full'>
                                                        <label
                                                            for="link"
                                                            class="block p-2 w-32 pl-4 text-left text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Linkedin
                                                        </label></div>
                                                    <div className='border w-[70%]  rounded-r-full bg-gray-50 '>
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter a valid Link"
                                                            type="text"
                                                            name="link"
                                                            id="link"
                                                            value={data.emailicon}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 w-full rounded-r-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className='border rounded-l-full'>
                                                        <label
                                                            for="link"
                                                            class="block p-2 w-32 pl-4 text-left text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Twitter
                                                        </label></div>
                                                    <div className='border w-[70%]  rounded-r-full bg-gray-50 '>
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter a valid Link"
                                                            type="text"
                                                            name="link"
                                                            id="link"
                                                            value={data.emailicon}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 w-full rounded-r-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className='border rounded-l-full'>
                                                        <label
                                                            for="link"
                                                            class="block p-2 w-32 pl-4 text-left text-sm font-medium text-gray-900 dark:text-white"
                                                        >
                                                            Instagram
                                                        </label></div>
                                                    <div className='border w-[70%]  rounded-r-full bg-gray-50 '>
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter a valid Link"
                                                            type="text"
                                                            name="link"
                                                            id="link"
                                                            value={data.emailicon}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 w-full rounded-r-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col  w-full">
                                        <div className='flex gap-5 flex-col'>
                                            <p>Address</p>
                                            <div className='flex flex-col gap-4'>
                                                <div class=" flex items-center">
                                                    <div className='border w-[90%]  rounded-full bg-gray-50 '>
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Address Line 1"
                                                            type="text"
                                                            name="address"
                                                            id="address"
                                                            value={data.emailicon}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 w-full rounded-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className=' flex w-[90%]  gap-5 '>
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="Address Line 2"
                                                        type="text"
                                                        name="address2"
                                                        id="address2"
                                                        value={data.emailicon}
                                                        onChange={handleChange}
                                                        class="bg-gray-50  rounded-full w-[70%]   border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                        required
                                                    />
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="City"
                                                        type="text"
                                                        name="City"
                                                        id="City"
                                                        value={data.emailicon}
                                                        onChange={handleChange}
                                                        class="bg-gray-50  rounded-full  w-[30%]   border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                        required
                                                    />
                                                </div>
                                                <div className=' flex w-[90%] justify-evenly mb-5 gap-5 '>
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="State"
                                                        type="text"
                                                        name="State"
                                                        id="State"
                                                        value={data.emailicon}
                                                        onChange={handleChange}
                                                        class="bg-gray-50  rounded-full w-[35%]   border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                        required
                                                    />
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="Country"
                                                        type="text"
                                                        name="Country"
                                                        id="Country"
                                                        value={data.emailicon}
                                                        onChange={handleChange}
                                                        class="bg-gray-50  rounded-full  w-[35%]    border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                        required
                                                    />
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="Pin Code"
                                                        type="text"
                                                        name="pincode"
                                                        id="pincode"
                                                        value={data.emailicon}
                                                        onChange={handleChange}
                                                        class="bg-gray-50  rounded-full  w-[35%]    border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-5  w-full">
                                        <div className='flex gap-5 flex-col'>
                                            <p>Google Maps URL</p>
                                            <div className='flex flex-col gap-4'>
                                                <div class=" flex items-center">
                                                    <div className='border w-[90%]  rounded-full bg-gray-50 '>
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter Your Location URL"
                                                            type="text"
                                                            name="url"
                                                            id="url"
                                                            value={data.emailicon}
                                                            onChange={handleChange}
                                                            class="bg-gray-50 w-full rounded-full  border-none  border-gray-300 text-gray-900 text-sm focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-5  w-full">
                                        <div className='flex gap-4 flex-col'>
                                            <p>Images</p>
                                            <div className='flex  items-center  '>
                                                <div className=' '>
                                                    <img src={formImg} className='w-[82px] h-[82px]' alt="" />
                                                </div>
                                                <hr className='border h-12 mr-4  font-thin text-[#D2D2D2]' />
                                                <div className=' flex  gap-20 items-center justify-start w-[75%]'>
                                                    <label
                                                        htmlFor="dropzone-file"
                                                    >
                                                        <div className="">
                                                            {formData.file ? (
                                                                <div className='flex gap-2'>
                                                                    <p className="">
                                                                        Selected file: {formData.file.name}
                                                                    </p>
                                                                    <p className=' hover:cursor-pointer' onClick={() => setFormData({ ...formData, file: null })}>X</p>
                                                                </div>
                                                            ) : (
                                                                <div className='flex flex-col gap-1 hover:cursor-pointer'>
                                                                    <img src={formUpload} sizes={20} className='' alt="" />
                                                                    <p className=' text-[8px] '>Choose File</p>
                                                                </div>

                                                            )}
                                                        </div>
                                                        <input
                                                            accept="image/*, video/*"
                                                            onChange={handleInputChange}
                                                            id="dropzone-file"
                                                            name="file"
                                                            type="file"
                                                            className="hidden"
                                                        />
                                                    </label>
                                                    <div >
                                                        <span className='text-[#D2D2D2]'>Upload Images on your Profile Page</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-end justify-end'>
                                        <button
                                            className='bg-[#022D24] px-7 py-2 rounded-full text-white'
                                            type="submit"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='border '>
                                <img src={phone} class="h-[478px] w-[478px] sticky " alt="Molog Logo" />
                            </div>
                        </div>
                    </div>
                </Box >
            </Modal >





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

{/* <img src={formUpload} sizes={20} className='' alt="" />
<p className=' text-[8px] '>Choose File</p> */}
{/* <div className='  flex items-center justify-center'>
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
</div> */}