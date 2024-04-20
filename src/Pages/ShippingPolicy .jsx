import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ShippingPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    const shippingPolicyContent = [
        {
            title: "1. General Information",
            content: "All orders are subject to product availability. If an item is not in stock at the time you place your order, we will notify you and refund you the total amount of your order, using the original method of payment."
        },
        {
            title: "2. Delivery Location",
            content: "Items offered on our website are only available for delivery to addresses in [Specify Regions]. Any shipments outside of [Specify Regions] are not available at this time."
        },
        {
            title: "3. Delivery Time",
            content: "Unless there are exceptional circumstances, we make every effort to fulfill your order within [number] business days of the date of your order. Business day mean Monday to Friday, except holidays. Please note we do not ship on [specify days]."
        },
        {
            title: "4. Shipping Costs",
            content: "Shipping costs are based on the weight of your order and the delivery method. To find out how much your order will cost, simply add the items you would like to purchase to your cart, and proceed to the checkout page. Once at the checkout screen, shipping charges will be displayed. Additional shipping charges may apply to remote areas or for large or heavy items. You will be advised of any charges on the checkout page."
        },
        {
            title: "5. Damaged Items in Transport",
            content: "If there is any damage to the packaging on delivery, contact us immediately at [insert contact information]."
        },
        {
            title: "6. Questions",
            content: "If you have any questions about the delivery and shipment or your order, please contact us at [insert contact information]."
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
            <div className='flex flex-wrap flex-col bg-[#f7f7f7] xl:mt-12  xl:py-16 items-center justify-center'>
                <section className=''>
                    <div className='lg:w-[1050px] lg:pl-8 py-12 lg:m-0  lg:p-0 p-2 bg-white'>
                        <div className='pl-5 mr-6 mt-12 py-12'>
                            <div>
                                <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[30px]  '>Shipping Policy</h1>
                                <hr className='text-[#F5F5F5] w-[80%] lg:w-[60%] h-[2px]' />
                            </div>
                            <div>
                                {/* <p className='Ramillas text-[14px] pt-8 text-[#000000] font-medium'>Tap & Tag - Terms and Conditions</p> */}
                                {/* <p className='text-[14px pt-6 pr-4 pb-4 text-justify text-[#000000] font-light'>
                                    Welcome to Tap & Tag, your gateway to luxury brand advertising. These Terms and Conditions govern the use of our advertising services tailored for luxury brands. By accessing or using Tap & Tag's services, you agree to comply with these terms.
                                </p> */}
                              {shippingPolicyContent.map((items, index) => (
                                    <li key={index} className='flex flex-col font-sans   text-[14px] '>
                                        <span className='flex flex-col gap-0'>
                                            <span className='Ramillas mt-6  font-semibold'>{items.title}</span>  
                                            <span  className='text-[#000000] font-light '>
                                                {items.content} 
                                            </span>                  
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

export default ShippingPolicy
