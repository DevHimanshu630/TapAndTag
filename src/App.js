import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from './Pages/Product';
import Sustainability from './Pages/Sustainability';
import Userdetails from './VRcard/Userdetails';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import VcardTemplate from './VRcard/VcardTemplate';
import Dashboard from './VRcard/Dashboard';
import QrForm from './Pages/QrForm';


function App() {
  const token = localStorage.getItem("token");
  const isUserLoggedIn = !!token;

  console.log("user login status", isUserLoggedIn);
  return (
    <>
      {isUserLoggedIn ? (
        <>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Sustainability" element={<Sustainability />} />
            <Route path="/vcard/:pageId" element={<VcardTemplate />} />
            <Route path='/qrform' element={<QrForm />} />
          </Routes>
        </>
      ) :
        (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/qrform' element={<QrForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product" element={<Product />} />
              <Route path="/Sustainability" element={<Sustainability />} />
              <Route path="/vcard/:pageId" element={<VcardTemplate />} />
            </Routes>
          </>
        )
      }
    </>
  );
}

export default App;
