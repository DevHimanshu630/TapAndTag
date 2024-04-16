import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import axios from "../Axios/Axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/User";
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';

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

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
      <ToastContainer />
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={'/'}><img class="mx-auto h-32 w-auto" src={logo} alt="Your Company" /></Link>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmitLogin}
          class="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              for="email"
              class="block text-sm  font-sans  font-light leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-sans font-light leading-6 text-gray-900"
              >
                Password
              </label>
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
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-normal font-sans leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signup"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </Link>
        </p>
      {/* </div>
      <div class="wrapper" id="wrapper">
      <header>
        <i class="bx bx-cookie"><CookieOutlinedIcon fontSize="large"/></i>
        <h2>Cookies Consent</h2>
      </header>

      <div class="data">
        <p>This website use cookies to help you have a superior and more relevant browsing experience on the website. <a href="#"> Read more...</a></p>
      </div>

      <div class="buttons">
        <button class="button" id="acceptBtn">Accept</button>
        <button class="button" id="declineBtn">Decline</button>
      </div> */}
    </div>
    </div>
  );
}
