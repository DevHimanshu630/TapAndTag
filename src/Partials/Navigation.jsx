import React, { useEffect, useState } from 'react'
import logo from "../Images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../Context/Cart';
import axios from '../Axios/Axios';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import HeaderCart from '../Components/HeaderCart';
import { Icon, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { useUserContext } from '../Context/User';

function Navigation() {
  const {userInfo,setUserInfo} = useUserContext()
  const navigate = useNavigate()
  // const token = localStorage.getItem('token')

  const handleSignOut = async() => {
    toast.error("Signed Out!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    localStorage.removeItem("tpt_token");
    setUserInfo(null)
    setTimeout(()=>{
      navigate("/signUp");
    }, 1000)
  };
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navbarStyle = {
    backgroundColor: "#FAF9F6",
    boxShadow: "0px 0px 20px gray",
    position: "fixed",

    width: "100%",
    height: "108px",
    display: "block",
    transition: "top 0.5s ease-in-out",
    zIndex: "2",
  };


  return (
    <nav  style={navbarStyle} class=" flex  items-center  justify-center  ">
        <div class="flex flex-wrap justify-between items-end mx-auto max-w-screen-xl  font-sans">
          <Link
            to={"/"}
            class="flex items-end  space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="md:w-[140px] mt-1 w-[120px]" alt="Flowbite Logo" />
          </Link>

          <div
            id="mega-menu-full"
            class="items-center justify-between font-medium hidden w-full md:gap-6 md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link
                  to={"/qrform"}
                  class="block py-2 px-3 text-gray-900 rounded "
                  aria-current="page"
                >
                  QR Code Generator
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  class="block py-2 px-3 text-gray-900 rounded "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/product"}
                  class="block py-2 px-3 text-gray-900 rounded "
                  aria-current="page"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to={"/Sustainability"}
                  class="block py-2 px-3 text-gray-900 rounded "
                  aria-current="page"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  class="block py-2 px-3 text-gray-900 rounded "
                  aria-current="page"
                >
                  Support
                </Link>
              </li>
              
              
              <li>
                <Link
                  to={'/cart'}
                  class="block py-2 px-2 "
                >
                  <HeaderCart/>
                </Link>
              </li>
              
            </ul>
            <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                <AccountCircleOutlinedIcon className='text-black ' fontSize='large'/>
              </IconButton>
              </Tooltip>
              <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {userInfo?.data?.username}
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
          <BookmarkBorderOutlinedIcon fontSize="small"/>
          </ListItemIcon>
          <Link to='/order'>
          My Orders
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <DashboardOutlinedIcon fontSize="small"/>
          </ListItemIcon>
          <Link to='/dashboard'>
          Dashboard
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
              </Menu>
          </div>
          
        </div>
      </nav>
  )
}

export default Navigation
