import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import AdminLayout from './AdminLayout';
import SetPrices from './Admin/AdminPages/SetPrices';
import Users from './Admin/AdminPages/Users';
import AllOrders from './Admin/AdminPages/AllOrders';
import TermAndCondition from './Pages/TermAndCondition';
import Policy from './Pages/Policy';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Refundpolicy from './Pages/Refundpolicy';
import AdLogin from './Admin/Authentication/AdLogin';
import ShippingPolicy from './Pages/ShippingPolicy ';
import Carousel from './Components/Carousel';
import Leads from './Pages/Leads';
import PrintList from './Admin/AdminPages/PrintList';
import LayoutPrint from './Admin/AdminPages/LayoutPrint';
import PendingCards from './Admin/AdminPages/PendingCards';
import Printed from './Admin/AdminPages/Printed';
import { PrintContextProvider } from './Admin/Context/PrintCards';
import { OrderNowContextProvider } from './Context/Ordernow';


function App() {
  const {userInfo,setUserInfo} = useUserContext()
  const navigate = useNavigate()
 
  setUserInfo(localStorage.getItem('tpt_token'))
  console.log('user Status',userInfo)


  return (
    <>
    <OrderNowContextProvider>
        <CartContextProvider>
            <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/checkout' element={<CheckoutForm/>}/> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {userInfo ? (
              <>
              <Route path='' element={
              <Layout/>
              }>
              <Route path="/dashboard" element={< Dashboard />} />
              <Route path="/lead/:formId" element={< Leads />} />
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
            <Route path='/termandcondition' element={<TermAndCondition/>}/>
            <Route path='/privacypolicy' element={<Policy/>}/>
            <Route path='/refundpolicy' element={<Refundpolicy/>}/>
            <Route path='/shippingpolicy' element={<ShippingPolicy/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/admindashboard' element={<AdLogin/>}/>
          <Route path='/priceasd' element={<Carousel/>}/>
          </Routes>
         <Routes>
         <Route path='/admin' element={
         <PrintContextProvider><AdminLayout/>
         </PrintContextProvider>}>
                <Route path='price' element={<SetPrices/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='orders' element={<AllOrders/>}/>
                <Route path='printlist' element={<LayoutPrint/>}>
                  <Route path='remaining' element={<PrintList/>}/>
                  <Route path='pending' element={<PendingCards/>}/>
                  <Route path='printed' element={<Printed/>}/>
                </Route>
          </Route>
         </Routes>
          </CartContextProvider>
          </OrderNowContextProvider>
        </>
  );
}

export default App;
