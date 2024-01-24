import React, { useState, useEffect } from 'react';
import logo from "../Images/logo.svg"
import { Link } from 'react-router-dom'

function Navbar() {

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
    };

    return (
        <div id="navbar" style={navbarStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <nav class="   ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="" alt="Flowbite Logo" />
                    </Link>
                    <div className='flex gap-5'>
                        <div class="flex md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" class=" btn-hover color-5   ">Order Now</button>
                            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
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
                </div>
            </nav>
        </div>
    )
}

export default Navbar
