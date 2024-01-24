
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Pages/Product';
import Sustainability from './Pages/Sustainability';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Sustainability" element={<Sustainability />} />
    </Routes>
  );
}

export default App;
