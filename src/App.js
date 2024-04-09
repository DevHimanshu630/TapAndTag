import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from './Pages/Product';
import Sustainability from './Pages/Sustainability';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import VcardTemplate from './VRcard/VcardTemplate';
import Dashboard from './VRcard/Dashboard';
import QrForm from './Pages/QrForm';
import FileManager from './VRcard/FileManager';
import Forgot from './Pages/Forgot';
import Verification from './Pages/Verification';
import UpdateQrForm from './Pages/UpdateQrForm';
import Success from './Pages/Success';

import CheckoutCart from './Pages/CheckoutCart';
import Payment from './Pages/Payment';
import Orders from './Pages/Orders';
import OrderDetail from './Pages/OrderDetail';
import Layout from './Layout';
import { CartContextProvider } from './Context/Cart';
import { useEffect } from 'react';
import axios from './Axios/Axios';
import { useUserContext } from './Context/User';


function App() {
  const {userInfo,setUserInfo} = useUserContext()
  useEffect(()=>{
    const data = async()=>{
      const info = await axios.get('users/profile',{
        withCredentials: true
      })
      setUserInfo(info)
      console.log(info)
    }
    data()
  },[])
  console.log('user Status',userInfo)
  return (
    <>
        <CartContextProvider>
            <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/checkout' element={<CheckoutForm/>}/> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {userInfo ? (
              <>
              <Route path='' element={<Layout/>}>
              <Route path="/dashboard" element={< Dashboard />} />
              <Route path='/cart' element={<CheckoutCart/>}/>
              <Route path='/cart/payment/:id' element={<Payment/>}/>
              <Route path='/order' element={<Orders/>}/>
              <Route path='/order/:id' element={<OrderDetail/>}/>
              </Route>
              <Route path="/product" element={<Product />} />
              <Route path="/Sustainability" element={<Sustainability />} />
              <Route path="/vcard/:pageId" element={<VcardTemplate />} />
              <Route path='/qrform/:formId' element={<QrForm />} />
              <Route path='/qrform' element={<QrForm />} />
              {/* <Route path='/success' element={<Success />} /> */}
              <Route path='/filemanager' element={<FileManager />} />
              <Route path='/accounts/password/reset/' element={<Forgot />} />
              <Route path='/accounts/password/forgot' element={<Verification />} />
              <Route path='/UpdateQrForm/:formId' element={<UpdateQrForm />} />
              </>
            ):(
              <>
              <Route path='/qrform' element={<QrForm />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product" element={<Product />} />
              <Route path='/accounts/password/reset/' element={<Forgot />} />
              <Route path="/Sustainability" element={<Sustainability />} />
              <Route path="/vcard/:pageId" element={<VcardTemplate />} />
              <Route path='/accounts/password/forgot' element={<Verification />} />
              </>
            )}
          </Routes>
          </CartContextProvider>
        </>
  );
}

export default App;
