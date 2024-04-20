import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Refundpolicy() {

    const returnRefundPolicyContent = [
        {
            title: "1. General Policy",
            content: "Thank you for shopping at Tap&Tag. We appreciate the fact that you like to buy the products we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products.", 
            content5: "As with any shopping experience, there are terms and conditions that apply to transactions at Tap&Tag. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Tap&Tag, you agree to the terms set forth below along with Tap&Tag’s Privacy Policy and Terms of Use."
        },
        {
            title: "2. Refunds",
            h1: "a. Digital Products: ",
            content1: "Due to the nature of digital products, we do not generally offer a refund or credit on a purchase unless required under [local consumer law] or other relevant consumer protection laws. If you would like to make a request for a refund, please contact our customer support team.",
            h2: " b. Physical Products: ",
            content2: "If any product you purchase is defective or significantly not as described, you are entitled to a refund. To initiate a refund, please contact us within 30 days of delivery with proof of the defect and your purchase details."
        },
        {
            title: "3. Returns and Exchanges",
            h1: "a. Returns: ",
            content1: "You can return physical products within 30 days of your purchase, except in the case of custom-designed items. Custom-designed products are made to your specifications and therefore cannot be returned. The product must be returned in the original packaging, including any accessories, manuals, and documentation for non-custom items.",
            h2: "b. Exchanges: ",
            content2: "If you need to exchange a defective or damaged item, please contact us to arrange an exchange. Note that custom-designed items cannot be exchanged unless there are defects in materials or workmanship."
        },
        {
            title: "4. Non-returnable Items ",
            content: "Certain types of items cannot be returned, like perishable goods, personalized items, and personal care goods. Please get in touch if you have questions or concerns about your specific item."
        },
        {
            title: "5. Shipping Returns ",
            content: "To return your product, you should mail your product to: [Insert return address]. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund."
        },
        {
            title: "6. Restocking Fee ",
            content: "We do not charge a restocking fee on returned products."
        },
        {
            title: "7. Refunds Process and Timeliness ",
            content: "Once we receive your returned item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies."
        },
        {
            title: "8. Contact Us ",
            content: "If you have any questions about our returns and refunds policies, please contact us at [insert contact information]."
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
            <div className='flex flex-wrap flex-col bg-[#f7f7f7] xl:mt-12  xl:py-16 items-center justify-center'>
                <section className=''>
                    <div className='lg:w-[1350px] lg:pl-8 py-12 lg:m-0  lg:p-0 p-2 bg-white'>
                        <div className='pl-5 mr-6 mt-12 py-12'>
                            <div>
                                <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[30px]  '>Refund Policy</h1>
                                <hr className='text-[#F5F5F5] w-[80%] lg:w-[60%] h-[2px]' />
                            </div>
                            <div>
                                {/* <p className='Ramillas text-[14px] pt-8 text-[#000000] font-medium'>Tap & Tag - Terms and Conditions</p> */}
                                {/* <p className='text-[14px pt-6 pr-4 pb-4 text-justify text-[#000000] font-light'>
                                    Welcome to Tap & Tag, your gateway to luxury brand advertising. These Terms and Conditions govern the use of our advertising services tailored for luxury brands. By accessing or using Tap & Tag's services, you agree to comply with these terms.
                                </p> */}
                              {returnRefundPolicyContent.map((items, index) => (
                                    <li key={index} className='flex flex-col font-sans   text-[14px] '>
                                        <span className='flex flex-col gap-0'>
                                            <span className='Ramillas mt-6  font-semibold'>{items.title}</span>  
                                            <span  className='text-[#000000] pr-4 font-light flex flex-col gap-1 text-justify'>
                                                {items.content} <a href="https://www.tapandtag.in/">{items.link}</a>    
                                            
                                                <span>{items.content5}</span>    
                                            </span>                  
                                        </span>
                                        <span className='text-[#000000] pr-4  text-justify font-light'>
                                            <span className='text-[#000000]   font-semibold'>{items.h1}</span> 
                                                {items.content1}
                                                <span  className='text-[#000000]  font-semibold'>{items.h2}</span>
                                                {items.content2}
                                                <span  className='text-[#000000]  font-semibold'>{items.h3}</span>
                                                {items.content3}
                                        </span>                                                
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </section >
            </div >

        <Footer/>  

        </>
    )
}

export default Refundpolicy
