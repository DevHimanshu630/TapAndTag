import axios from "../Axios/Axios";
import React, { useEffect, useState } from "react";
import { handlePayment } from "../Components/RazorPay";
import { useParams, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

function Payment() {
  const token = localStorage.getItem("tpt_token");
  const [addressSaved, setAddressSaved] = useState(false);
  const { id } = useParams();
  console.log(id);
  const fetchOrder = async () => {
    try {
      const res = await axios.get(`users/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true
      });
      console.log(res);
    }
    catch (e) {
      console.log(e);
    }
  };

  const [form, setForm] = useState({
    country: "",
    fullName: "",
    mobile: "",
    pincode: "",
    address_line1: "",
    address_line2: "",
    address_line3: "",
    landmark: "",
    city: "",
    state: "",
  });
  const handleForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAddress = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await axios.post(
        "users/save-address",
        {
          address: form,
          orderId: id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // withCredentials: true
        }
      );
      if (res.status === 200) {
        toast.success("Address Saved!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      console.log(res);
      setShowAddressSection(false)
      setAddressSaved(true);
    } catch (e) {
      console.log(e);
    }
  };
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  var [city, setCity] = useState("Gorakhpur");
  function handleGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5c61d15ecbe202cf7d97d4dfe626fc88&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.log(error));
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  weather && console.log(weather);
  const handleStateChange = (e) => {
    setForm(e.target.value);
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  const [showAddressSection, setShowAddressSection] = useState(true);
  const toggleAddressSection = () => {
    setShowAddressSection(!showAddressSection);
  };
  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #022D24, #146C60)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };
  
  const styles = {
    container: {
      background: 'linear-gradient(90deg, #022D24 0%, #146C60 94.17%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff', // Text color,
      width: '15%',
    }
   
  };
  return (
    <div>
      <ToastContainer />
      <section className="bg-white  p-40 flex flex-col dark:bg-white text-black mx-24">
      <div className="max-w-screen flex flex-col gap-4">
        <h1 style={gradientTextStyle} className="m-6 self-center text-3xl font-bold ">Payment Page</h1>
        {showAddressSection && (
          <form onSubmit={handleAddress} method="POST" className="space-y-8 flex flex-col">
            <div className="flex w-full gap-8">
                  <div className="w-1/2">    
                    <input
                      type="text"
                      id="name"       
                      class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                      name="fullName"
                      value={form.fullName}
                      onChange={handleForm}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="w-1/2">              
                    <input
                      type="text"
                      id="mobile"
                      class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                      placeholder="Mobile No. (Might be used for Delivery Assistance)"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleForm}
                      required
                    />
                  </div>
                </div>
                  <p  style={gradientTextStyle} className="text-xl font-sans font-medium">Address</p>
                <div className="flex w-full gap-5">
                  <div className="w-1/2">
                  <input
                    type="text"
                    id="address1"
                    class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                      
                    placeholder="Address Line 1 (House No., building, company, apartment)"
                    name="address_line1"
                    value={form.address_line1}
                    onChange={handleForm}
                    required
                  />
                  </div>
                  <div className="w-1/2">
                  <input
                    type="text"
                    id="address2"
                    class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                 
                    placeholder="Address Line 2 (Area, Colony, Street, Village)"
                    name="address_line2"
                    value={form.address_line2}
                    onChange={handleForm}
                    required
                  />
                  </div>
                </div>
                <div>                
                <input
                      type="text"
                      id="address3"
                      class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                   
                      placeholder="Landmark (Optional)"
                      name="landmark"
                      value={form.landmark}
                      onChange={handleForm}
                    />
                </div>
                <div className="flex w-full gap-5">
                <div className="w-1/2 pb-8">     
                  <input
                      type="text"
                      id="City"
                      class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                      placeholder="City"
                      name="city"
                      value={form.city}
                      onChange={handleForm}
                      required
                    />
                  </div>
                  <div className="w-1/2">     
                  <select
                      id="state"
                      class=" border p-2  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                      placeholder="City"
                      name="state"
                      value={form.state}
                      onChange={handleForm}
                      required
                    >
                    <option value="" className="text-[#9C9C9C]">State</option>
                      {indianStates.map((state) => (
                        <option key={state} className="text-[#9C9C9C]" value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    </div>
                    <div className="w-1/2">                  
                    <input
                      type="text"
                      id="pincode"
                      class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full "                      
                      placeholder="Pin Code"
                      name="pincode"
                      value={form.pincode}
                      onChange={handleForm}
                      required
                    />
                   
                  </div>
                </div>
              
                <button
                  type="submit"
                  class=" self-end btn-hover    hidden lg:block color-5"
                >
                  Save Address
                </button>
          </form>
        )}
        <div class="flex bg-[#D2D2D2] border mt-12 rounded-full justify-between w-full">
        <h2 className="text-xl font-medium mt-2 ml-4 text-[#4D4D4D]">
          Delivery Address
        </h2>
        <button
          onClick={toggleAddressSection}
          class="py-3 px-4 text-sm  font-medium text-[#000000] rounded-full  bg-[#D2D2D2] "
        >
          {showAddressSection ? '▲' : '▼'}
          </button>
        </div>
        {addressSaved && !showAddressSection ? (
        <>
          <div className="address py-4 mt-4 border rounded-md w-full flex shadow">
            <div className='px-6 py-4 flex flex-col gap-2'>
            <h2 className=' font-sans text-[#4D4D4D] text-xl'>Delivery Address</h2>
            <h2 className='text-lg font-semibold  font-sans text-[#4D4D4D]'>{form.fullName}</h2>
            <p className='flex py-2 text-[#4D4D4D] flex-col font-sans'>
              <span>{form.address_line1},</span>
              <span>{form.address_line2},</span>
              <span>{form.address_line3} {form.landmark}</span>
              <span className="font-sans">{form.city}, {form.state}, {form.pincode}</span>
            </p>
            <h2 className="font-sans  text-[#4D4D4D]">Phone No: {form.mobile}</h2>
          </div>
            </div>
        </>):""}
        <div className="w-full flex items-center justify-center">
          <button
          disabled={!addressSaved}
          style={styles.container}
          className={`${
            !addressSaved
              ? " text-white font-bold py-2 px-4   rounded cursor-not-allowed"
              : " text-white font-bold py-2 px-4   rounded "
          } p-2 ml-4 border rounded`}
          title={!addressSaved ? "Save address to Proceed" : ""}
          onClick={handlePayment({
            orderId: id,
          })}
        >
          Proceed to Payment
        </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Payment;
