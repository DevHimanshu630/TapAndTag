import axios from '../../Axios/Axios'
import React, { useEffect, useState } from 'react'

function Users() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    const fetch = async() =>{
      const data = await axios.get('admin/user-details')
      console.log(data.data.userdetails)
      setUser(data.data.userdetails)
  }
  fetch()
},[])
  return (
<div className='w-full h-full p-20'>
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                username
                </th>
                <th scope="col" class="px-6 py-3">
                email
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
        {user.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
          </tr>
        ))}
        </tbody>
    </table>
</div>
</div>
  )
}

export default Users
