import React, { useEffect, useRef, useState } from "react";
import axios from "../Axios/Axios";
import { Link, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { CiEdit } from "react-icons/ci";
import { wait } from "@testing-library/user-event/dist/utils";
import { MdDeleteOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CheckoutForm from "../Components/CheckoutForm";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Navigation from "../Partials/Navigation";
import { useCartContext } from "../Context/Cart";
import ShimmerDash from "../Shimmer/ShimmerDash";
import { useOrderNowContext } from "../Context/Ordernow";
const { format } = require('date-fns');

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("tpt_token");
  console.log("dashbboard token ", token);
  const [formdel, setFromdel] = useState(false)
  const {OrderNow, setOrderNow, OrderFormData, setOrderFormData} = useOrderNowContext()
  const navigate = useNavigate();
  // console.log(token);
  console.log("userData *******------------>", userData);
  
  useEffect(() => {
    console.log("mount");
    const fetchData = async () => {
      try {
        const response = await axios.get("users/dashboard", {
          // withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("getData of User **********-------->", response);
        setUserData(response.data.response);
      } catch (err) {

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

        console.error("Error fetching user data:", err);
      }
    };

    fetchData();
  }, [formdel, OrderNow]);
  
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
    localStorage.removeItem("tpt_token");
  };

  function formateTime(timestamp) {
    console.log('dekho',timestamp)
    const formatted = format(new Date(timestamp), "MMMM dd, yyyy hh:mm a");
    return formatted;
}
  const qrCodeRef = useRef(null);

  const naviagte = useNavigate();

  const handleEdit = (formId) => {
    console.log(formId);
    navigate(`/UpdateQrForm/${formId}`);
  };
  const handleDelete = async (formId) => {
    try {
      const res = await axios.delete(`users/form/delete/${formId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.error("Form Deleted!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
      }, [1000]);
      setFromdel(!formdel)
    } catch (err) {
      
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
  const [open, setOpen] = useState(false);
  const [selectedform, setSelectedform] = useState('')
  function handleOpen(formId){
    setSelectedform(formId)
    setOpen(true)
  }
  const handleClose = () => setOpen(false);
  
  const radialGradient = {
    background: 'radial-gradient(circle at center, #146C60, #022D24)',  // Colors with 100% opacity
    borderRadius: '10px'
};



  return !userData?(<ShimmerDash/>):(
    <>
    <div>
    <ToastContainer/>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
        <div class="relative w-full  max-h-full ">
        <CheckoutForm handleClose={handleClose} selectedform={selectedform} setOpen={setOpen}/>
          </div>
        </Box>
      </Modal>

      <div class="relative w-full pt-36 flex justify-center overflow-x-auto">
        <table class="w-[75%] text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg">
          <thead style={radialGradient} class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-[7vh]">
            <tr className="text-white rounded-lg" >
              <th scope="col" class="px-6 font-sans font-thin  py-3  rounded-tl-lg border-lg">
                Date
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3">
                Form Name
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3">
                Type
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3">
                QR Code
              </th>
              <th scope="col" class="pl-10 font-sans font-thin py-3  ">
                Select Form
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3 rounded-tr-lg">
                Action
              </th>
             
            </tr>
          </thead>
          <tbody>
            {userData?.map((item, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {/* <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button onClick={()=>{handleOpen(item.formDataID)}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add To Cart
              </button>
                </td> */}
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {formateTime(item.timestamp)}
                  
                </td>
                <td class="px-6 py-3  justify-center  flex flex-col font-sans">
                Tap Count: {item.tapCount}
                  <span className=" font-bold text-black">
                   Form: {item?.formName}
                  </span>
                  <span className="text-gray-300">
                    <a href={`https://www.tapandtag.in/vcard/${item.pageUrl}`} className="hover:underline hover:text-red-500">
                      https://www.tapandtag.in/vcard/{item.pageUrl}
                    </a>
                  </span>
                </td>
                <td class="px-6 py-3 font-sans">{item?.type}</td>
                <td ref={qrCodeRef} class="px-6 py-3 font-sans">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=https://www.tapandtag.in/vcard/${item?.pageUrl}&size=70x70`}
                    alt="QR Code"
                  />
                </td>
                <td class=" px-6  py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex flex-col  gap-4">
                <button onClick={()=>{handleOpen(item.formDataID)}} class="border border-[#146C60] text-[#146C60] hover:bg-[#146C60] hover:text-[white]  font-bold py-2 w-28  rounded-full">
                Add To Cart
                </button>
                <Link to={`/lead/${item.formDataID}`}>
                  <button   class="border border-[#146C60] text-[#146C60] hover:bg-[#146C60] hover:text-[white]  font-bold py-2 px-4  rounded-full">
                    Connections
                  </button>
                </Link>
                </div>
                </td>

                <td className="px-6 py-3 flex hover:underline hover:cursor-pointer hover:text-[#146C60] items-center gap-1 font-sans">
                  <CiEdit
                    onClick={() => {
                      handleEdit(item.formDataID);
                    }}
                    size={20}
                    className="text-[#146C60]"
                  />
                  {/* <span
                    onClick={() => {
                      handleEdit(item.formDataID);
                    }}
                  >
                    edit
                  </span> */}
                </td>
                <td className="px-6 py-3 flex hover:underline hover:cursor-pointer hover:text-[#146C60] items-center gap-1 font-sans">
                  <div className="">
                  <DeleteForeverIcon
                    onClick={() => {
                      handleDelete(item.formDataID);
                    }}
                    size={20}
                    className="text-[#146C60]"
                  />
                  </div>
                  {/* <span
                    onClick={() => {
                      handleDelete(item.formDataID);
                    }}
                  >
                    delete
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
