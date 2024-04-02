import axios from '../Axios/Axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const [orders, setOrders] = useState('')
  useEffect(()=>{
    const getting = async()=>{
      const res = await axios.get('users/order',{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(res.data.order)
      setOrders(res.data.order)
    }
    getting()
  },[])
  const handleOrderDetails = (ids) =>{
    navigate(`${ids}`)
  }
  return (
    <div className='flex flex-col items-center gap-4 m-4 w-full'>
      <h1>Your Orders</h1>
      {Object.keys(orders).map((key) => (
    <div key={key} className='w-[80vw]'>
    <Card sx={{ maxWidth: '100vw' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/card-demo.svg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Orders Details  
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Hello World!
         <br />
         {orders[key].createdAt} <br />
         {orders[key].paymentStatus}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleOrderDetails(orders[key]._id)}>Order Details</Button>
      </CardActions>
    </Card>
    </div>
    ))}
    </div>
  )
}

export default Orders
