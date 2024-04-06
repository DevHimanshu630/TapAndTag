import React, { useEffect } from 'react'
import logo from "../Images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../Context/Cart';
import axios from '../Axios/Axios';

function Navigation() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const {cartcount, setCartcount} = useCartContext()
  const handleSignOut = () => {
    toast.error("Signed Out!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(()=>{
      navigate("/signUp");
    }, 1000)
    localStorage.removeItem("token");
  };
  useEffect(()=>{
    const fetch = async()=>{
    const res = await axios.get("users/cart", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        setCartcount(res.data.cart.length);
    }
    fetch()
    },[])

  return (
    <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 font-sans">
          <Link
            to={"/"}
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
                  to={"/qrform"}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  QR Code Generator
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
                <Link
                  to={'/cart'}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cart-({cartcount})  
                </Link>
              </li>
              <li>
                <Link
                  to={'/order'}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                Orders
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
  )
}

export default Navigation
