import axios from "../Axios/Axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import CardCart from "../Components/CardCart";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useCartContext } from "../Context/Cart";

function CheckoutCart() {
  const token = localStorage.getItem("token");
  const [carts, setCarts] = useState("");
  const [orderArray, setOrderArray] = useState([]);
  const [delCart, setDelCart] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [mordiCart, setMordiCart] = useState({})
  const [edit, setEdit] = useState(false)
  const [editedCartIndex, setEditedCartIndex] = useState(null);
  const {cartcount, setCartcount} = useCartContext()
  const editCart = (quantity, index) =>{
    setMordiCart(quantity)
    setEditedCartIndex(index);
    setEdit(true)
  }
  const saveCart = async(formId) =>{
    console.log(formId)
    if(!(mordiCart.plasticCard || mordiCart.woodCard || mordiCart.metalCard)){
      toast.error("All Fields Empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }else{
      const res = await axios.post(`users/saveToCart/${formId}`,
       { cardQuantity: mordiCart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Cart Edited!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    setMordiCart({})
    setCartcount(res.data.cartLength)
    setEdit(false)
    
    }
  }
  console.log(mordiCart)
  const navigate = useNavigate();

  useEffect(() => {
    const getting = async () => {
      const res = await axios.get("users/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCarts(res.data.cart);
      console.log(res);
    };
    getting();
  }, [delCart, edit]);

  console.log(orderArray);
  const handleOrder = (ids, amount) => {
    let index = orderArray.indexOf(ids);
    if (index === -1) {
      setOrderArray([...orderArray, ids]);
      setSubtotal((prev) => prev + amount);
    } else {
      let updatedOrder = [...orderArray];
      updatedOrder.splice(index, 1);
      setOrderArray(updatedOrder);
      setSubtotal((prev) => prev - amount);
    }
  };

  const proceedToPay = async () => {
    try {
      const res = await axios.post(
        "users/order-now",
        { orderArray },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`payment/${res.data.orderId}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteCart = async (ids, amount) => {
    const res = await axios.delete(`users/cart/delete/${ids}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.error("Cart Deleted!", {
      position: "top-right",
      autoClose: 3000,  
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setCartcount(res.data.cartLength)
    setDelCart(!delCart);
  };

  return (
    <>
        <div
          className="w-full h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <ToastContainer/>
          {carts.length ? (
            <div className="flex flex-row" id="cart">
            <div className="flex-[0.7] ml-6 my-6 bg-white overflow-y-auto h-screen"
              id="scroll"
            >
              <p className="text-3xl mb-4 font-black text-gray-800">
               Cart :
              </p>
              {Object.keys(carts).map((key, index) => (
                  <div key={key} className="md:flex items-center border-t border-gray-200">
                  <input type="checkbox" onClick={() => handleOrder(carts[key]._id, carts[key].amount)}/>
                    <div className="flex">
                        <CardCart val={edit ? mordiCart.plasticCard : carts[key].cardQuantity.plasticCard}  
                        cart={mordiCart} 
                        setCart={setMordiCart} 
                        data={'plasticCard'} 
                        image={"/classic.jpg"} 
                        edit={edit} 
                        show={'Classic'}
                        index={index}
                        selIndex={editedCartIndex}/>
                        <CardCart val={edit ? mordiCart.woodCard : carts[key].cardQuantity.woodCard} 
                        cart={mordiCart} 
                        setCart={setMordiCart} 
                        data={'woodCard'} 
                        image={"/wood.jpg"} 
                        edit={edit} 
                        show={'Wood'}
                        index={index}
                        selIndex={editedCartIndex}/>
                        <CardCart val={edit ? mordiCart.metalCard : carts[key].cardQuantity.metalCard} 
                        cart={mordiCart} 
                        setCart={setMordiCart} 
                        data={'metalCard'} 
                        image={"/metal.jpg"} 
                        edit={edit} 
                        show={'Metal'}
                        index={index}
                        selIndex={editedCartIndex}/>
                    </div>
                    <div className="flex flex-col">
                    <IconButton onClick={()=>editCart(carts[key].cardQuantity, index)}>
                    <EditIcon/>
                    </IconButton>
                    <IconButton onClick={()=>deleteCart(carts[key]._id, carts[key].amount)}>
                    <DeleteIcon/>
                    </IconButton>
                    {edit && index === editedCartIndex && (
                    <div className="flex items-center">
                      <IconButton onClick={() => saveCart(carts[key].formId)}>
                        <CheckIcon/>
                      </IconButton>
                    </div>
                    )}
                    </div>
                  </div>
              ))}
            </div>
            <div className="flex-[0.3] bg-gray-100 h-100">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      {subtotal}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">NA</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">NA</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      {subtotal}
                    </p>
                  </div>
                  <button
                  onClick={proceedToPay}
                  disabled={orderArray.length === 0}
                  className={`text-base leading-none w-full py-5 border focus:outline-none focus:ring-2 focus:ring-offset-2 ${orderArray.length === 0 ? 'bg-slate-500 border-gray-500 text-white cursor-not-allowed' : 'bg-green-800 border-green-800 focus:ring-gray-800 text-white'}`}
                >
                  Proceed To Pay
                </button>

                </div>
              </div>
            </div>
          </div>
          ):(
            <div className="flex flex-col items-center justify-center">
            <img src="/notfound.jpg" alt="" className="w-[40%]"/>
            <h2>Items Not Found!</h2>
            </div>
          )}
          
        </div>
      <style>
        {` /* width */
        #scroll::-webkit-scrollbar {
            width: 1px;
        }

        /* Track */
        #scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        #scroll::-webkit-scrollbar-thumb {
            background: rgb(133, 132, 132);
        }
  `}
      </style>
    </>
  );
}

export default CheckoutCart;

