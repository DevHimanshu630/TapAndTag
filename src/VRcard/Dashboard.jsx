import React,{useEffect , useState} from "react";
import axios from '../Axios/Axios'
function Dashboard() {
    const [userData, setUserData] = useState([]);
    const token = localStorage.getItem("token")
    // console.log(token);
    console.log("userData *******------------>", userData);
  
    useEffect(() => {
        console.log("mount");
        const fetchData = async () => {
            try {
                const response = await axios.get('users/dashboard', {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                console.log("getData of User **********-------->", response);
                setUserData(response.data.response);
              } catch (error) {
                console.error("Error fetching user data:", error);
              }
        };
    
        fetchData();
      }, [])


  return (
    <div>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Date
          </th>
          <th scope="col" class="px-6 py-3">
            Form Name
          </th>
          <th scope="col" class="px-6 py-3">
            Type
          </th>
          <th scope="col" class="px-6 py-3">
            QR Code
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {userData.map((item, index) => (
          <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.timeStamp}
            </td>
            <td class="px-6 py-4">{item.formName}</td>
            <td class="px-6 py-4">{item.type}</td>
            <td class="px-6 py-4">{item.QR.fileName}</td>
            {/* Add other columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default Dashboard;
