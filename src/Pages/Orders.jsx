import axios from '../Axios/Axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const { format } = require('date-fns');


function Orders() {
  const token = localStorage.getItem("tpt_token");
  const navigate = useNavigate()
  const [orders, setOrders] = useState('')
  useEffect(()=>{
    const getting = async()=>{
      const res = await axios.get('users/order',{
        headers: {
          Authorization: `Bearer ${token}`,
        }
        // withCredentials: true
      })
      console.log(res.data.order)
      setOrders(res.data.order)
    }
    getting()
  },[])
  const handleOrderDetails = (ids) =>{
    navigate(`${ids}`)
  }

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #022D24, #146C60)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  };
  return (
    <>
    {orders.length ? (<div className='flex flex-col  items-center gap-4 mt-36 w-full'>
      <h1 style={gradientTextStyle} className='text-5xl mb-4 font-normal'>Your Orders</h1>
      {Object.keys(orders).map((key) => (
      <div key={key} className='w-[70vw]   '>
      <Card   className='pt-8 flex flex-col  px-12 '>
        <CardContent className='flex  items-center justify-between  gap-32 '>
          <div className='flex gap-4 items-center'>
          <div className='flex gap-2'>
          <img src="/metal.jpg" className='w-[10rem] rounded-xl' alt="" />
          </div> 
          <div className='flex font-sans text-[#4D4D4D] flex-col'> 
          <h2 className=' font-semibold'>Ordered Item: </h2>
          <p className=' text-xs'>Plastic - {orders[key].items[0].cardQuantity.plasticCard}</p>
          <p className=' text-xs'>Wood - {orders[key].items[0].cardQuantity.woodCard}</p>
          <p className=' text-xs'>Metal - {orders[key].items[0].cardQuantity.metalCard}</p>
          </div>
          </div>
        
          <Typography variant="body2" color="text.secondary" className=''>
          Ordered On: {format(new Date(orders[key].createdAt), "MMMM dd, yyyy hh:mm a")} <br />
          <div className='flex items-center mt-2 gap-2'>
          {orders[key].paymentStatus === 'pending' ? (
            <div class="h-4 w-4 rounded-full bg-red-500"></div>
          ) : (<div className='w-52 flex items-center'>
            <Typography gutterBottom variant="h5" className='flex items-center' component="div">
            <CurrencyRupeeIcon/> {orders[key].amount}
            </Typography>
          </div>
          )}
          <div class="h-4 w-4 rounded-full bg-green-500"></div>
          {orders[key].paymentStatus}
          </div>
          </Typography>
        </CardContent>
        
        <CardActions className='flex justify-end'>
          <Button size="small" onClick={() => handleOrderDetails(orders[key]._id)}>Order Details</Button>
        </CardActions>
      </Card>
      </div>
    ))}
    </div>):(
      <div className="flex flex-col items-center justify-center">
      <img src="/notfound.jpg" alt="" className="w-[40%]"/>
      <h2>Items Not Found!</h2>
      </div>
    )}
    </>
  )
}

export default Orders
