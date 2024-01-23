import React, { useState, useEffect } from 'react';
import logo from "../Images/logo.svg"
import "../Css/home.css"
import Main from '../Components/Main';
import Cart from '../Components/Cart';
import ScanCart from './ScanCart';
import VisitCart from './VisitCart';
import cart from "../Images/Frame.jpg"
import scan from "../Images/scan 1.svg"
import DeginationCard from './DeginationCard';
import DigitalCard from './DigitalCard';

const Home = () => {
    // State variables to manage scroll behavior
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [top, setTop] = useState(0);
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isNavbarVisible = top === 0;

        if (currentScrollPos === 0 && !isNavbarVisible) {
            // When the user is at the top of the page and the navbar is not visible, show the navbar
            setTop(0);

        } else if (currentScrollPos > 0 && isNavbarVisible) {
            // When scrolling down and the navbar is visible, hide the navbar
            setTop(-130);


        }
    };

    const handleMouseEnter = () => {
        setTop(0);
    };

    const handleMouseLeave = () => {
        setTop(-100);
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [top]);

    const navbarStyle = {
        backgroundColor: '#FAF9F6',
        boxShadow: '0px 0px 20px gray',
        position: 'fixed',
        top: `${top}px`,
        width: '100%',
        height: '108px',
        display: 'block',
        transition: 'top 1s ease-in-out',
    };


    const mymenu = {
        imageUrl: cart,
        heading: "Share contact details with a single tap",
        paragraph: "For people who want to make a great first impression. Tap and share your contact details, gather leads and connect to over 5,000 apps and CRM tools."
    };

    const mymenusec = {
        imageUrl: scan,
        heading: "Unlock the untapped potential",
        paragraph: "an eco-friendly innovation poised to revolutionize networking and information exchange."
    };


    return (
        <div>
            <div id="navbar" style={navbarStyle} >
                <nav class="   ">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="" alt="Flowbite Logo" />
                        </a>
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
                                        <a href="#" class="block py-2 px-3 md:p-0 text-[20px]  bg-[#FAF9F6] " aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-3 md:p-0 text-[20px]  rounded bg-[#FAF9F6] ">Product</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 px-3 md:p-0 text-[20px]   rounded bg-[#FAF9F6] ">Sustainability</a>
                                    </li>
                                    <li>
                                        <a href="#" class="in-block py-2 px-3 md:p-0 ml-5  text-[18px]  rounded bg-gradient-to-r from-[#022D24]  to-[#146C60]  text-transparent bg-clip-text  ">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div
                style={{
                    padding: '0px 0px 200px',
                    fontSize: '30px',
                    marginTop: '100px',
                }}
            >
                <Main />
                <Cart />
                <ScanCart img={mymenusec.imageUrl} menuheading={mymenusec.heading} menusubheading={mymenusec.paragraph} />
                <VisitCart />
                <ScanCart img={mymenu.imageUrl} menuheading={mymenu.heading} menusubheading={mymenu.paragraph} />
                <DeginationCard />
                <DigitalCard />
            </div>
        </div>
    );
};
export default Home;