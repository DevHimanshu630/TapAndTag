import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import axios from "../Axios/Axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/User";
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import Navbar from "../Components/Navbar";

export default function ExampleV2() {
  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useUserContext()
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
      //  {
      //   withCredentials: true
      //   }
      );
      // const info = await axios.get('users/profile',{
      //   withCredentials: true
      // })
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
      setTimeout(() => {
        navigate("/");
      }, [1000]);
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
      console.log(err);
    }
  };

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #022D24, #146C60)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };


  return (
    <>
     <ToastContainer />
<Navbar/>
    <div class="flex h-screen flex-col border justify-center px-6 items-center lg:px-8">
     

     <div className=" rounded-3xl w-[23%] p-8  pt-12 shadow border">
      <div class="">
        <Link to={'/'}><img class="mx-auto  w-auto" src={logo} alt="Your Company" /></Link>
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
            
              <div class="text-sm">
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
                      class="btn-hover  Tenderness  m-auto hidden lg:block color-5"
                    >
                     Login
                    </button>
          </div>
        </form>

        <p class="mt-10  text-center font-normal font-sans text-xs text-[#606060]">
          Not a member?
          <Link
            to="/signup"
            class="font-normal  font-sans leading-6 text-[#606060]"
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
