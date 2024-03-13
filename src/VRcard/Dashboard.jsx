import React, { useEffect, useRef, useState } from "react";
import axios from '../Axios/Axios'
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import logo from '../Images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns'
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import { CiEdit } from "react-icons/ci";
import { wait } from "@testing-library/user-event/dist/utils";




function Dashboard() {
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem("token")
  const [formId, setFormId] = useState();

  const navigate = useNavigate();
  // console.log(token);
  console.log("userData *******------------>", userData);

  useEffect(() => {
    console.log("mount");
    const fetchData = async () => {
      try {
        const response = await axios.get('users/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("getData of User **********-------->", response);
        setUserData(response.data.response);


      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [])


  const handleSignOut = () => {
    navigate("/signUp");
    localStorage.removeItem("token");
  }

  function formateTime(timestamp) {

    const date = new Date(timestamp)
    const formatted = format(date, 'MMMM dd, yyyy hh:mm a')
    return formatted;

  }
  const qrCodeRef = useRef(null);

  const naviagte = useNavigate()

  const handleEdit = (formId) => {

    console.log(formId);
    // const res = await axios.post("", {}, {})
    navigate(`/qrform/${formId}`)
  }



  return (
    <div>
      {/* navbar */}




      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 font-sans">
          <Link to={"/"} class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-16" alt="Flowbite Logo" />
          </Link>

          <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={"/qrform"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">QR Code Generator</Link>
              </li>
              <li>
                <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Solutions </button>
              </li>
              <li>
                <Link to="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
              </li>
              <li>
                <Link to="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Articles</Link>
              </li>
              <li>
                <Link to="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
              </li>
              <li>
                <p onClick={handleSignOut} class="block py-2 hover:cursor-pointer px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Sign Out</p>
              </li>
            </ul>
          </div>

        </div>


      </nav>

      {/* navbar code end */}

      <div class="relative w-full flex justify-center overflow-x-auto">
        <table class="w-[75%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Form Name
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                QR Code
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((item, index) => (
              <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {formateTime(item.timeStamp)}

                </td>
                <td class="px-6 py-3  justify-center  flex flex-col font-sans">
                  {item.formDataID}
                  <span className=" font-bold text-black">{item?.formName}</span>
                  <span className="text-gray-300"><a href="" className="hover:underline hover:text-red-500">htpps://{item?.pageUrl}</a></span>
                </td>
                <td class="px-6 py-3 font-sans">{item?.type}</td>
                <td ref={qrCodeRef} class="px-6 py-3 font-sans">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${item?.qr}&size=70x70`} alt="QR Code" />
                </td>

                <td className="px-6 py-3 flex hover:underline hover:cursor-pointer hover:text-blue-500 items-center gap-1 font-sans">
                  <CiEdit onClick={() => { handleEdit(item.formDataID) }} size={20} />
                  <span onClick={() => { handleEdit(item.formDataID) }}>edit</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Dashboard;
