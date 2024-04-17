import Cards from '../AdminComponent/Cards'
import axios from '../../Axios/Axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify";


function SetPrices() {
  const [price, setPrice] = useState({})
  const [edit, setEdit] = useState(false)
  useEffect(()=>{ 
    const fetch = async() =>{
        const data = await axios.get('admin/get_card_price')
        console.log(data.data.priceObj[0])
        setPrice(data.data.priceObj[0])
    }
    fetch()
  },[edit])
  const handleEdit = () =>{
    setEdit(true)
  }
  const handleSave = async() =>{
    const res = await axios.post(`admin/set_card_price/${price._id}`, price)
    if(res.status === 200){
      toast.success("Price Changed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      setEdit(false)
    }
  }
  console.log('this is price', price)
  return (
   <div className='flex flex-col items-center'>
    <ToastContainer/>
    <div className="card-img flex justify-center">
        <Cards show={'Classic'} val={price.plasticCard} image={"/classic.jpg"} data={'plasticCard'} cart={price} setCart={setPrice} edit={edit}/>
        <Cards show={'Wood'} val={price.woodCard} data={'woodCard'} image={"/wood.jpg"} cart={price} setCart={setPrice} edit={edit}/>
        <Cards show={'Metal'} val={price.metalCard} data={'metalCard'} image={"/metal.jpg"} cart={price} setCart={setPrice} edit={edit}/>
    </div>
    {edit? (
      <div className='flex gap-4'>
      <button onClick={handleSave} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Save
    </button>
    <button onClick={()=>{setEdit(false)}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    Cancel
    </button>
    </div>
    ):(<button onClick={handleEdit} class="bg-blue-500 hover:bg-blue-700 text-white text-2xl py-1 px-12 rounded flex gap-2 items-center">
    Edit
    </button>)}
    </div>
  )
}

export default SetPrices
