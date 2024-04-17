import React from 'react'
import Navbar from '../Components/Navbar';


function TermAndCondition() {

    const privacyPolicyContent = [

        {
            title: "1. Acceptance of Terms",
            content: "By using Tap & Tag's advertising services, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions."
        },
        {
            title: "2. Advertising Services",
            content: "Tap & Tag offers a range of specialized advertising services for luxury brands, including digital marketing and brand partnerships. All services are subject to the terms and pricing outlined in a separate service agreement or contract."
        },
        {
            title: "3. Confidentiality",
            content: "Both Tap & Tag and the luxury brand shall maintain the confidentiality of any proprietary or sensitive information shared during the advertising partnership."
        },
        {
            title: "4. Payments and Billing",
            content: "Payment terms and conditions will be clearly defined in the service agreement or contract. Tap & Tag reserves the right to suspend or terminate services for non-payment in accordance with the agreed-upon terms."
        },
        {
            title: "5. Content and Intellectual Property",
            content: "The luxury brand retains ownership of all content provided to Tap & Tag for advertising purposes. Tap & Tag may use, reproduce, or distribute the provided content solely for the purpose of fulfilling the advertising services unless otherwise agreed upon in writing."
        },
        {
            title: "6. Third Party Collaborations",
            content: "Tap & Tag may engage third-party vendors, influencers, or media outlets to execute advertising campaigns. Tap & Tag is not liable for the actions or conduct of these third-party collaborators."
        },
        {
            title: "7. Results and Reporting",
            content: "Tap & Tag will provide regular reports detailing the performance of advertising campaigns. Results can vary, and Tap & Tag does not guarantee specific outcomes or levels of engagement."
        },
        {
            title: "8. Termination",
            content: "Either party may terminate the advertising partnership by providing written notice in accordance with the terms outlined in the service agreement or contract."
        },
        {
            title: "9. Limitation of Liability",
            content: "Tap & Tag shall not be held liable for any indirect, incidental, special, or consequential damages arising from the use of our advertising services."
        },
        {
            title: "10. Modifications to Terms",
            content: "Tap & Tag reserves the right to modify, update, or change these Terms and Conditions at any time. It is your responsibility to review them periodically for changes."
        },
        {
            title: "11. Contact Information",
            content: "For any questions or concerns related to these Terms and Conditions, please contact us at [Contact Email].",
            footer: "Thank you for choosing Tap & Tag as your luxury brand advertising partner. We look forward to helping your brand shine in the world of luxury advertising.",
        }
    ];


    const gradientTextStyle = {
        background: 'linear-gradient(90deg, #022D24, #146C60)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      };
    return (
        <>
    <Navbar/>
            <div className='flex flex-wrap flex-col bg-[#f7f7f7] mt-12 py-16 items-center justify-center'>
                <section className=''>
                    <div className='lg:w-[1390px] lg:pl-16 pt-12 lg:h-[1650px] lg:m-0  lg:p-0 m-2 p-2 bg-white'>
                        <div className='pl-5 mt-12 pt-12'>
                            <div>
                                <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[30px]  '>Terms and Conditions</h1>
                                <hr className='text-[#F5F5F5] w-[80%] lg:w-[60%] h-[2px]' />
                            </div>
                            <div>
                                <p className='Ramillas text-[14px] pt-8 text-[#000000] font-medium'>Tap & Tag - Terms and Conditions</p>
                                <p className='text-[14px pt-6 pr-4 pb-4 text-justify text-[#000000] font-light'>
                                    Welcome to Tap & Tag, your gateway to luxury brand advertising. These Terms and Conditions govern the use of our advertising services tailored for luxury brands. By accessing or using Tap & Tag's services, you agree to comply with these terms.
                                </p>
                                {privacyPolicyContent.map((items, index) =>
                                    < ul >
                                        <li key={index} className=' gap-3 lg:text-[20px] '>
                                            <span>
                                                <p className='Ramillas font-medium'>{items.title}</p>
                                            </span>
                                            <span className='text-[#000000] '>
                                                <p className=' font-light text-justify pr-4'>{items.content}</p>
                                                <p className='mt-4 font-light text-justify pr-4'>{items.footer}</p>
                                            </span>

                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </section >
            </div >

          

        </>
    )
}

export default TermAndCondition
