import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function TermAndCondition() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    const termsAndConditionsContent = [
        {
            title: "1. Introduction",
            content: "Welcome to Tap&Tag. These terms and conditions outline the rules and regulations for the use of Tap&Tag's Website, located at https://www.tapandtag.in/. By accessing this website we assume you accept these terms and conditions. Do not continue to use Tap&Tag if you do not agree to take all of the terms and conditions stated on this page.",   
        },
        {
            title: "2. Intellectual Property Rights",
            content: "Other than the content you own, under these Terms, Tap&Tag and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website."
        },
        {
            title: "3. Restrictions",
            h1: "You are specifically restricted from all of the following:-",
            content1:". Publishing any Website material in any other media ",
            content2:". Selling, sublicensing and/or otherwise commercializing any Website material",
            content3:". Publicly performing and/or showing any Website material",
            content4:". Using this Website in any way that is or may be damaging to this Website",
            content5:". Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity",
            content6:". Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website",
            content7:". Using this Website to engage in any advertising or marketing",      
        },
        {
            title: "4. Your Content",
            content: "In these Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Tap&Tag a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.\n\nYour Content must be your own and must not be invading any third-party’s rights. Tap&Tag reserves the right to remove any of Your Content from this Website at any time without notice. ( please check before adding on website)"
        },
        {
            title: "5. No warranties",
            content: "This Website is provided 'as is,' with all faults, and Tap&Tag express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you."
        },
        {
            title: "6. Limitation of liability",
            content: "In no event shall Tap&Tag, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Tap&Tag, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website."
        },
        {
            title: "7. Indemnification",
            content: "You hereby indemnify to the fullest extent Tap&Tag from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms."
        },
        {
            title: "8. Severability",
            content: "If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein."
        },
        {
            title: "9. Variation of Terms",
            content: "Tap&Tag is permitted to revise these terms at any time as it sees fit, and by using this Website you are expected to review these terms on a regular basis."
        },
        {
            title: "10. Assignment",
            content: "The Tap&Tag is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms."
        },
        {
            title: "11. Entire Agreement",
            content: "These Terms constitute the entire agreement between Tap&Tag and you in relation to your use of this Website, and supersede all prior agreements and understandings."
        },
        {
            title: "12. Governing Law & Jurisdiction",
            content: "These Terms will be governed by and interpreted in accordance with the laws of the State/Country of [Your Location], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Location] for the resolution of any disputes."
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
                    <div className='lg:w-[1350px] lg:pl-8 py-12 lg:m-0  lg:p-0 p-2 bg-white'>
                        <div className='pl-5 mr-6 mt-12 py-12'>
                            <div>
                                <h1 style={gradientTextStyle} className='Ramillas lg:text-[70px] text-[30px]  '>Terms and Conditions</h1>
                                <hr className='text-[#F5F5F5] w-[80%] lg:w-[60%] h-[2px]' />
                            </div>
                            <div>
                                {/* <p className='Ramillas text-[14px] pt-8 text-[#000000] font-medium'>Tap & Tag - Terms and Conditions</p> */}
                                {/* <p className='text-[14px pt-6 pr-4 pb-4 text-justify text-[#000000] font-light'>
                                    Welcome to Tap & Tag, your gateway to luxury brand advertising. These Terms and Conditions govern the use of our advertising services tailored for luxury brands. By accessing or using Tap & Tag's services, you agree to comply with these terms.
                                </p> */}
                                {termsAndConditionsContent.map((items, index) =>
                                    < ul >
                                        <li key={index} className='mt-6  gap-3 font-sans'>
                                            <span>
                                                <p className=' font-sans font-semibold  '>{items.title}</p>                          
                                            </span>
                                            <span className='text-[#000000]  '>
                                            <p className=' font-light  text-justify pl-4'>{items.h1}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content1}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content2}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content3}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content4}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content5}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content6}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content7}</p>
                                            <p className=' font-light  text-justify pl-4'>{items.content}</p>
                                            </span>

                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </section >
            </div >

        <Footer/>  

        </>
    )
}

export default TermAndCondition
