import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../Context/Cart';
import axios from '../Axios/Axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function HeaderCart() {
  const navigate = useNavigate();
  const {cartcount, setCartcount} = useCartContext()
  const token = localStorage.getItem('tpt_token')
  useEffect(() => {
    const fetchCartCount = async () => {
        try {
            const res = await axios.get("users/cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCartcount(res.data.cart.length);
        } catch (err) {
            console.error('Error fetching cart count:', err);
            if (err?.response?.status === 405) {
              toast.error("Session Expired!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
              });
              setTimeout(() => {
                  navigate("/login")
                  localStorage.removeItem('tpt_token')
              }, [1000])

          }
        }
    };
    fetchCartCount();
}, [token]);

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
