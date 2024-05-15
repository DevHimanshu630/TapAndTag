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
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import logo from "../Images/logo.png";
import html2canvas from "html2canvas";
import VcardTemplate from "../VRcard/VcardTemplate";
import MobilePreview from "../Components/MobilePreview";
import { useUserContext } from "../Context/User";
import { Loader, Placeholder } from "rsuite";
import Navigation from "../Partials/Navigation";
import QrNavigation from "../Partials/QrNavigation";
import { OrderNowContext, useOrderNowContext } from "../Context/Ordernow";
function QrForm() {
  const { userInfo, setUserInfo } = useUserContext();
  const {
    OrderNow,
    setOrderNow,
    OrderFormData,
    setOrderFormData,
  } = useOrderNowContext();
  const [loader, setLoader] = useState(false);
  const { formId } = useParams();
  const token = localStorage.getItem("tpt_token");
  console.log(formId);
  const [pageurl, setPageurl] = useState("");
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

  const [customCss, SetCustomCss] = useState({
    backgroundImage: "",
    PrimaryColor: "",
    SecondaryColor: "",
    PrimaryProfileText: "",
    SecondaryProfileText: "",
    PrimaryText: "",
    SecondaryText: "",
  });

  console.log("customCss Data ---------->>>>>>", customCss);
  useEffect(() => {
    const formDatas = new FormData();
    if (formId) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`users/update/${formId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            // withCredentials: true
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

  const [customImg, setCustomImg] = useState({})
  useEffect(()=>{
    const fetching = async() =>{
      const data = await axios.get('users/background_images',{
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for FormData
          Authorization: `Bearer ${token}`,
        },
    })
    setCustomImg(data)
    }
    fetching()
  },[])

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

    if (userInfo) {
      try {
        const res = await axios.post("users/uploadForm", formDatas, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for FormData
            Authorization: `Bearer ${token}`,
          },
          // withCredentials: true
        });
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
      } catch (err) {
        // console.log(err?.response?.status);
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
          toast.error("User Does Not Found Please SignUp First", {
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
        if (err?.response && err?.response?.status == 403) {
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

        if (err?.response?.status === 405) {
          toast.error("Session Expired!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          localStorage.removeItem("tpt_token");
          setTimeout(() => {
            navigate("/login");
          }, [1000]);
        }
      }
    } else {
      toast.error("User Does Not Found Please SignUp First", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/signUp");
      }, 2000);
      setOrderFormData(formDatas);
      setOrderNow(true);
    }
  };

  const [formData, setFormData] = useState({
    image: { files: {} },
  });

  const [formProfileData, setProfileFormData] = useState({
    profilePhoto: "",
  });
  const [image, setImage] = useState("");
  const handleProfileInputChange = (e) => {
    const imgFile = e.target.files[0];
    setImage(imgFile);
    setProfileFormData({ profilePhoto: imgFile });
  };

  const [showDiv, setShowDiv] = useState(true);
  const [showform, setShowForm] = useState(true);
  const [showPhone, setShowPhone] = useState(true);

  function validateForm() {
    const form = document.getElementById("myform");
    if (form.checkValidity()) {
      // Form is valid, proceed with your logic
      console.log("Form is valid");
      setData((prev) => ({
        ...prev,
        pageUrl: pageurl,
      }));
      setShowForm(false);
      setShowPhone(false);
    } else {
      // Form is invalid, show error messages or handle accordingly
      console.log("Form is invalid");
      form.reportValidity(); // Show browser's default validation error messages
    }
  }
  const handleForm = () => {
    validateForm();
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
  const [bioDiv, setBioDiv] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false)
  const [colorCustom, setColorCustom] = useState(false)
  const handleProfileDiv = () => {
    setProfileDiv(!profileDiv);
  };
  const handleBioDiv = () =>{
    setBioDiv(!bioDiv)
  }
  const handleWbSiteDiv = () => {
    setWebSiteDiv(!webSiteDiv);
  };
  const handleContactDiv = () => {
    setContactDiv(!contactDiv);
  };
  const handleGoogleDiv = () => {
    setGoogleDiv(!googleDiv);
  };
  const handleBackgrondChange = () =>{
    setBackgroundChange(!backgroundChange);
  }
  const handleColor = () =>{
    setColorCustom(!colorCustom);
  }

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

  const handleSignOut = async () => {
    toast.error("Signed Out!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    localStorage.removeItem("tpt_token");
    setTimeout(() => {
      navigate("/signUp");
    }, 1000);
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
  const [multimg, setMultimg] = useState(null);
  useEffect(() => {
    const showdata = Object?.keys(formData.image.files)?.map((key) => (
      <img
        key={key}
        src={URL?.createObjectURL(formData.image.files[key])} // Pass File object directly
        className="w-[76px] rounded-full h-[76px]"
        alt=""
      />
    ));
    console.log("data", showdata);
    setMultimg(showdata);
  }, [formData, setFormData]);
  if (loader) {
    return (
      <div className="loading">
        <div class="typewriter">
          <div class="slide">
            <i></i>
          </div>
          <div class="paper"></div>
          <div class="keyboard"></div>
        </div>
      </div>
    );
  }

  const handleCustomCss = (e) => {
    console.log(e);
    console.log(
      "=============>>",
      e.target.src,
      e.target.getAttribute("value")
    );
    const name = e.target.name;
    const value =
      e.target.type === "color"
        ? e.target.value
        : e.target.getAttribute("value");
    SetCustomCss((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <QrNavigation />
        <ToastContainer />

        <div className="bg-gray-100 border items-center  justify-center md:p-5  flex ">
          <form
            id="myform"
            onSubmit={handleSubmitUserData}
            class=" overflow-y-scroll m-0 md:w-[100vw] lg:w-auto "
          >
            <div className="flex flex-col    bg-white    lg:w-[1200px] ">
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
              <div className="flex justify-between h-full  px-5  md:m-12 overflow-y-scroll   ">
                {showform ? (
                  <div className=" md:w-[100%] lg:w-[70%]">
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
                            {image ? (
                              <img
                                src={URL.createObjectURL(image)}
                                className="w-[76px] rounded-full h-[76px]"
                                alt=""
                              />
                            ) : (
                              <img
                                src={profileImg}
                                className="md:w-[76px] rounded-full md:h-[76px]"
                                alt=""
                              />
                            )}
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
                      <div class="mb-2 mt-3 md:w-[90%]">
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

                      <div class="mb-5 md:w-[90%] flex flex-col  md:flex md:flex-row gap-5">
                        <input
                          placeholder="Designation"
                          name="designation"
                          type="text"
                          id="Designation"
                          value={data?.designation}
                          onChange={handleChange}
                          class=" font-sans font-light w-full  text-[16px] placeholder-[#606060]  border border-full md:w-1/2 border-gray-300 rounded-full focus:outline-none"
                        />
                        <input
                          placeholder="Company Name"
                          name="companyName"
                          type="text"
                          id="companyName"
                          value={data?.companyName}
                          onChange={handleChange}
                          class="font-sans font-light  text-[16px] placeholder-[#606060]  border border-full w-full md:w-1/2 border-gray-300 text-gray-900 rounded-full focus:outline-none"
                        />
                        
                      </div>
                      <div className="w-[90%]  flex gap-2  items-center">
                        <p
                          style={linearGradientStyle}
                          className="font-sans font-medium text-[20px] tracking-wide"
                        >
                          Create Your Page URL
                        </p>
                        <span className="text-[12px] font-sans">
                          (Once saved, cannot be changed later)
                        </span>
                      </div>
                      <div className="flex items-center transition-all ease-in-out duration-500">
                        <div className="border w-[33%] bg-gray-100 rounded-l-full">
                          <label
                            for="emailicon"
                            class="block p-2 pl-6 text-left font-sans font-light  text-[16px] placeholder-[#606060]   "
                          >
                            https://tapandtag.in/
                          </label>
                        </div>
                        <div className="border w-[56%]  rounded-r-full  ">
                          <input
                            autoComplete="true"
                            placeholder="Enter your unique pageUrl (this can not be chaged once created) "
                            type="text"
                            name="pageUrl"
                            id="pageUrl"
                            value={pageurl}
                            onChange={(e) =>
                              setPageurl(e.target.value.toLowerCase().trim())
                            }
                            class="font-sans font-light  text-[12px] placeholder-[#D2D2D2] w-full rounded-r-full  border-none  border-gray-300 focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex mb-12 flex-col gap-4  w-full">
                      <div className="flex gap-5 w-[90%] md:w-full flex-col">
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
                          Bio
                        </p>
                        <label class="inline-flex items-center cursor-pointer">
                          <input
                            onClick={handleBioDiv}
                            type="checkbox"
                            value=""
                            class="sr-only peer "
                          />
                          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                        </label>
                      </div>
                      <textarea
                        placeholder="Enter your Bio"
                        name="bio"
                        type="text"
                        id="bio"
                        value={data?.bio}
                        onChange={handleChange}
                        className={` ${
                          !bioDiv
                            ? "hidden"
                            : " font-sans font-light border  text-[16px] placeholder-[#D2D2D2] md:w-[90%] rounded-lg h-24   border-gray-300 focus:outline-none"
                        }`}
                       
                      />
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
                            class="sr-only peer "
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
                            : " font-sans font-light border  text-[16px] placeholder-[#D2D2D2] md:w-[90%] rounded-full    border-gray-300 focus:outline-none"
                        }`}
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
                          <div class=" flex  items-center">
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
                              />
                            </div>
                          </div>
                          <div className=" md:flex md:flex-row flex flex-col w-[90%]  gap-5 ">
                            <input
                              autoComplete="true"
                              placeholder="  Address Line 2"
                              type="text"
                              name="address2"
                              id="address2"
                              value={data?.address2}
                              onChange={handleChange}
                              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full md:w-[70%]   border-gray-300  focus:outline-none"
                            />
                            <input
                              autoComplete="true"
                              placeholder="  City"
                              type="text"
                              name="city"
                              id="City"
                              value={data?.city}
                              onChange={handleChange}
                              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  md:w-[30%]   border-gray-300 focus:outline-none"
                            />
                          </div>
                          <div className=" md:flex md:flex-row flex flex-col w-[90%] justify-evenly mb-5 gap-5 ">
                            <input
                              autoComplete="true"
                              placeholder="   State"
                              type="text"
                              name="state"
                              id="State"
                              value={data?.state}
                              onChange={handleChange}
                              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full md:w-[35%]   border-gray-300 focus:outline-none"
                            />
                            <input
                              autoComplete="true"
                              placeholder="  Country"
                              type="text"
                              name="country"
                              id="Country"
                              value={data?.country}
                              onChange={handleChange}
                              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  md:w-[35%]    border-gray-300 focus:outline-none"
                            />
                            <input
                              autoComplete="true"
                              placeholder="  Pin Code"
                              type="text"
                              name="pinCode"
                              id="Pincode"
                              value={data?.pinCode}
                              onChange={handleChange}
                              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  md:w-[35%]    border-gray-300 focus:outline-none"
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
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mb-12  w-[90%]">
                      <div className="flex gap-4 flex-col w-full">
                        <div className="flex items-center justify-between w-full">
                          <p
                            style={linearGradientStyle}
                            className=" font-sans font-medium text-[20px] tracking-wide"
                          >
                            Images
                          </p>
                        </div>
                        <div className="flex w-full items-center  ">
                          <div className=" ">
                            <img
                              src={formImg}
                              className="md:w-[82px] md:h-[82px]"
                              alt=""
                            />
                          </div>
                          <hr className="border h-12 mr-4 font-thin text-[#D2D2D2]" />
                          <div className="flex gap-[7rem] md:gap-0 w-full">
                            {/* Display selected files */}
                            {Object?.keys(formData?.image)?.length > 0 && (
                              <div className="flex flex-col  md:w-96 flex-wrap gap-2">
                                <p className="text-[#D3D3D3] flex flex-col">
                                  Selected files:{" "}
                                  {Object?.values(formData?.image?.files)
                                    .map((file) => file.name)
                                    .join(", ")}
                                </p>
                                <p
                                  className="hover:cursor-pointer"
                                  onClick={() => {
                                    const keysArray = Object.keys(
                                      formData.image.files
                                    );
                                    if (formData?.image && keysArray.length) {
                                      console.log("thing thing ");
                                      setFormData({
                                        ...formData,
                                        image: { files: {} },
                                      });
                                    }
                                  }}
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
                  <div className="w-[70%] h-[100vh] mx-5 ">
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
                    <div className="flex flex-col gap-2 mt-16">
                      <div className="flex gap-5 ">
                      {console.log('------------------>customImg', customImg.data.data)}

                    <div className="flex flex-col mb-12 w-full">
                      <div className="flex gap-5 flex-col border shadow-md rounded-lg">
                        <div className="flex justify-between items-center bg-[#f0f0ff] p-4 rounded-lg">
                          <p
                            style={linearGradientStyle}
                            className=" font-sans font-medium text-[20px] tracking-wide "
                          >
                            Background Image
                          </p>
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              onClick={handleBackgrondChange}
                              type="checkbox"
                              value=""
                              class="sr-only peer"
                            />
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                          </label>
                        </div>
                        <div
                          className={` ${
                            backgroundChange ? "flex flex-col gap-4" : "hidden"
                          }`}
                        >
                          <div class=" flex items-center ">
                            <div className=" w-[90%] flex gap-4 p-4">
                            {customImg.data.data.map((image, index)=>(
                            <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <img src={image.url} alt="" 
                            onClick={handleCustomCss}
                            name="backgroundImage"
                            value={image.url}
                            key={index}
                            className="h-full w-full object-cover cursor-pointer"
                            />
                            </div>))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="flex flex-col mb-12 w-full">
                      <div className="flex gap-5 flex-col border shadow-md rounded-lg">
                        <div className="flex justify-between items-center bg-[#f0f0ff] p-4 rounded-lg">
                          <p
                            style={linearGradientStyle}
                            className=" font-sans font-medium text-[20px] tracking-wide "
                          >
                            Colors
                          </p>
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              onClick={handleColor}
                              type="checkbox"
                              value=""
                              class="sr-only peer"
                            />
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-00 dark:peer-focus:ring-blue-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#022D24]"></div>
                          </label>
                        </div>
                        <div
                          className={` ${
                            colorCustom ? "flex flex-col gap-4" : "hidden"
                          }`}
                        >
                          <div class=" flex flex-col items-center ">
                            
                      <div className=" w-[90%] flex justify-around gap-4 p-4">
                            <div className="flex flex-col w-full gap-2">
                            <h1 className="text-[#76859c]">Primary Color</h1>
                            <div className="flex gap-3 border w-full border-slate-200"> 
                              <input
                                type="color"
                                name="PrimaryColor"
                                value={customCss.PrimaryColor}
                                onChange={handleCustomCss}
                              />
                              <div>{customCss.PrimaryColor}</div>
                            </div>
                            </div>  
                        <div className="flex flex-col w-full gap-2">
                          <h1 className="text-[#76859c]">Secondary Color</h1>
                          <div className="flex gap-3 border w-full border-slate-200">
                          <input
                            type="color"
                            name="SecondaryColor"
                            value={customCss.SecondaryColor}
                            onChange={handleCustomCss}
                          />
                          <div>{customCss.SecondaryColor}</div>
                          </div>
                        </div>
                      
                      </div>
                      <div className=" w-[90%] flex justify-around gap-4 p-4">
                            <div className="flex flex-col w-full gap-2">
                            <h1 className="text-[#76859c]">Primary Profile Text color</h1>
                            <div className="flex gap-3 border w-full border-slate-200"> 
                            <input
                            type="color"
                            name="PrimaryProfileText"
                            value={customCss.PrimaryProfileText}
                            onChange={handleCustomCss}
                          />
                              <div>{customCss.PrimaryProfileText}</div>
                            </div>
                            </div>  
                        <div className="flex flex-col w-full gap-2">
                          <h1 className="text-[#76859c]">Secondary Profile Text color</h1>
                          <div className="flex gap-3 border w-full border-slate-200">
                          <input
                            type="color"
                            name="SecondaryProfileText"
                            value={customCss.SecondaryProfileText}
                            onChange={handleCustomCss}
                          />
                          <div>{customCss.SecondaryProfileText}</div>
                          </div>
                        </div>
                      
                      </div>
                      <div className=" w-[90%] flex justify-around gap-4 p-4">
                            <div className="flex flex-col w-full gap-2">
                            <h1 className="text-[#76859c]">Primary Text color</h1>
                            <div className="flex gap-3 border w-full border-slate-200"> 
                            <input
                            type="color"
                            name="PrimaryText"
                            value={customCss.PrimaryText}
                            onChange={handleCustomCss}
                          />
                              <div>{customCss.PrimaryText}</div>
                            </div>
                            </div>  
                        <div className="flex flex-col w-full gap-2">
                          <h1 className="text-[#76859c]">Secondary Text color</h1>
                          <div className="flex gap-3 border w-full border-slate-200">
                          <input
                            type="color"
                            name="SecondaryText"
                            value={customCss.SecondaryText}
                            onChange={handleCustomCss}
                          />
                          <div>{customCss.SecondaryText}</div>
                          </div>
                        </div>
                      
                      </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  
                )}
                <div className="hidden  w-[400px] md:hidden lg:block  rounded-2xl overflow-hidden">
                  <div className=" overflow-hidden rounded-t-xl ">
                    <div className="flex  w-[350px] items-center px-2 overflow-hidden justify-between">
                      <div className="justify-around border-b  overflow-hidden pt-4 items-center p-3 gap-3 flex h-14">
                        <p ref={textRef} className="w-full text-lg  ">
                          www.tapandtag.in/vcard/{pageurl}{" "}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <MdContentCopy
                          size={20}
                          onClick={handleCopyClick}
                          className="hover:cursor-pointer"
                        />
                        <Link target="_blank" to={`/vcard/${data?.pageUrl}`}>
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
                  <div className="p-5  ">
                    {showPhone ? (
                      <MobilePreview
                        data={data}
                        customCss={customCss}
                        link={false}
                        profileimg={image}
                        formData={formData}
                      />
                    ) : (
                      // <img src={phone} class="object-contain" alt="Molog Logo" />
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
