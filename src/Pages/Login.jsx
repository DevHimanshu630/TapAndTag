import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import axios from "../Axios/Axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "../Context/User";
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import Navbar from "../Components/Navbar";
import { useOrderNowContext } from "../Context/Ordernow";
import { FourMp, SettingsTwoTone } from "@mui/icons-material";

export default function ExampleV2() {
  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useUserContext()
  const {OrderNow, setOrderNow, OrderFormData, setOrderFormData} = useOrderNowContext()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("users/login", {
        email: formData.email,
        password: formData.password,
      },
      );
      setUserInfo(res.data.token)
      localStorage.setItem("tpt_token", res.data.token);
      console.log("hi there-------------------------", res);
      toast.success("login successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
      });
        if(OrderNow){
          setTimeout(async()=>{
            try {
            const form = await axios.post("users/uploadForm", OrderFormData, {
              headers: {
                "Content-Type": "multipart/form-data", // Set content type for FormData
                Authorization: `Bearer ${res.data.token}`,
              },
              // withCredentials: true
            });
            if (form?.status == 422) {
              toast.error("Duplicate Page Url!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }
            if (form?.status == 200) {
              toast.success("Qr Created successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
              setOrderNow(false)
            }
            // setQR(null)
            
          } catch (err){
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
              }, 2000);
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
             setTimeout(()=>{
                navigate('/qrform')
             },[1000])
            }
      
            if ( err?.response?.status === 405) {
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
                  navigate("/login")
              }, [1000])
      
      
          }
          }
        },[2000])
        setTimeout(() => {
          navigate('/dashboard');
        }, [1000]);
        }else{
          setTimeout(() => {
            navigate("/");
          }, [1000]);
        }
      
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error("User does not exists.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      if (err.response && err.response.status === 403) {
        toast.error("Invalid Password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      if (err.response && err.response.status === 500) {
        toast.error("Unexpected Error Occured", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
     
      if ( err?.response?.status === 405) {
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
            navigate("/login")
        }, [1000])


    }
      console.log(err);
    }
  };

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #022D24, #146C60)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };
  console.log(useLocation())

  return (
    <>
     <ToastContainer />
<Navbar/>
    <div class="flex h-screen w-full  flex-col border justify-center px-6 items-center lg:px-8">
     

     <div className="mt-[5rem] rounded-3xl w-[85vw] md:w-[50vw] lg:w-[35vw] 2xl:w-[27vw] p-8  pt-12 shadow border">
      <div class="">
        <Link to={'/'}><img class="md:w-[140px] w-[120px] mx-auto" src={logo} alt="Your Company" /></Link>
        <h2 style={gradientTextStyle} class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div class="mt-10  ">
        <form
          onSubmit={handleSubmitLogin}
          class="space-y-6"
          action="#"
          method="POST"
        >
          <div>
           
            <div class="mt-2">
              <input
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                placeholder="Enter your Email Address"
                class="block w-full rounded-full  py-1.5 text-gray-900 ring-inset ring-gray-300 placeholder:text-[#9C9C9C]  placeholder:font-sans border-[#D2D2D2] focus:ring-0 border focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="pb-10 ">
            <div class="flex items-center justify-between">
            
              <div class="text-sm ml-2">
                <Link
                  to={"/accounts/password/forgot"}
                  class="font-normal font-sans text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div class="mt-2">
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                placeholder="Enter your password"
                class="block w-full rounded-full  py-1.5 text-gray-900 ring-inset ring-gray-300 placeholder:text-[#9C9C9C]  placeholder:font-sans border-[#D2D2D2] focus:ring-0 border focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
          <button
                      type="submit"
                      class="btn-hover Tenderness m-auto block color-5"
                    >
                     Login
                    </button>
          </div>
        </form>

        <p class="mt-10  text-center  font-sans text-xs text-[#606060]">
          Not a member?&nbsp;
          <Link
            to="/signup"
            class=" underline font-sans leading-6 text-[#606060]"
          >
            SignUp
          </Link>
        </p>
  
     </div>
     </div>
    </div>
    </>
  );
}
