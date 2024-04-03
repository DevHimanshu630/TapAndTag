import { useParams, useSearchParams } from 'react-router-dom'
import axios from '../Axios/Axios'
import React, { useEffect, useState } from 'react'

function OrderDetail() {
  const {id} = useParams()
  const searchQuery = useSearchParams();
  const referenceId = searchQuery.get("referenceId");
  console.log(referenceId)
  const token = localStorage.getItem("token")
  const [details, setDetails] = useState('')
  useEffect(()=>{
    const getting = async() =>{
        const res = await axios.get(`users/order/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            }
        })
        console.log(res.data.order)
        setDetails(res.data.order)
    }
    getting()
  },[])
  
  return (
    <div className='flex flex-col gap-12'>
      Payment Status : {details.paymentStatus}<br/>
      Here we can fetch the details 

    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
    Red Button
    </button>

    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
    Green Button
    </button>
    </div>
  )
}

export default OrderDetail
