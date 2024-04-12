import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import axios from '../Axios/Axios';
import { toast, ToastContainer } from "react-toastify";
import CardCart from './CardCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../Context/Cart';

function CheckoutForm({handleClose, selectedform, setOpen}) {
  const {cartcount, setCartcount} = useCartContext()
  const [cart, setCart] = useState({
    plasticCard: 0,
    woodCard : 0,
    metalCard: 0
  })
 
  const token = localStorage.getItem("token");
  const handleSubmit = async () => {
    console.log(selectedform);
    try {
      const res = await axios.post(`users/saveToCart/${selectedform}`,
       { cardQuantity: cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // withCredentials: true
        }
      );
      if(res.status === 200){
        toast.success("Added To Cart", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setOpen(false);
        setCartcount(res.data.cartLength)
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  
  console.log(cart)
  return (
    <div className='cart-container flex gap-12 p-6 h-[90vh] w-[80vw]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', opacity: '0.9' }}>
    <div className='flex flex-col justify-between flex-1'>
    <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
    </button>
    <div className="card-img flex justify-center">
        <CardCart show={'Classic'} val={cart.plasticCard} image={"/classic.jpg"} data={'plasticCard'} cart={cart} setCart={setCart} edit={true}
        index={null} selIndex={null}/>
        <CardCart show={'Wood'} val={cart.woodCard} data={'woodCard'} image={"/wood.jpg"} cart={cart} setCart={setCart} edit={true}
        index={null} selIndex={null}/>
        <CardCart show={'Metal'} val={cart.metalCard} data={'metalCard'} image={"/metal.jpg"} cart={cart} setCart={setCart} edit={true}
        index={null} selIndex={null}/>
    </div>
    <button onClick={handleSubmit} className={cart.plasticCard || cart.metalCard || cart.woodCard ? 'bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded-full w-[20%] mx-4 self-end' : 'bg-slate-500 text-white py-2 px-4 mx-4 rounded-full w-[20%] self-end disabled'} 
    disabled={!(cart.metalCard || cart.plasticCard || cart.woodCard )}>Add To Cart 
    <AddShoppingCartIcon/></button>
    </div>
    </div>
  )
}

export default CheckoutForm
