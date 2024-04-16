import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../Context/Cart';
import axios from '../Axios/Axios';


function HeaderCart() {
  const {cartcount, setCartcount} = useCartContext()
  const token = localStorage.getItem('tpt_token')
  useEffect(()=>{
    const fetch = async()=>{
    const res = await axios.get("users/cart", {
      // withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        setCartcount(res.data.cart.length);
    }
    fetch()
    },[])
  return (
        <div className='cursor-pointer'>
        <div className='relative'>
          <div className='px-2 bg-green-700 text-white text-md absolute -top-[1rem] -right-[1rem] font-bold rounded-xl '>{cartcount}</div>
            <div>
                <ShoppingCartIcon />
            </div>
            </div>
        </div>
  )
}

export default HeaderCart
