import axios from '../Axios/Axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';

function CheckoutCart() {
  const token = localStorage.getItem("token");
  const [carts, setCarts] = useState('')
  const [orderArray, setOrderArray] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const getting = async()=>{
      const res = await axios.get('users/cart',{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      setCarts(res.data.cart)
      console.log(res.data.cart)
    }
    getting()
  },[])

  console.log(orderArray)
  const handleOrder = (ids) => {
    let index = orderArray.indexOf(ids);
    if (index === -1) {
        setOrderArray([...orderArray, ids]);
    } else {
        let updatedOrder = [...orderArray];
        updatedOrder.splice(index, 1);
        setOrderArray(updatedOrder);
    }
}

  const proceedToPay = async() =>{
    try{const res = await axios.post('users/order-now', {orderArray},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    navigate(`payment/${res.data.orderId}`)
    console.log(res)
  }catch(e){
      console.log(e)
    }
  }
  return (
    <div className='flex p-4'>
      <main className='flex-[0.8]'>
    {Object.keys(carts).map((key) => (
    <div key={key} className='my-6'>
    <Card sx={{ maxWidth: 1000 }}>
      <input type="checkbox" onClick={() => handleOrder(carts[key]._id)}/>
      <CardMedia
        sx={{ height: 140 }}
        image="/card-demo.svg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cards
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Plastic : {carts[key].cardQuantity.plasticCard} <br />
        Wood : {carts[key].cardQuantity.woodCard} <br />
        Metal : {carts[key].cardQuantity.metalCard} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    ))}
      </main>
      <section className='flex-[0.3] my-6'>
      <Card sx={{ maxWidth: 700 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/card-demo.svg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cards
        </Typography>
        <Typography variant="body2" color="text.secondary">
        hello
        </Typography>
      </CardContent>
      <CardActions>
        SubTotal : 
      </CardActions>
      <Button onClick={proceedToPay} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" >Proceed To Pay</Button>
    </Card>
      </section>
    </div>
  )
}

export default CheckoutCart
