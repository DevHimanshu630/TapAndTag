
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Pages/Product';
import Sustainability from './Pages/Sustainability';
import Userdetails from './VRcard/Userdetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Sustainability" element={<Sustainability />} />
      <Route path="/vcard" element={<Userdetails />} />
    </Routes>
  );
}

export default App;
