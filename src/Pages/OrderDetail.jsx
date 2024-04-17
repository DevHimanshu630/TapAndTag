import { Link, useParams } from 'react-router-dom'
import axios from '../Axios/Axios'
import React, { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function OrderDetail() {
  const {id} = useParams()
  const [refId, setRefId] = useState('')
  const token = localStorage.getItem("tpt_token")
  const [details, setDetails] = useState('')
  useEffect(()=>{
    const getting = async() =>{
        const res = await axios.get(`users/order/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            }
            // withCredentials: true
        })
        console.log(res.data)
        setDetails(res.data)
    }
    const gettingId = async() =>{
      const Query = window.location.search
      const urlQuery = new URLSearchParams(Query)
      setRefId(urlQuery.get('referenceId'));
    }
    getting()
    gettingId()
  },[])
  
  return (
    <div className='flex bg-white shadow-md border rounded-md mt-48 p-12 m-72'>
      <div className='flex-[0.3] flex gap-4 items-center'>
      <div className='flex gap-2'>
      <img src="/metal.jpg" className='w-[10rem] rounded-xl' alt="" />
      </div> 
      <div className='flex gap-14 flex-col font-sans text-[#4D4D4D]'> 
      <div>
      <h2 className=' font-semibold'>Ordered Item: </h2>
      <p className=' text-xs'>Plastic Card - {details?.order?.items[0]?.cardQuantity.plasticCard}</p>
      <p className=' text-xs'>Wood Card - {details?.order?.items[0]?.cardQuantity.woodCard}</p>
      <p className=' text-xs'>Metal Card - {details?.order?.items[0]?.cardQuantity.metalCard}</p>
      </div>
      <p className='flex items-center'>
        <CurrencyRupeeIcon fontSize='small'/> {details?.order?.amount}
      </p>
      </div>
      </div>
      <div className='flex-[0.5] border-l-2  text-[#4D4D4D] font-sans px-6 py-4 flex flex-col gap-2'>
        <h2 className=' text-xl'>Delivery Address</h2>
        <h2 className='text-lg font-semibold'>{details?.address?.fullName}</h2>
        <p className='flex flex-col my-2'>
          <span>{details?.address?.address_line1},</span>
          <span>{details?.address?.address_line2}</span>
          <span>{details?.address?.address_line3} {details?.address?.landmark}</span>
          <span>{details?.address?.city}, {details?.address?.state}, {details?.address?.pincode}</span>
        </p>
        <h2>Phone No: {details?.address?.mobile}</h2>
      </div>
      <div className='flex-[0.3] font-sans text-[#4D4D4D] flex gap-10 flex-col border-l-2 px-6 py-4'>
        <h2 className='font-bold text-xl'>Order Details </h2>
        <div>
        <p>Order Id: {details?.order?._id}</p>
        <p>Reference Id: {details?.referenceId}</p>
        <div className='flex items-center gap-2'>
        {details?.order?.paymentStatus === 'pending' ? (
            <div class="h-4 w-4 rounded-full bg-red-500"></div>
          ) : (
            <div class="h-4 w-4 rounded-full bg-green-500"></div>
        )}
        {details?.order?.paymentStatus}
        </div>
        </div>
        <div className='flex gap-4'>
        <Link to={'/dashboard'}>
        <button className='hover:btn-hover hover:bg-[#022D24] hover:text-white text-[18px] px-7 text-[#022D24] border-[#022D24]  py-1 rounded-full bg-white border '>
        Dashboard
        </button>
        </Link>
        <Link to={'/order'}>
        <button className='hover:btn-hover hover:bg-[#022D24] hover:text-white text-[18px] px-7 text-[#022D24] border-[#022D24]  py-1 rounded-full bg-white border '>
        Orders
        </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
