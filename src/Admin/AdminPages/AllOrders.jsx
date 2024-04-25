import axios from '../../Axios/Axios'
import React, { useEffect, useState } from 'react'

function AllOrders() {
  const [orders, setOrders] = useState(null)
  const [printarray, setPrintarray] = useState([])
  useEffect(()=>{
    const fetching = async()=>{
      const data = await axios.get('admin/order-details')
      console.log(data.data.orders)
      setOrders(data.data.orders)
    }
    fetching()
  },[])
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
  console.log(printarray)

  const handlePrintSubmit = async() =>{
    const res = await axios.post('admin/update-print-status',{
      printIds: printarray
    })
    console.log('tictok',res)
    if(res.status === 200){
      console.log('done ji done')
    }
  }

return !orders? "" : (
<div className='w-full h-full flex flex-col px-20 gap-8 py-8'>
<div className='flex gap-8 self-center'>
<button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
  Clear
</button>
<button onClick={handlePrintSubmit} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  Print
</button>

</div>
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                User Id
                </th>
                <th scope="col" class="px-6 py-3">
                Payment Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment Status
                </th>
            </tr>
        </thead>
        <tbody>
        {Object.values(orders).map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap">{item?.order?.userId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item?.order?._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item?.order?.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item?.order?.paymentStatus}</td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
</div>
  )
}

export default AllOrders
