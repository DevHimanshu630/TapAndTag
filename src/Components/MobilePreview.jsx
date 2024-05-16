import React from "react";
import { Link } from "react-router-dom";
import profile from "../Images/Photo by Edmond Dantès.png"
import { FaUserEdit } from "react-icons/fa";
import { ContactlessOutlined } from "@mui/icons-material";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";



function MobilePreview({ data, profileimg, formData, link, images , customCss}) {
  console.log('data for mobile preview---------->',customCss);
  const backgroundImageUrl = customCss && customCss.backgroundImage ? customCss.backgroundImage : '';
  const PrimaryColor = customCss && customCss.PrimaryColor ? customCss.PrimaryColor : "#EEEEEE";
  const SecondaryColor = customCss && customCss.SecondaryColor ? customCss.SecondaryColor : "#000000";
  const PrimaryProfileTextColor = customCss && customCss.PrimaryProfileText ? customCss.PrimaryProfileText : '#ffffff';
  const SecondaryProfileTextColor = customCss && customCss.SecondaryProfileText ? customCss.SecondaryProfileText : '#ffffff';

  const multimg = Object?.keys(formData?.image?.files)?.map((key) => (
    <img
      key={key}
      src={URL?.createObjectURL(formData?.image?.files[key])} // Pass File object directly
      className="w-[76px] rounded-full h-[76px]"
      alt=""
    />
  ));
  console.log(data.company);
  return (
    <div className="flex justify-center relative w-[380px]">
    <img src="/image/Iphone mockup.png" alt="" className="absolute w-full" />
    <div className="flex flex-col items-center justify-start w-[265px] mt-2 rounded-3xl h-[565px] overflow-y-scroll"
    style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
      
                {data ? (
                            <div className="w-full h-full">
                                <div className="w-full max-w-full border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex bg-[#032720] justify-end px-4 pt-4">
                                        <button
                                            id="dropdownButton"
                                            data-dropdown-toggle="dropdown"
                                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                            type="button"
                                        >
                                            <span className="sr-only">Open dropdown</span>
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 3"
                                            >
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="dropdown"
                                            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul className="py-2" aria-labelledby="dropdownButton">
                                                <li>
                                                    <Link
                                                        to={"#"}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Export Data
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                    >
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 h-32"
                                    style={{ backgroundImage: 'url("/image/phone look bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                        <div className="flex gap-3">
                                            {profileimg ? (
                                                link ? (
                                                    <img
                                                        className="w-12 h-12 mb-3 rounded-full shadow-lg"
                                                        src={profileimg}
                                                        alt="Bonnie image"
                                                    />
                                                ) : (
                                                    <img
                                                        className="w-12 h-12 mb-3 rounded-full shadow-lg"
                                                        src={URL.createObjectURL(profileimg)}
                                                        alt="Bonnie image"
                                                    />
                                                )
                                            ) : (
                                                <img
                                                    className="w-12 h-12 mb-3 rounded-full shadow-lg"
                                                    src={profile}
                                                    alt="Bonnie image"
                                                />
                                            )}
                                            <div className="">
                                                <h5 className="text-xl font-sans font-light"
                                                style={{color: PrimaryProfileTextColor}}>
                                                    {data.name ? data.name : "Your Fullname"}
                                                </h5>
                                                <p className="text-xs font-sans font-light"
                                                style={{color: SecondaryProfileTextColor}}>
                                                    {data.designation ? data.designation : "Your Designation"}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-sans font-light text-[white] dark:text-white">
                                            {data.companyName ? data.companyName : "Your Company"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-6 items-center justify-between px-2 gap-3 ">
                                    <div className="flex gap-2 ">
                                        <Link to={data.instagramUrl}>
                                            <img src="/image/insta.png" alt="" />
                                        </Link>
                                        <Link to={data.linkedinUrl}>
                                            <img src="/image/linkedIN.png" alt="" />
                                        </Link>
                                        <Link to={data.twitterUrl}>
                                            <img src="/image/Vector.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link
                                            className="text-[16px] underline underline-offset-2"
                                            to={data.webSiteUrl}
                                        >
                                            {data.webSiteUrl ? data.webSiteUrl : "yourwebsitehere.com"}
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex w-full items-start flex-col">
                                    <div className = {`w-full mt-6 border-[#EEEEEE] rounded-[8px] border flex-shrink-0`}
                                    >
                                        <div className={`w-full font-sans py-1 bg-[#EEEEEE] px-5`}
                                        style={{ color: PrimaryColor }}
                                        >EMAIL</div>
                                        <div className="flex items-center gap-4 p-2 px-5 font-snas">
                                            <IoMdMail color={PrimaryColor} size='25px'/>
                                            <p style={{color: SecondaryColor}}>{data.email ? data.email : "yourname@gmail.in"}</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-6 rounded-[8px] border-[#EEEEEE] border flex-shrink-0"
                                    >
                                        <div className="w-full font-sans bg-[#EEEEEE] py-1 px-5"
                                        style={{ color: PrimaryColor }}>Mobile</div>
                                        <div className="flex items-center gap-4 p-2 px-5 font-snas">
                                            <BiSolidPhoneCall color={PrimaryColor} size='25px'/>
                                            <p style={{color: SecondaryColor}}>{data.mobile ? data.mobile : "+91 701772XXXX"}</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-6 rounded-[8px] border border-[#EEEEEE] flex-shrink-0"
                                    >
                                        <div className="w-full font-sans py-1 bg-[#EEEEEE] px-5"
                                        style={{ color: PrimaryColor }}>SMS</div>
                                        <div className="flex items-center gap-4 p-2 px-5 font-snas">
                                            <RiMessage2Fill color={PrimaryColor} size='25px'/>
                                            <p style={{color: SecondaryColor}}>{data.sms ? data.sms : "+91 701772XXXX"}</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-6 border-[#EEEEEE] rounded-[8px] border flex-shrink-0"
                                    >
                                        <div className="w-full bg-[#EEEEEE] font-sans py-1 px-5"
                                        style={{ color: PrimaryColor }}>ADDRESS</div>
                                        <div className="flex items-center gap-4 p-2 px-5 font-snas">
                                        <FaAddressCard color={PrimaryColor} size='75px'/>
                                            <p style={{color: SecondaryColor}}>
                                                {data.address1 ? data.address1 : "813, Udyog Vihar Phase V,"} {data.address2 ? data.address2 : "Gurugram,"} {data.city ? data.city : "Haryana,"}
                                                {data.state ? data.state : "Uttar Pradesh,"} {data.country ? data.country : "India,"} {data.pinCode ? data.pinCode : "122016"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-6 border-[#EEEEEE] rounded-[8px] border flex-shrink-0"
                                    >
                                        <div className="w-full bg-[#EEEEEE] font-sans py-1 px-5"
                                        style={{ color: PrimaryColor }}>Designation</div>
                                        <div className="flex items-center gap-4 p-2 px-5 font-snas"
                                        style={{color: SecondaryColor}}>
                                            {data.designation ? data.designation : "Your Designation"}
                                        </div>
                                    </div>
                                    <div className="w-full mt-6 border-[#EEEEEE] rounded-[8px] border flex-shrink-0"
                                    >
                                        <div className="w-full bg-[#EEEEEE] font-sans py-1 px-5"
                                        style={{ color: PrimaryColor }}>Company</div>
                                        <div className="flex items-center gap-4 p-2 px-5 font-snas"
                                        style={{color: SecondaryColor}}>
                                            {data.companyName ? data.companyName : "Your Company"}
                                        </div>
                                    </div>
                                    <div className="w-full mt-6 border-[#EEEEEE] rounded-[8px] border flex-shrink-0"
                                    >
                                        <div className="w-full bg-[#EEEEEE] font-sans py-1 px-5"
                                        style={{ color: PrimaryColor }}>Images</div>
                                        <div className="flex flex-wrap items-center gap-4 p-2 px-5">
                                            {link ? (
                                                <div className="flex gap-2">
                                                    {images?.map((image, index) => (
                                                        <img key={index} src={image?.contentURL} className="w-[76px] rounded-full h-[76px]" alt="" />
                                                    ))}
                                                </div>
                                            ) : (
                                                multimg
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    ) : (
                        <p>Loading...</p>
                    )}
    </div>
    </div>
  );
}

export default MobilePreview;