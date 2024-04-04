import { useParams } from 'react-router-dom'
import axios from '../Axios/Axios'
import React, { useEffect, useState } from 'react'


function OrderDetail() {
  const {id} = useParams()
  const [refId, setRefId] = useState('')
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
    const gettingId = async() =>{
      const Query = window.location.search
      const urlQuery = new URLSearchParams(Query)
      setRefId(urlQuery.get('referenceId'));
    }
    getting()
    gettingId()
  },[])
  
  return (
    <div className='flex flex-col gap-12'>
      Payment Status : {details.paymentStatus}<br/>
      Here we can fetch the details <br />
      {refId}

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
