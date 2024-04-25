import axios from "../../Axios/Axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { usePrintContext } from "../Context/PrintCards";
import ShimmerPrint from '../Shimmer/ShimmerPrint';


function Printed() {
const {printCards, setPrintCards} = usePrintContext()
const [printarray, setPrintarray] = useState([])
  return !printCards? <ShimmerPrint/> : (
    <div className='w-full h-full flex flex-col px-20 gap-4 py-2'>
    <div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
