import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    
    const gradientTextStyle = {
        background: 'linear-gradient(90deg, #022D24, #146C60)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      };
    return (
        <>
    <Navbar/>
            <div className='flex flex-wrap flex-col bg-[#f7f7f7] xl:mt-12  xl:py-16 items-center justify-center'>
                <section className=''>
                    <div className='lg:w-[1350px] h-[100vh] lg:pl-8 py-12 lg:m-0  lg:p-0 p-2 bg-white'>
                        <div className='pl-5 mr-6 mt-12 py-12'>
                            <div>
                                <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[30px]  '>Contact information</h1>
                                <hr className='text-[#F5F5F5] w-[80%] lg:w-[60%] h-[2px]' />
                            </div>
                            <div>
                            <p className=' font-sans font-semibold  '>
                            MOLOG Pvt. Ltd.
                            </p>
                            <p className=' font-sans font-semibold  '>
                            Contact - <span className='font-sans font-normal'> +91 - 6307279736</span> 
                            </p>
                            <p className=' font-sans font-semibold  '>
                            Email <span className='font-sans font-normal'> info@tapandtag.com</span> 
                            </p>
                            <p className=' font-sans font-semibold  '>
                            Address - <span className='font-sans font-normal'> 813, Udyog Vihar, Phase V, Gurugram, India</span> 
                            </p>
                            </div>
                        </div>
                    </div>
                </section >
            </div >

        <Footer/>  

        </>
    )
}

export default ContactUs
