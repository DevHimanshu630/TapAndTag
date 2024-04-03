import axios from '../Axios/Axios';
import React, { useState } from 'react'
import { handlePayment } from '../Components/RazorPay';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";


function Payment() {
  const token = localStorage.getItem("token")
  const {id} = useParams()
  const [form, setForm] = useState({
    country: "",
    fullname: "",
    mobile: "",
    pincode: "",
    address1: "",
    address2: "",
    address3: "",
    landmark: "",
    city: "",
    state: "",
  })
  const handleAddress = async(e) =>{
    e.preventDefault();
    try{const res = await axios.post('users/save-address',{
      address : form
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if(res.status === 200){
      toast.success("Address Saved!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  console.log(res)
  }catch(e){
      console.log(e)
    }
  }
  const handleForm = (e) =>{
    setForm((prev)=>({
      ...prev, 
      [e.target.name]: e.target.value
    }))
  }
  const linearGradientStyle = {
    background: "linear-gradient(90deg, #022D24 0%, #146C60 94.17%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  
  return (
    <div>
      <ToastContainer/>
      <form onSubmit={handleAddress} method='POST' className='p-2'>
      <div className="flex flex-col mb-10 w-full">
      <div className="flex gap-5 flex-col">
        <div className=" w-[90%] flex justify-between items-center ">
          <p
            style={linearGradientStyle}
            className=" font-sans font-medium text-[20px] tracking-wide"
          >
            Address Details
          </p>
        </div>
        <div>
          <div class=" flex items-center">
            
            <div className="w-[90%] flex gap-4 flex-col">
          <input
              autoComplete="true"
              placeholder="Full Name:"
              type="text"
              name="fullname"
              id="fullname"  
              value={form.fullname}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-full rounded-full border-gray-300 focus:outline-none"
          />
              <input
                autoComplete="true"
                placeholder="Mobile"
                type="text"
                name="mobile"
                id="mobile"
                value={form.mobile}
                onChange={handleForm}
                required
                class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-full rounded-full border-gray-300 focus:outline-none"
              />
            </div>
          </div>
          
          <div className=" md:flex md:flex-row flex flex-col w-[90%] gap-5 ">
          <input
              autoComplete="true"
              placeholder="Address Line 1"
              type="text"
              name="address1"
              id="address1"  
              value={form.address1}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] w-full rounded-full border-gray-300 focus:outline-none"
          />
            <input
              autoComplete="true"
              placeholder="  Address Line 2"
              type="text"
              name="address2"
              id="address2"
              value={form.address2}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full md:w-[70%]   border-gray-300  focus:outline-none"
              
            />
            <input
              autoComplete="true"
              placeholder="  Address Line 3"
              type="text"
              name="address3"
              id="address3"
              value={form.address3}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full md:w-[70%]   border-gray-300  focus:outline-none"
            />
            <input
              autoComplete="true"
              placeholder="  City"
              type="text"
              name="city"
              id="City"
              value={form.city}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  md:w-[30%]   border-gray-300 focus:outline-none"
            />
          </div>
          <div className=" md:flex md:flex-row flex flex-col w-[90%] justify-evenly mb-5 gap-5 ">
            <input
              autoComplete="true"
              placeholder="State"
              type="text"
              name="state"
              id="State"
              value={form.state}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full md:w-[35%]   border-gray-300 focus:outline-none"
            />
            <input
              autoComplete="true"
              placeholder="  Country"
              type="text"
              name="country"
              id="Country"
              value={form.country}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  md:w-[35%]    border-gray-300 focus:outline-none"
            />
            <input
              autoComplete="true"
              placeholder="Pin Code"
              type="text"
              name="pincode"
              id="pincode"
              value={form.pincode}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full  md:w-[35%]    border-gray-300 focus:outline-none"
              
            />
            <input
              autoComplete="true"
              placeholder="LandMark"
              type="text"
              name="landmark"
              id="landmark"
              value={form.landmark}
              onChange={handleForm}
              required
              class="font-sans font-light border  text-[16px] placeholder-[#D2D2D2] rounded-full md:w-[35%] border-gray-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
      </div>
      <button type='submit' className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Save Address</button>
      </form>
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded' 
      onClick={handlePayment({
        orderId: id,
      })}>Payment</button>
    </div>
  )
}

export default Payment
