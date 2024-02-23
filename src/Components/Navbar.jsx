import React, { useState, useEffect, useRef } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GoShareAndroid } from "react-icons/go";
import save from "../Images/Save.png";
import { LuIndianRupee } from "react-icons/lu";
import recClassic from "../Images/ClassicRectangle.png";
import recWood from "../Images/WoodRectangle.png";
import recMetal from "../Images/MetalRectangle.png";
import profile from "../Images/iconamoon_profile-circle.png";
import qrScan from "../Images/qr-code-scan.png";
import tapPay from "../Images/tap-to-pay.png";
import "../Css/home.css";
import phone from "../Images/phone2.png";
import axios from "../Axios/Axios";
import formImg from "../Images/formImage.png";
import formUpload from "../Images/formUpload.png";
import profileImg from "../Images/ProfileImg.png";
import { MdDeleteOutline } from "react-icons/md";
import QRCode from 'react-qr-code';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
};

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      // Scrolling up
      setTop(0);
    } else {
      // Scrolling down
      setTop(-100);
    }

    setPrevScrollpos(currentScrollPos);
  };

  const handleMouseEnter = () => {
    setTop(0);
  };

  const handleMouseLeave = () => {
    setTop(-100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    backgroundColor: "#FAF9F6",
    boxShadow: "0px 0px 20px gray",
    position: "fixed",
    top: `${top}px`,
    width: "100%",
    height: "108px",
    display: "block",
    transition: "top 0.5s ease-in-out",
    zIndex: "2",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuNav, setIsMenuNav] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuNav(!isMenuNav);
  };

  const linearGradientStyle = {
    background: "linear-gradient(90deg, #022D24 0%, #146C60 94.17%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const myStyles = {
    background: "linear-gradient(180deg, #F7EF8A 0%, #AE8625 100%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

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
    <div
      id="navbar"
      className=""
      style={navbarStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav class="p-5  ">
        <div
          class={`${isMenuNav ? " " : ""
            } " max-w-screen-xl flex flex-wrap items-center mx-auto justify-between xl:px-10 p-4"`}
        >
          <div>
            <Link to={"/"} class="">
              <img
                src={logo}
                class="md:w-[140px] w-[120px]"
                alt="tap&tag Logo"
              />
            </Link>
          </div>
          <div className="flex gap-5">
            <div class="flex md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Button
                type="button"
                class=" btn-hover  hidden lg:block color-5   "
                onClick={handleOpen}
              >
                Order Now
              </Button>
            </div>
            <div
              class="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                <li>
                  <Link
                    to={"/"}
                    class="block py-2 px-3 md:p-0 text-[20px]  bg-[#FAF9F6] hover:text-[#146C60] "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    class="block py-2 px-3 md:p-0 text-[20px]  rounded bg-[#FAF9F6] hover:text-[#146C60] "
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Sustainability"}
                    class="block py-2 px-3 md:p-0 text-[20px]   rounded bg-[#FAF9F6] hover:text-[#146C60]"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    class="in-block py-2 px-3 md:p-0 ml-5  text-[18px]  rounded bg-gradient-to-r from-[#022D24]  to-[#146C60]  text-transparent bg-clip-text hover:text-[#146C60] "
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-fit gap-3 lg:hidden  p-4 flex items-center ">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center    justify-center   text-sm text-black rounded-lg  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-toggle"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmitUserData} class="">
            <div className="flex flex-col  xl:h-[90vh] h-[500px] md:h-[650px] md:w-[582px]  lg:w-[1200px] ">
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
                  <div>
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
                    <div className="flex  flex-col">
                      <button onClick={handleBackForm} className="text-black">
                        back
                      </button>

                      <button type="submit" className="text-black">
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
        </Box>
      </Modal>

      <div
        className={`w-full   xl:hidden ${isMenuOpen ? "block   bg-[#FAF9F6]  " : "hidden"
          }  `}
        id="navbar-toggle"
      >
        <div className="flex flex-col items-center gap-10 ">
          <ul class="flex flex-col w-full font-medium  rounded-lg bg-[#FAF9F6]   ">
            <li className="border">
              <Link
                to={"/"}
                class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="border">
              <Link
                to={"/product"}
                class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded "
                aria-current="page"
              >
                Product
              </Link>
            </li>
            <li className="border">
              <Link
                to={"/Sustainability"}
                class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded "
                aria-current="page"
              >
                Sustainability
              </Link>
            </li>

            {/* <li className='border'>
              <a href="#" class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded ">Pricing <IoIosArrowForward size={24} /></a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <img src={formUpload} sizes={20} className='' alt="" />
  <p className=' text-[8px] '>Choose File</p> */
}
{
  /* <div className='  flex items-center justify-center'>
  <div className='border h-[121px] w-[213px]'>

  </div>
  </div>
  <div className=' flex w-full    xl:items-center'>
  <div className='xl:w-[80%] w-[70%] '>
    <p style={linearGradientStyle} className='text-[24px]  font-normal'>
        Classic
    </p>
    <div className='flex mt-2 items-center gap-2'>
        <p className='flex items-center text-[21px] text-[#484848] font-semibold font-sans'><LuIndianRupee className=' text-[21px] text-[#484848] font-semibold font-sans' />2,499 </p><p className='flex items-center text-[#D9D9D9] font-semibold  line-through text-[16px] font-sans'><LuIndianRupee className=' text-[#D9D9D9] font-semibold  line-through text-[16px] font-sans' />2,999</p> <span className='flex items-center text-[#4CAF4F] font-semibold text-[16px] font-sans'>17%</span> <span className='text-[#D9D9D9] text-[11px] mt-1 font-sans font-semibold'>One time purchase</span>
    </div>
  </div>
  <div className='flex gap-3 pt-2 md:pt-0'>
    <GoShareAndroid className='w-[19px] h-[19px] cursor-pointer text-[#CCCCCC]' />
    <img src={save} className='w-[19px] h-[19px] cursor-pointer ' alt="" />
  </div>
  </div>
  <div className='flex  gap-3'>
  <div className=' text-center'>
    <div className='border cursor-pointer h-10 w-10'>
        <img src={recClassic} className='w-full h-full' alt="recClassic" />
    </div>
    <span className='text-[11px] font-semibold font-sans text-[#5A5A5A] '>Classic</span>
  </div>
  <div className=' text-center'>
    <div className='border cursor-pointer h-10 w-10'>
        <img src={recWood} className='w-full h-full' alt="recWood" />
    </div>
    <span className='text-[11px] font-semibold font-sans text-[#5A5A5A] '>Wood</span>
  </div>
  <div className=' text-center'>
    <div className='border cursor-pointer h-10 w-10'>
        <img src={recMetal} className='w-full h-full' alt="recMetal" />
    </div>
    <span className='text-[11px] font-semibold font-sans text-[#5A5A5A] '>Metal</span>
  </div>
  </div>
  <div className='w-full flex-col flex gap-3'>
  <div className='flex gap-3'>
    <button type="button" style={{ borderRadius: "34px" }} className=" btn-hover  color-5">Buy Now</button>
    <button type="button" style={{ borderRadius: "34px" }} className=" border-[#146C60] text-[#022D24] px-4 border-[1.5px] xl:px-12 ">Add to Cart</button>
  </div>
  <p>
    <span className='text-[11px] font-sans  font-extralight'>Delivery in </span><span className='text-[#5A5A5A] text-[11px] font-sans font-semibold'>7-12 business days</span>
  </p>
  </div>
  <div className='flex flex-col gap-5'>
  <p className='text-[#3E3E3E]  uppercase text-[14px] font-sans font-semibold'>Features</p>
  <div className='flex items-center gap-5'>
    <div className='flex flex-col gap-2 items-center text-center'>
        <div style={myStyles} className=' border-2  border-soild rounded-full border-[#AE8625] flex justify-center  items-center  h-12 w-12'>
            <img src={tapPay} className=' object-contain w-[26px] h-[26px]' alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>
                Unlimited
            </span>
            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>Taps</span>
        </div>
    </div>
    <div className='flex flex-col gap-2 text-center'>
        <div className='border-[1.5px] border-b-[2px] border-[#AE8625] flex justify-center  items-center rounded-full h-12 w-12'>
            <img src={qrScan} className=' object-contain w-[26px] h-[26px]' alt="" />
        </div>
        <div className='flex  gap-1 '>
            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>
                QR
            </span>
            <span className='text-[11px] mb-4 font-semibold font-sans text-[#AE8625] '> Code</span>
        </div>
    </div>
    <div className='flex flex-col gap-2 text-center'>
        <div className='border-[1.5px]  border-b-[2px] border-[#AE8625] flex justify-center  items-center rounded-full h-12 w-12'>
            <img src={profile} className=' object-contain w-[26px] h-[26px]' alt="" />
        </div>
        <div className='flex  flex-col items-center'>
            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>
                Personal
            </span>
            <span className='text-[11px] font-semibold font-sans text-[#AE8625] '>Profile</span>
        </div>
    </div>
  </div>
  </div> */
}
