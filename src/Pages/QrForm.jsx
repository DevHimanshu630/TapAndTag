import React, { useRef, useState } from 'react'
import axios from "../Axios/Axios";
import phone from "../Images/phone2.png";
import formImg from "../Images/formImage.png";
import formUpload from "../Images/formUpload.png";
import profileImg from "../Images/ProfileImg.png";
import { MdDeleteOutline } from "react-icons/md";
import QRCode from 'react-qr-code';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function QrForm() {

    const [data, setData] = useState({
        name: "",
        designation: "",
        companyName: "",
        pageUrl: "",
        email: "",
        mobile: "",
        sms: "",
        webSiteUrl: "",
        linkedinUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        googleMapUrl: "",
        formName: "",
    });

    const linearGradientStyle = {
        background: "linear-gradient(90deg, #022D24 0%, #146C60 94.17%)",
        WebkitBackgroundClip: "text",
        color: "transparent",
    };


    const handleChange = (e) => {
        console.log(data);
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        console.log(data);
    };
    const token = localStorage.getItem("token");


    const handleSubmitUserData = async (e) => {
        e.preventDefault();

        const formDatas = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formDatas.append(key, value);
        });

        if (formData.profilePhoto) {
            formDatas.append("profilePhoto", formData.profilePhoto);
        }
        // Append image if present
        if (formProfileData.image) {
            formDatas.append("image", formProfileData.image);
        }

        try {
            const res = await axios.post("users/uploadForm", formDatas, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data", // Set content type for FormData
                },
            });


            if (res.status == 200) {
                toast.success("Qr Created successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            // setQR(null)
            console.log(res);

        } catch (err) {
            console.log(err);
        }
    };

    const [formData, setFormData] = useState({
        profilePhoto: "",
    });

    const handleInputChange = (event) => {
        const Prpfilefile = event.target.files[0];
        setFormData({ profilePhoto: Prpfilefile });
    };

    const [formProfileData, setProfileFormData] = useState({
        image: "",
    });

    const handleProfileInputChange = (e) => {
        const imgFile = e.target.files[0];
        setProfileFormData({ image: imgFile });
    };

    const [showDiv, setShowDiv] = useState(true);
    const [showform, setShowForm] = useState(true);
    const handleForm = () => {
        setShowForm(false);
    };
    const handleBackForm = () => {
        setShowForm(true);
    };

    const qrInputRef = useRef(null);
    const [qr, setQR] = useState('');
    const [profileDiv, setProfileDiv] = useState(true);
    const [webSiteDiv, setWebSiteDiv] = useState(false);
    const [contactDiv, setContactDiv] = useState(false);
    const [googleDiv, setGoogleDiv] = useState(false);
    const [addresDiv, setAddresDiv] = useState(false);
    const handleProfileDiv = () => {
        setProfileDiv(!profileDiv)
    }
    const handleWbSiteDiv = () => {
        setWebSiteDiv(!webSiteDiv)
    }
    const handleContactDiv = () => {
        setContactDiv(!contactDiv)
    }
    const handleGoogleDiv = () => {
        setGoogleDiv(!googleDiv)
    }

    const handleAddress = () => {
        setAddresDiv(!addresDiv)
    }


    return (

        <>
            <ToastContainer />
            <div className='bg-gray-100 h-[100vh]  overflow-y-hidden flex items-center justify-center'>
                <form onSubmit={handleSubmitUserData} class=" overflow-y-hidden ">
                    <div className="flex flex-col  overflow-y-hidden  xl:h-[90vh] bg-white h-[500px] md:h-[650px] md:w-[582px]  lg:w-[1200px] ">
                        <div className="w-full flex pl-14 pr-10 xl:pt-10 pt-7 pb-1 items-center text-center justify-center ">
                            <div>
                                <p className="text-[28px] font-normal">
                                    Get Your Own Digital Business Card
                                </p>
                                <p className="text-[#9B9B9B] font-sans font-normal">
                                    Personalise a digital business card for your needs
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between h-full gap-5  m-12 overflow-y-scroll   ">
                            {showform ? (
                                <div className=" w-[70%]">
                                    <div className="flex mb-5 flex-col gap-4  w-full">
                                        <div className="flex gap-5  flex-col">
                                            <p
                                                style={linearGradientStyle}
                                                className=" font-sans font-medium text-[20px] tracking-wide"
                                            >
                                                Profile
                                            </p>
                                            <div className="flex gap-9 pl-2 items-center  ">
                                                <div className=" ">
                                                    <img
                                                        src={profileImg}
                                                        className="w-[76px] rounded-full h-[76px]"
                                                        alt=""
                                                    />
                                                </div>
                                                <hr className="border h-12 font-thin text-[#D2D2D2]" />
                                                <div className=" flex  gap-20 items-center justify-start w-[75%]">
                                                    <label htmlFor="dropzone-imgFile">
                                                        <div className="">
                                                            {formProfileData.image ? (
                                                                <div className="flex gap-2 items-center">
                                                                    <p className="text-[#D3D3D3]">
                                                                        Selected file:{" "}
                                                                        {formProfileData.image.name}
                                                                    </p>
                                                                    <p
                                                                        className=" hover:cursor-pointer "
                                                                        onClick={() =>
                                                                            setProfileFormData({
                                                                                ...formProfileData,
                                                                                image: null,
                                                                            })
                                                                        }
                                                                    >
                                                                        <span className="text-[#D3D3D3]">
                                                                            <MdDeleteOutline size={24} />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                <div className="flex flex-col gap-1 hover:cursor-pointer">
                                                                    <img
                                                                        src={formUpload}
                                                                        sizes={20}
                                                                        className=""
                                                                        alt=""
                                                                    />
                                                                    <p className=" text-[8px] ">Choose File </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <input
                                                            accept="image/*"
                                                            onChange={handleProfileInputChange}
                                                            id="dropzone-imgFile"
                                                            name="imgFile"
                                                            type="file"
                                                            className="hidden"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-2 mt-3 w-[90%]">
                                            <input
                                                placeholder="Name"
                                                name="name"
                                                type="text"
                                                id="profileName"
                                                value={data.name}
                                                onChange={handleChange}
                                                class=" border w-full  font-sans font-light  text-[16px] border-gray-300  placeholder-[#606060]  rounded-full focus:outline-none"
                                                required
                                            />
                                        </div>

                                        <div class="mb-5 w-[90%] flex gap-5">
                                            <input
                                                placeholder="Designation"
                                                name="designation"
                                                type="text"
                                                id="Designation"
                                                value={data.designation}
                                                onChange={handleChange}
                                                class=" font-sans font-light  text-[16px] placeholder-[#606060]  border border-full w-1/2 border-gray-300 rounded-full focus:outline-none"
                                                required
                                            />
                                            <input
                                                placeholder="Company Name"
                                                name="companyName"
                                                type="text"
                                                id="companyName"
                                                value={data.companyName}
                                                onChange={handleChange}
                                                class="font-sans font-light  text-[16px] placeholder-[#606060]  border border-full w-1/2 border-gray-300 text-gray-900 rounded-full focus:outline-none"
                                                required
                                            />
                                        </div>

                                        <div className="w-[90%]  flex justify-between items-center">
                                            <p
                                                style={linearGradientStyle}
                                                className="font-sans font-medium text-[20px] tracking-wide"
                                            >
                                                Create Your Page URL
                                            </p>
                                        </div>
                                        <div className="flex items-center transition-all ease-in-out duration-500">
                                            <div className="border w-[34%] bg-gray-100 rounded-l-full">
                                                <label
                                                    for="emailicon"
                                                    class="block p-2 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                >
                                                    https://tapandtag.molog.in/
                                                </label>
                                            </div>
                                            <div className="border w-[56%]  rounded-r-full  ">
                                                <input
                                                    autoComplete="true"
                                                    type="text"
                                                    name="pageUrl"
                                                    id="pageUrl"
                                                    value={data.pageUrl}
                                                    onChange={handleChange}
                                                    class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mb-12 flex-col gap-4  w-full">
                                        <div className="flex gap-5 flex-col">
                                            <div className=" w-[90%]  flex justify-between items-center ">
                                                <p
                                                    style={linearGradientStyle}
                                                    className=" font-sans font-medium text-[20px] tracking-wide"
                                                >
                                                    Profile Connect Icons
                                                </p>
                                                <label class="inline-flex items-center cursor-pointer">
                                                    <input
                                                        onClick={handleProfileDiv}
                                                        type="checkbox"
                                                        value=""
                                                        class="sr-only peer"
                                                    />
                                                    <div class="relative w-11 h-6 bg-[#022D24] peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200"></div>
                                                </label>
                                            </div>
                                            <div className={` ${!profileDiv ? "hidden transition-all ease-in-out duration-700 h-0 " : "transition-all tra ease-in-out duration-700 h-full flex flex-col gap-4"} `}>
                                                <div class=" flex items-center">
                                                    <div className="border rounded-l-full">
                                                        <label
                                                            for="emailicon"
                                                            class="block p-2 w-32 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                        >
                                                            Email
                                                        </label>
                                                    </div>
                                                    <div className="border w-[70%]  rounded-r-full  ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter Your Email Address"
                                                            type="email"
                                                            name="email"
                                                            id="iconemail"
                                                            value={data.email}
                                                            onChange={handleChange}
                                                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className="border rounded-l-full">
                                                        <label
                                                            for="emailicon"
                                                            class="block p-2 w-32 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                        >
                                                            Mobile
                                                        </label>
                                                    </div>
                                                    <div className="border w-[70%]  rounded-r-full  ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter Your Mobile Number"
                                                            type="text"
                                                            name="mobile"
                                                            id="iconMobile"
                                                            value={data.mobile}
                                                            onChange={handleChange}
                                                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className="border rounded-l-full">
                                                        <label
                                                            for="IconSms"
                                                            class="block p-2 w-32 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                        >
                                                            SMS
                                                        </label>
                                                    </div>
                                                    <div className="border w-[70%]  rounded-r-full bg-gray-50 ">
                                                        <input
                                                            placeholder="Enter Your SMS"
                                                            name="sms"
                                                            type="text"
                                                            id="sms"
                                                            value={data.sms}
                                                            onChange={handleChange}
                                                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-12 flex flex-col  gap-5 ">
                                        <div className=" w-[90%] flex justify-between items-center ">
                                            <p
                                                style={linearGradientStyle}
                                                className=" font-sans font-medium text-[20px] tracking-wide"
                                            >
                                                Website
                                            </p>
                                            <label class="inline-flex items-center cursor-pointer">
                                                <input
                                                    onClick={handleWbSiteDiv}
                                                    type="checkbox"
                                                    value=""
                                                    class="sr-only peer"
                                                />
                                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                                            </label>
                                        </div>
                                        <input
                                            placeholder="   Enter your Website URL"
                                            name="webSiteUrl"
                                            type="text"
                                            id="webSiteUrl"
                                            value={data.webSiteUrl}
                                            onChange={handleChange}
                                            className={` ${!webSiteDiv ? "hidden" : " font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-[90%] rounded-full    border-gray-300 focus:outline-none"}`}
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col mb-10  w-full">
                                        <div className="flex gap-5 flex-col">
                                            <div className=" w-[90%] flex justify-between items-center ">
                                                <p
                                                    style={linearGradientStyle}
                                                    className=" font-sans font-medium text-[20px] tracking-wide"
                                                >
                                                    Contact Us
                                                </p>
                                                <label class="inline-flex items-center cursor-pointer">
                                                    <input
                                                        onClick={handleContactDiv}
                                                        type="checkbox"
                                                        value=""
                                                        class="sr-only peer"
                                                    />
                                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                                                </label>
                                            </div>
                                            <div className={` ${contactDiv ? "flex flex-col gap-4" : "hidden"}`}>
                                                <div class=" flex items-center">
                                                    <div className="border rounded-l-full">
                                                        <label
                                                            for="link"
                                                            class="block p-2 w-32 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                        >
                                                            Linkedin
                                                        </label>
                                                    </div>
                                                    <div className="border w-[70%]  rounded-r-full bg-gray-50 ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter a valid Link"
                                                            type="text"
                                                            name="linkedinUrl"
                                                            id="linkedinUrl"
                                                            value={data.linkedinUrl}
                                                            onChange={handleChange}
                                                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className="border rounded-l-full">
                                                        <label
                                                            for="link"
                                                            class="block p-2 w-32 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                        >
                                                            Twitter
                                                        </label>
                                                    </div>
                                                    <div className="border w-[70%]  rounded-r-full bg-gray-50 ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter a valid Link"
                                                            type="text"
                                                            name="twitterUrl"
                                                            id="twitterUrl"
                                                            value={data.twitterUrl}
                                                            onChange={handleChange}
                                                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class=" flex items-center">
                                                    <div className="border rounded-l-full">
                                                        <label
                                                            for="link"
                                                            class="block p-2 w-32 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                                                        >
                                                            Instagram
                                                        </label>
                                                    </div>
                                                    <div className="border w-[70%]  rounded-r-full bg-gray-50 ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter a valid Link"
                                                            type="text"
                                                            name="instagramUrl"
                                                            id="instagramUrl"
                                                            value={data.instagramUrl}
                                                            onChange={handleChange}
                                                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-10 w-full">
                                        <div className="flex gap-5 flex-col">
                                            <div className=" w-[90%] flex justify-between items-center ">
                                                <p
                                                    style={linearGradientStyle}
                                                    className=" font-sans font-medium text-[20px] tracking-wide"
                                                >
                                                    Address
                                                </p>
                                                <label class="inline-flex items-center cursor-pointer">
                                                    <input
                                                        onClick={handleAddress}
                                                        type="checkbox"
                                                        value=""
                                                        class="sr-only peer"
                                                    />
                                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                                                </label>
                                            </div>
                                            <div className={` ${addresDiv ? "flex flex-col gap-4" : "hidden"}`}>
                                                <div class=" flex items-center">
                                                    <div className=" w-[90%]   ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="   Address Line 1"
                                                            type="text"
                                                            name="address1"
                                                            id="address1"
                                                            onChange={handleChange}
                                                            value={data.address1}
                                                            class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-full rounded-full    border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className=" flex w-[90%]  gap-5 ">
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="   Address Line 2"
                                                        type="text"
                                                        name="address2"
                                                        id="address2"
                                                        value={data.address2}
                                                        onChange={handleChange}
                                                        class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full w-[70%]   border-gray-300  focus:outline-none"
                                                        required
                                                    />
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="  City"
                                                        type="text"
                                                        name="city"
                                                        id="City"
                                                        value={data.city}
                                                        onChange={handleChange}
                                                        class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  w-[30%]   border-gray-300 focus:outline-none"
                                                        required
                                                    />
                                                </div>
                                                <div className=" flex w-[90%] justify-evenly mb-5 gap-5 ">
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="   State"
                                                        type="text"
                                                        name="state"
                                                        id="State"
                                                        value={data.state}
                                                        onChange={handleChange}
                                                        class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full w-[35%]   border-gray-300 focus:outline-none"
                                                        required
                                                    />
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="  Country"
                                                        type="text"
                                                        name="country"
                                                        id="Country"
                                                        value={data.country}
                                                        onChange={handleChange}
                                                        class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  w-[35%]    border-gray-300 focus:outline-none"
                                                        required
                                                    />
                                                    <input
                                                        autoComplete="true"
                                                        placeholder="  Pin Code"
                                                        type="text"
                                                        name="pinCode"
                                                        id="Pincode"
                                                        value={data.pinCode}
                                                        onChange={handleChange}
                                                        class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  w-[35%]    border-gray-300 focus:outline-none"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-12  w-full">
                                        <div className="flex gap-5 flex-col">
                                            <div className="flex justify-between items-center w-[90%]">
                                                <p
                                                    style={linearGradientStyle}
                                                    className=" font-sans font-medium text-[20px] tracking-wide"
                                                >
                                                    Google Maps URL
                                                </p>
                                                <label class="inline-flex items-center cursor-pointer">
                                                    <input
                                                        onClick={handleGoogleDiv}
                                                        type="checkbox"
                                                        value=""
                                                        class="sr-only peer"
                                                    />
                                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                                                </label>
                                            </div>
                                            <div className={` ${googleDiv ? "flex flex-col gap-4" : "hidden"}`}>
                                                <div class=" flex items-center">
                                                    <div className=" w-[90%] ">
                                                        <input
                                                            autoComplete="true"
                                                            placeholder="Enter Your Location URL"
                                                            type="text"
                                                            name="googleMapUrl"
                                                            id="GoogleMapUrl"
                                                            value={data.googleMapUrl}
                                                            onChange={handleChange}
                                                            class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-full rounded-full    border-gray-300 focus:outline-none"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-12  w-full">
                                        <div className="flex gap-4 flex-col">
                                            <div className="flex items-center justify-between w-[90%]">
                                                <p
                                                    style={linearGradientStyle}
                                                    className=" font-sans font-medium text-[20px] tracking-wide"
                                                >
                                                    Images
                                                </p>
                                                <label class="inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        class="sr-only peer"
                                                    />
                                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                                                </label>
                                            </div>
                                            <div className="flex  items-center  ">
                                                <div className=" ">
                                                    <img
                                                        src={formImg}
                                                        className="w-[82px] h-[82px]"
                                                        alt=""
                                                    />
                                                </div>
                                                <hr className="border h-12 mr-4  font-thin text-[#D2D2D2]" />
                                                <div className=" flex  gap-20 items-center justify-start w-[80%]">
                                                    <label htmlFor="dropzone-file">
                                                        <div className="">
                                                            {formData.profilePhoto ? (
                                                                <div className="flex gap-2">
                                                                    <p className="text-[#D3D3D3]">
                                                                        Selected files:{" "}
                                                                        {formData.profilePhoto.name}
                                                                    </p>
                                                                    <p
                                                                        className="hover:cursor-pointer"
                                                                        onClick={() =>
                                                                            setFormData({
                                                                                ...formData,
                                                                                profilePhoto: null,
                                                                            })
                                                                        }
                                                                    >
                                                                        <span className="text-[#D3D3D3]">
                                                                            <MdDeleteOutline size={24} />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                <label
                                                                    htmlFor="dropzone-file"
                                                                    className="flex flex-col gap-1 hover:cursor-pointer"
                                                                >
                                                                    <img
                                                                        src={formUpload}
                                                                        sizes={20}
                                                                        className=""
                                                                        alt=""
                                                                    />
                                                                    <p className="text-[8px]">Choose Files</p>
                                                                    <input
                                                                        accept="image/*"
                                                                        onChange={handleInputChange}
                                                                        id="dropzone-file"
                                                                        name="file"
                                                                        type="file"
                                                                        className="hidden"
                                                                    />
                                                                </label>
                                                            )}
                                                        </div>
                                                    </label>

                                                    <div>
                                                        <span
                                                            className={` ${formData.profilePhoto ? "hidden" : "block"
                                                                } text-[#D2D2D2]`}
                                                        >
                                                            Upload Images on your Profile Page
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-end justify-end">
                                        <button
                                            onClick={handleForm}
                                            className="bg-[#022D24] px-7 py-2 rounded-full text-white"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-[90%]'>
                                    <div>
                                        <input
                                            autoComplete="true"
                                            placeholder="Enter Your Form Name"
                                            type="text"
                                            name="formName"
                                            id="formName"
                                            value={data.formName}
                                            onChange={handleChange}
                                            class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-full rounded-full    border-gray-300 focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <h1>QR Code Generator</h1>
                                        <div
                                            className="border p-3"
                                            ref={qrInputRef}
                                        >
                                            {data.pageUrl}
                                        </div>
                                        <QRCode value={qr} />
                                    </div>
                                    <div className="flex justify-between w-full  ">
                                        <button onClick={handleBackForm} className="text-black bg-gray-100 p-3 border w-fit">
                                            back
                                        </button>

                                        <button type="submit" className="text-black border bg-gray-100 p-3 w-fit">
                                            submit
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="border  ">
                                {showform ? (
                                    <img
                                        src={phone}
                                        class="h-[478px] w-[478px] object-contain"
                                        alt="Molog Logo"
                                    />
                                ) : (
                                    <div className="w-96"
                                    >
                                        <QRCode value={qr} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QrForm
