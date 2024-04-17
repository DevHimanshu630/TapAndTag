import React from 'react'
import Navbar from '../Components/Navbar'
import "../Css/home.css"

function Policy() {

    const menu = [
        {
            head: "Information We Collect: ",
            title: "1.1. Personal Information:"
        },
        {
            content: "When you create an Tap & Tag account, we may collect your name, email address, phone number, and other contact information.If you use payment services, we may collect payment information such as credit card details.We may collect information you provide when you contact our customer support or participate in surveys or promotions."
        },
        {
            title: "1.2. Usage Information:"
        },
        {
            content: "We collect data about how you use Tap & Tag, including log files, device information, and usage patterns.We may use cookies and similar tracking technologies to enhance your experience and collect usage information."
        },
        {
            head: "How We Use Your Information: ",
            title: "2.1.Providing Services:"
        },
        {
            content: "We use your personal information to provide and improve our services, including customizing content and suggestions."
        },
        {
            title: "2.2. Communication: "
        },
        {
            content: "We may send you transactional emails, service updates, and promotional communications based on your preferences."
        },
        {
            title: "2.3. Analytics and Research:"
        },
        {
            content: "We analyze user data to improve our services and conduct research to better understand user needs and trends."
        },
        {
            title: "2.4. Legal Compliance:"
        },
        {
            content: "We may use your information to comply with legal obligations, resolve disputes, and enforce our policies."
        },
        {
            head: "Data Sharing:",
            title: "3.1. Third Party Partners:"
        },
        {
            content: "We may share your information with trusted third-party service providers who help us operate and improve Tap & Tag."
        },
        {
            title: "3.2. Legal Requirements:"
        },
        {
            content: "We may disclose your information to comply with legal obligations, protect our rights, and ensure the safety of our users."
        },
        {
            head: "Your Choices:",
            title: "4.1. Account Information:"
        },
        {
            content: "You can update or delete your account information at any time through your Tap & Tag account settings."
        },
        {
            title: "4.2. Communication:"
        },
        {
            content: "You can manage your communication preferences through your account settings or unsubscribe from marketing emails."
        },
        {
            title: "Security:"
        },
        {
            content: "We employ industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, no method of data transmission over the internet is completely secure."
        },
        {
            title: "Children's Privacy:"
        },
        {
            content: "Tap & Tag is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children."
        },
        {
            title: "Changes to this Privacy Policy:"
        },
        {
            content: "We may update this Privacy Policy to reflect changes in our practices or services. We will notify you of significant changes through our services or other means."
        },
        {
            title: "Contact Us: "
        },
        {
            content: "If you have questions or concerns about this Privacy Policy or your data, please contact us at [Insert Contact Information].By using Tap & Tag, you agree to the terms outlined in this Privacy Policy. Please review this policy periodically to stay informed about how we collect and protect your information"
        }

    ]

    const gradientTextStyle = {
        background: 'linear-gradient(90deg, #022D24, #146C60)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      };
    return (
        <>
         <Navbar/>
            <div className='flex   flex-wrap flex-col bg-[#f7f7f7]  mt-12 lg:py-16 items-center justify-center'>

                <div className='lg:w-[1390px] p-2 flex flex-wrap lg:pl-16 mt-12 pt-8 lg:h-[1400px] bg-white'>
                    <div className='pl-5 mt-12 lg:mt-0'>
                        <div>
                            <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[40px] '>Privacy Policy</h1>
                            <hr className='text-[#F5F5F5] w-[60%] h-[2px]' />
                        </div>
                        <div>
                            <p className='lg:text-[14px] text-justify pt-8 pr-4 text-[#000000] font-light'>
                                At Tap & Tag, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services. By accessing or using Tap & Tag, you consent to the practices described in this policy.
                            </p>
                            {menu.map((items, index) =>
                                < ul >
                                    <li key={index} className='flex gap-3 text-[14px] '>
                                        <span>
                                            <p className='Ramillas mt-3  font-medium'>{items.head}</p>
                                            <p className='Ramillas font-medium'>{items.title}</p>
                                        </span>
                                        <span className='text-[#000000] pr-4 text-justify font-light'>
                                            {items.content}
                                        </span>

                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

            </div >



        </>
    )
}

export default Policy
