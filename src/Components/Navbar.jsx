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
import { useUserContext } from "../Context/User";

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
  const {userInfo,setUserInfo} = useUserContext()
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

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollpos]);

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

  const myStyles = {
    background: "linear-gradient(180deg, #F7EF8A 0%, #AE8625 100%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const isLoggedIn = userInfo;
  
  console.log(isLoggedIn);
  return (
    <div
      id="navbar"
      className=""
      style={navbarStyle}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <nav class="p-5 md:p-4 ">
        <div
          class={`${
            isMenuNav ? " " : ""
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
            {isLoggedIn ? (
              // If logged in, show Dashboard button
              <div className="flex gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <Link to={"/qrform"}>
                    <Button
                      type="button"
                      class="btn-hover hidden lg:block color-5"
                    >
                      Order Now
                    </Button>
                  </Link>
                </div>

                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <Link to={"/dashboard"}>
                    <Button
                      type="button"
                      class="btn-hover hidden lg:block color-5"
                    >
                      Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              // If not logged in, show Order Now button

              <div className="flex gap-7 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div className=" list-none  hidden md:block">
                  <li>
                    <Link
                      to={"/login"}
                      class="in-block py-2 px-3 md:p-0 ml-5  text-[18px]  rounded bg-gradient-to-r from-[#022D24]  to-[#146C60]  text-transparent bg-clip-text hover:text-[#146C60] "
                    >
                      Login
                    </Link>
                  </li>
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <Link to={"/qrform"}>
                    <Button
                      type="button"
                      class="btn-hover hidden lg:block color-5"
                    >
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            )}

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
                {/* <li>
                  <Link
                    to={"/login"}
                    class="in-block py-2 px-3 md:p-0 ml-5  text-[18px]  rounded bg-gradient-to-r from-[#022D24]  to-[#146C60]  text-transparent bg-clip-text hover:text-[#146C60] "
                  >
                    Login
                  </Link>
                </li> */}
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

      {/* code for mobile */}

      <div
        className={`w-full   xl:hidden ${
          isMenuOpen ? "block   bg-[#FAF9F6]  " : "hidden"
        }  `}
        id="navbar-toggle"
      >
        <div className="flex flex-col items-center gap-10 ">
          <ul class="flex flex-col w-full font-medium   bg-[#FAF9F6]   ">
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
          {!isLoggedIn ? (<li className="border md:hidden ">
            <Link
              to={"/login"}
              class="flex items-center justify-between py-3 text-lg  px-3 text-black  rounded "
              aria-current="page"
            >
              Login
            </Link>
          </li>):(null)}

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
