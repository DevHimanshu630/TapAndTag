import axios from "../../Axios/Axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { usePrintContext } from "../Context/PrintCards";
import ShimmerPrint from '../Shimmer/ShimmerPrint';
import { ToastContainer, toast } from 'react-toastify'


function Printed() {
const {printCards, setPrintCards} = usePrintContext()
const [printarray, setPrintarray] = useState([])
const handlePrint = (ids) =>{
  let index = printarray.indexOf(ids);
  if (index === -1) {
    setPrintarray([...printarray, ids]);
  } else {
    let updatedOrder = [...printarray];
    updatedOrder.splice(index, 1);
    setPrintarray(updatedOrder);
  }
}
const handlePrintSubmit = async() =>{
  try{const res = await axios.put('admin/revert-print-status',
  {revertIDs: printarray}
)
if(res.status === 200){
  setPrintCards(res.data.printData)
  toast.error("Moved To Export!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});
}
}catch(e){
  console.log(e)
}
}
  return !printCards? <ShimmerPrint/> : (
    <div className='w-full h-full flex flex-col px-20 gap-4 py-2'>
      <div className='flex gap-8 self-end'>
    <button onClick={handlePrintSubmit} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
    Not Printed
    </button>
    </div>
    <div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   Select
                </th>
                <th scope="col" class="px-6 py-3">
                Order Id
                </th>
                <th scope='col' className='px-6 py-3'>
                User Email
                </th>
                <th scope="col" class="px-6 py-3">
                Card Details
                </th>
                <th scope="col" class="px-6 py-3">
                Card Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                Address
                </th>
            </tr>
        </thead>
        <tbody>
        {Object.values(printCards).map((item, index) => (item.printed ? (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className='flex items-center justify-center py-6'><input type="checkbox"
               onClick={() => handlePrint(item._id)}
               className=''/></td>
              <td className="px-6 py-4 whitespace-nowrap">{item.orderId}</td>
              <td className='px-6 py-4 writespace-nowrap'>{item.useremail}</td>
              <td className="px-6 py-4 flex flex-col gap-1 whitespace-nowrap">
                <td>Name: {item.orderdetails[0].cardDetails.name}</td>
                <td>Designation: {item.orderdetails[0].cardDetails.designation}</td>
                <td>CompanyName: {item.orderdetails[0].cardDetails.companyName}</td>
                <td>PageUrl: {item.orderdetails[0].cardDetails.pageUrl}</td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <td>Metal: {item.orderdetails[0].cardQuantity.metalCard}</td>
                <td>Plastic: {item.orderdetails[0].cardQuantity.plasticCard}</td>
                <td>Wood: {item.orderdetails[0].cardQuantity.woodCard}</td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <td>{item.deliveryAddress.address_line1}</td>
              </td>
            </tr>
        ):('')))}
        </tbody>
    </table>
</div>
</div>
  )
}

export default Printed
