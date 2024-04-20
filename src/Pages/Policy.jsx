import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import "../Css/home.css"
import Footer from '../Components/Footer';

function Policy() {

    const privacyPolicyContent = [
        {
            title: "1. Introduction",
            content4: "Welcome to Tap&Tag. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how Tap&Tag collects, uses, processes, and shares your personal information when you use our services through our website",
             link:"https://www.tapandtag.in/",
        },
        {
            title: "2. Information We Collect",
            h1:"a. Personal Information:",
            content1: " We collect personal information that you provide to us directly. This includes but is not limited to your name, email address, phone number, and payment details",
            h2:" b. Device and Usage Information:",
            content2:"We gather information about how you interact with our services, including choices you make, your device type, IP address, and the pages you visit. ",
            h3:"c. Cookies and Tracking Technologies:",
            content3:"Cookies and Tracking Technologies: We use cookies and similar tracking technologies to monitor your interactions with our website."
        },
    { title: "3. How We Use Your Information",
        h1: "a. To Provide Services:",
        content1: "We use your information to process transactions, communicate with you about your account or transactions, and to provide customer service.",
        h2: "b. For Improvement and Development:",
        content2: "We analyze user behavior and preferences to enhance the functionality and user experience of our services.",
        h3: "c. Marketing:",
        content3: "With your consent, we may use your information to send you promotional messages and newsletters."},
        {
            title: "4. Sharing Your Information",
            content1: "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service. We require all third parties to respect the security of your personal data and to treat it in accordance with the law."
        },
        {
            title: "5. Data Security",
            content1: "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of varying likelihood and severity for the rights and freedoms of natural persons."
        },
        {
            title: "6. Your Rights",
            content1: "You have rights under data protection laws in relation to your personal data. These include the right to access, correct, delete, or transfer your personal data and the right to withdraw consent at any time."
        },
        {
            title: "7. Changes to This Policy",
            content1: "We may update this privacy policy from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible."
        },
        {
            title: "8. Contact Us",
            content1: "If you have any questions about this privacy policy or our practices, please contact us at [insert contact information]."
        }
    ];
    
    const gradientTextStyle = {
        background: 'linear-gradient(90deg, #022D24, #146C60)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      };
    
      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    return (
        <>
         <Navbar/>
            <div className='flex   flex-wrap flex-col bg-[#f7f7f7]  mt-12 lg:py-16 items-center justify-center'>

                <div className='lg:w-[1390px] p-2 flex flex-wrap lg:pl-16 mt-12 py-8 ] bg-white'>
                    <div className=' mt-12 lg:mt-0'>
                        <div>
                            <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[40px] '>Privacy Policy</h1>
                            <hr className='text-[#F5F5F5] w-[60%] h-[2px]' />
                        </div>
                        <div>
                            {/* <p className='lg:text-[14px] text-justify pt-8 pr-4 text-[#000000] font-light'>
                                At Tap & Tag, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services. By accessing or using Tap & Tag, you consent to the practices described in this policy.
                            </p> */}
                            <ul>
                                {privacyPolicyContent.map((items, index) => (
                                    <li key={index} className='flex flex-col font-sans   text-[14px] '>
                                        <span className='flex flex-col text-justify pr-4 xl:pr-8 gap-0'>
                                            <span className='Ramillas  mt-6  font-semibold'>{items.title}</span>  
                                            <span  className='text-[#000000] font-light '>
                                                {items.content4} <a href="https://www.tapandtag.in/">{items.link}</a>    
                                            </span>                  
                                        </span>
                                        <span className='text-[#000000] pr-4  text-justify xl:pr-8 font-light'>
                                            <span className='text-[#000000]   font-semibold'>{items.h1}</span> 
                                                {items.content1}
                                                <span  className='text-[#000000]  font-semibold'>{items.h2}</span>
                                                {items.content2}
                                                <span  className='text-[#000000]  font-semibold'>{items.h3}</span>
                                                {items.content3}
                                        </span>                                                
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>

            </div >

        <Footer/>

        </>
    )
}

export default Policy
