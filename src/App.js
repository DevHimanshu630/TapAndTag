
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Pages/Product';
import Sustainability from './Pages/Sustainability';
import Userdetails from './VRcard/Userdetails';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import VcardTemplate from './VRcard/VcardTemplate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Sustainability" element={<Sustainability />} />
      <Route path="/vcard" element={<Userdetails />} />
      <Route path="/vcardTemp/:pageId" element={<VcardTemplate/>} />
    </Routes>
  );
}

export default App;
