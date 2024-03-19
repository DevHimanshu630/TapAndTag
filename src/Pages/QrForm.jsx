import React, { useEffect, useRef, useState } from "react";
import axios from "../Axios/Axios";
import phone from "../Images/phone2.png";
import formImg from "../Images/formImage.png";
import formUpload from "../Images/formUpload.png";
import profileImg from "../Images/ProfileImg.png";
import { MdDeleteOutline } from "react-icons/md";
import QRCode from "react-qr-code";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "clipboard-copy";
import { MdContentCopy } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { IoIosEye } from "react-icons/io";
import { MdOutlineQrCode } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../Images/logo.png";
import html2canvas from "html2canvas";
import VcardTemplate from "../VRcard/VcardTemplate";
import MobilePreview from "../Components/MobilePreview";
import { Loader, Placeholder } from 'rsuite'

function QrForm() {
  const [loader, setLoader] = useState(false)
  const { formId } = useParams();
  const token = localStorage.getItem("token");
  console.log(formId);
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

  useEffect(() => {
    const formDatas = new FormData();
    if (formId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`users/update/${formId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response);

          setData(response?.data?.response); // Set all response data to setData
          // Append image if present
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }
  }, [formId, token]);

  const navigate = useNavigate();

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

  const handleSubmitUserData = async (e) => {
    e.preventDefault();
        const formDatas = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formDatas.append(key, value);
    });

    if (formData.image && formData.image.files) {
      const files = formData.image.files;

      for (const key in files) {
        if (files.hasOwnProperty(key)) {
          formDatas.append("image", files[key]);
        }
      }
    }
    // Append image if present
    if (formProfileData.profilePhoto) {
      formDatas.append("profilePhoto", formProfileData.profilePhoto);
    }

    try {
      const res = await axios.post("users/uploadForm", formDatas, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Set content type for FormData
        },
      });

      if (res?.status == 200) {
        toast.success("Qr Created successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoader(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, [1000]);
      }
      // setQR(null)
      console.log(res?.status);
      if (res?.status == 422) {
        toast.error("Duplicate Page Url!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (err) {
      console.log(err.response.status);
      if (err?.response && err?.response?.status == 501) {
        toast.error("Error in Uploading Form", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      if (err?.response && err?.response?.status == 405) {
        toast.error("User Does Not Found Please SignUp", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          navigate("/signUp");
        }, 3000);
      }
      if (err?.response && err?.response.status == 403) {
        toast.error("Error in saving form data!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          navigate("/signUp");
        }, 3000);
      }
      if (err?.response && err?.response?.status == 422) {
        toast.error("Duplicate Page Url!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const [formData, setFormData] = useState({
    image: { files: {} },
  });

  const [formProfileData, setProfileFormData] = useState({
    profilePhoto: "",
  });
  const [image, setImage] = useState('')
  const handleProfileInputChange = (e) => {
    const imgFile = e.target.files[0];
    setImage(imgFile)
    setProfileFormData({ profilePhoto: imgFile });
  };

  const [showDiv, setShowDiv] = useState(true);
  const [showform, setShowForm] = useState(true);
  const [showPhone, setShowPhone] = useState(true);

  const handleForm = () => {
    setShowForm(false);
    setShowPhone(false);
  };
  const handleBackForm = () => {
    setShowForm(true);
  };

  const qrInputRef = useRef(null);
  const [qr, setQR] = useState("");
  const [profileDiv, setProfileDiv] = useState(true);
  const [webSiteDiv, setWebSiteDiv] = useState(false);
  const [contactDiv, setContactDiv] = useState(false);
  const [googleDiv, setGoogleDiv] = useState(false);
  const [addresDiv, setAddresDiv] = useState(false);
  const handleProfileDiv = () => {
    setProfileDiv(!profileDiv);
  };
  const handleWbSiteDiv = () => {
    setWebSiteDiv(!webSiteDiv);
  };
  const handleContactDiv = () => {
    setContactDiv(!contactDiv);
  };
  const handleGoogleDiv = () => {
    setGoogleDiv(!googleDiv);
  };

  const handleAddress = () => {
    setAddresDiv(!addresDiv);
  };
  const handleMultipleInputChange = (e) => {
    const files = e.target.files;
    const updatedImages = { ...formData.image.files };

    for (let i = 0; i < files.length; i++) {
      const uniqueKey = `file_${Date.now()}_${i}`;
      updatedImages[uniqueKey] = files[i];
    }
    setFormData({
      ...formData,
      image: { files: updatedImages },
    });
  };

  const textRef = useRef(null);

  const handleCopyClick = () => {
    if (textRef.current) {
      // Use clipboard-copy package
      copy(textRef.current.innerText);
    }
  };
  const handleSignOut = () => {
    navigate("/signUp");
    localStorage.removeItem("token");
  };

  const qrRef = useRef(null);

  const downloadQRImage = () => {
    if (qrRef.current) {
      const image = new Image();
      image.crossOrigin = "anonymous"; // Set crossOrigin to avoid canvas security issues

      image.onload = () => {
        html2canvas(qrRef.current, { useCORS: true }).then((canvas) => {
          const dataUrl = canvas.toDataURL();
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "qrcode_image.png";
          link.click();
        });
      };

      image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${data.pageUrl}&size=200x200`;
    }
  };
  const multimg = Object?.keys(formData?.image?.files)?.map(key => (
    <img
      key={key}
      src={URL?.createObjectURL(formData?.image?.files[key])} // Pass File object directly
      className="w-[76px] rounded-full h-[76px]"
      alt=""
    />
  ));
  if(loader){
    return (
    <div style={{ height: 200, background: '#000' }}>
      <ToastContainer/>
     <Placeholder.Paragraph rows={8} />
    <Loader backdrop content="loading..." vertical />
     </div>
    );
  }
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <nav class="bg-white border-gray-200  ">
          <div class="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl p-4 font-sans">
            <Link
              to="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} class="h-16" alt="Flowbite Logo" />
            </Link>

            <div
              id="mega-menu-full"
              class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/dashboard"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Solutions{" "}
                  </button>
                </li>
                <li>
                  <Link
                    to="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <p
                    onClick={handleSignOut}
                    class="block py-2 hover:cursor-pointer px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sign Out
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-gray-100 border items-center  justify-center p-5  flex ">
          <form
            onSubmit={handleSubmitUserData}
            class="  overflow-y-scroll m-12 "
          >
            <div className="flex flex-col    bg-white  md:w-[582px]  lg:w-[1200px] ">
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
              <div className="flex justify-between h-full  px-5  m-12 overflow-y-scroll   ">
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
                        <div className="flex gap-9 pl-2 items-center">
                          <div className=" ">
                            {image ? (<img
                              src={URL.createObjectURL(image)}
                              className="w-[76px] rounded-full h-[76px]"
                              alt=""
                            />):(<img
                              src={profileImg}
                              className="w-[76px] rounded-full h-[76px]"
                              alt=""
                            />)}
                          </div>
                          <hr className="border h-12 font-thin text-[#D2D2D2]" />
                          <div className=" flex  gap-20 items-center justify-start w-[75%]">
                            <label htmlFor="dropzone-imgFile">
                              <div className="">
                                {formProfileData.profilePhoto ? (
                                  <div className="flex gap-2 items-center">
                                    <p className="text-[#D3D3D3]">
                                      Selected file:{" "}
                                      {formProfileData.profilePhoto.name}
                                    </p>
                                    <p
                                      className=" hover:cursor-pointer"
                                      onClick={() =>
                                        setProfileFormData({
                                          ...formProfileData,
                                          profilePhoto: "",
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
                                    <p className=" text-[8px]">Choose File </p>
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
                          value={data?.name}
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
                          value={data?.designation}
                          onChange={handleChange}
                          class=" font-sans font-light  text-[16px] placeholder-[#606060]  border border-full w-1/2 border-gray-300 rounded-full focus:outline-none"
                          required
                        />
                        <input
                          placeholder="Company Name"
                          name="companyName"
                          type="text"
                          id="companyName"
                          value={data?.companyName}
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
                        <div className="border w-[33%] bg-gray-100 rounded-l-full">
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
                            placeholder="Enter your unique pageUrl (this can not be chaged once created) "
                            type="text"
                            name="pageUrl"
                            id="pageUrl"
                            value={data?.pageUrl}
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
                        <div
                          className={` ${
                            !profileDiv
                              ? "hidden transition-all ease-in-out duration-700 h-0 "
                              : "transition-all tra ease-in-out duration-700 h-full flex flex-col gap-4"
                          } `}
                        >
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
                                value={data?.email}
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
                                value={data?.mobile}
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
                                value={data?.sms}
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
                        value={data?.webSiteUrl}
                        onChange={handleChange}
                        className={` ${
                          !webSiteDiv
                            ? "hidden"
                            : " font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-[90%] rounded-full    border-gray-300 focus:outline-none"
                        }`}
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
                        <div
                          className={` ${
                            contactDiv ? "flex flex-col gap-4" : "hidden"
                          }`}
                        >
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
                                value={data?.linkedinUrl}
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
                                value={data?.twitterUrl}
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
                                value={data?.instagramUrl}
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
                        <div
                          className={` ${
                            addresDiv ? "flex flex-col gap-4" : "hidden"
                          }`}
                        >
                          <div class=" flex items-center">
                            <div className=" w-[90%]   ">
                              <input
                                autoComplete="true"
                                placeholder="   Address Line 1"
                                type="text"
                                name="address1"
                                id="address1"
                                onChange={handleChange}
                                value={data?.address1}
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
                              value={data?.address2}
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
                              value={data?.city}
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
                              value={data?.state}
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
                              value={data?.country}
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
                              value={data?.pinCode}
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
                        <div
                          className={` ${
                            googleDiv ? "flex flex-col gap-4" : "hidden"
                          }`}
                        >
                          <div class=" flex items-center">
                            <div className=" w-[90%] ">
                              <input
                                autoComplete="true"
                                placeholder="Enter Your Location URL"
                                type="text"
                                name="googleMapUrl"
                                id="GoogleMapUrl"
                                value={data?.googleMapUrl}
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
                        </div>
                        <div className="flex  items-center  ">
                          <div className=" ">
                            <img
                              src={formImg}
                              className="w-[82px] h-[82px]"
                              alt=""
                            />
                          </div>
                          <hr className="border h-12 mr-4 font-thin text-[#D2D2D2]" />
                          <div className="flex">
                            {/* Display selected files */}
                            {Object?.keys(formData.image).length > 0 && (
                              <div className="flex flex-col w-96 flex-wrap gap-2">
                                <p className="text-[#D3D3D3] flex flex-col">
                                  Selected files:{" "}
                                  {Object?.values(formData.image.files)
                                    .map((file) => file.name)
                                    .join(", ")}
                                </p>
                                <p
                                  className="hover:cursor-pointer"
                                  onClick={() =>
                                    setFormData({ ...formData, image: {} })
                                  }
                                >
                                  <span className="text-[#D3D3D3]">
                                    <MdDeleteOutline size={24} />
                                  </span>
                                </p>
                              </div>
                            )}
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
                                onChange={handleMultipleInputChange}
                                id="dropzone-file"
                                name="image"
                                type="file"
                                multiple // Allow multiple files to be selected
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="flex gap-4 flex-wrap">{multimg}</div>
                      </div>
                    </div>
                    <div className="w-full flex items-end justify-end">
                      <button
                        onClick={handleForm}
                        className="bg-[#022D24] px-7 py-2 font-sans text-sm  font-thin rounded-full text-white"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-[70%] mx-5 ">
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

                    <div className="flex  mt-5 justify-center gap-3 w-full  ">
                      <button
                        onClick={handleBackForm}
                        className="bg-[#022D24] px-7 py-2 rounded-full font-sans font-thin text-sm text-white"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="bg-[#022D24] px-7 py-2 rounded-full font-thin text-sm font-sans text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
                <div className=" w-[400px] h-[550px] shadow-md rounded-2xl overflow-hidden">
                  <div className="border overflow-hidden rounded-t-xl ">
                    <div className="flex  w-[350px] items-center px-2 overflow-hidden justify-between">
                      <div className="justify-around border-b  overflow-hidden pt-4 items-center p-3 gap-3 flex h-14">
                        <p ref={textRef} className="w-full text-lg  ">
                          https://tap-and-tag.vercel.app/vcard/{data?.pageUrl}{" "}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <MdContentCopy
                          size={20}
                          onClick={handleCopyClick}
                          className="hover:cursor-pointer"
                        />
                        <Link
                          target="_blank"
                          to={`/https://tap-and-tag.vercel.app/${data?.pageUrl}`}
                        >
                          <FiExternalLink
                            size={20}
                            className="hover:cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="justify-between  bg-gray-200 items-center p-3 gap-3 w-full flex h-14">
                      <div className="flex items-center gap-2">
                        <IoIosEye
                          size={20}
                          onClick={() => {
                            setShowPhone(true);
                          }}
                          className="hover:cursor-pointer"
                        />
                        <MdOutlineQrCode
                          size={20}
                          onClick={() => {
                            setShowPhone(false);
                          }}
                          className="hover:cursor-pointer"
                        />
                      </div>
                      <button
                        onClick={downloadQRImage}
                        className="bg-[#022D24] hover:cursor-pointer px-7 py-2 rounded-md font-thin text-sm font-sans text-white"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                  {showPhone ? (
                    <MobilePreview data={data} profileimg={image} formData={formData}/>
                    // <img src={phone} class="object-contain" alt="Molog Logo" />
                  ) : (
                    <div className=" flex items-center justify-center ">
                      <img
                        ref={qrRef}
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${data.pageUrl}&size=200x200`}
                        className="mt-5"
                        alt="QR Code"
                        crossOrigin="anonymous" // Set crossOrigin to avoid canvas security issues
                      />
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QrForm;
