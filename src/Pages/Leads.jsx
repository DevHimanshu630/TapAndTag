import React, { useEffect, useState } from 'react'
import axios from "../Axios/Axios";
import { useParams } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const { format } = require('date-fns');

function Leads() {
    const radialGradient = {
        background: 'radial-gradient(circle at center, #146C60, #022D24)',  // Colors with 100% opacity
        borderRadius: '10px'
    };
    const [leadData, setLeadData] = useState([]); // Initialize state variable for lead data
console.log("------------------",leadData);

const { formId } = useParams();

const token = localStorage.getItem("tpt_token");
    useEffect(() => {
        const handleleadData = async () => {
          console.log("formid ------>>>>>>>>", formId);
          try {
            const res = await axios.get(`users/leads/${formId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            console.log(res);
            setLeadData(res.data.data); // Set lead data in state
          } catch (err) {
            console.log(err);
          }
        };
    
        // Call handleleadData with the desired value of 'e'
        handleleadData();
      }, []); // Add '

      function formateTime(createdAt) {
        console.log('dekho',createdAt)
        const formatted = format(new Date(createdAt), "MMMM dd, yyyy hh:mm a");
        return formatted;
    }

    const handleDelete = async (e) => {
        console.log("Deleting profile image");
        try {
            const res = await axios.delete(`users/leads/${formId}/${e}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setLeadData(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };
    

  return (
    <div class="relative w-full pt-36 flex justify-center overflow-x-auto">
        <table class="w-[75%] text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg">
          <thead style={radialGradient} class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-[7vh]">
            <tr className="text-white rounded-lg" >
            <th scope="col" class="px-5 font-sans font-thin  py-3  rounded-tl-lg border-lg">
              Time
              </th>
              <th scope="col" class="px-6 font-sans font-thin  py-3   border-lg">
                 Name
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3">
               Email
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3">
                Phone
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3">
                Company Name
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3  ">
               address
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3 ">
              Message
              </th>
              <th scope="col" class="px-6 font-sans font-thin py-3 rounded-tr-lg">
             Action
              </th>
            </tr>
          </thead>
          <tbody>
            {leadData?.map((item, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {formateTime(item.createdAt)}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.name}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.email}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.phone}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.companyName}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.address}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.message}
                </td>
                <td class="px-6 py-3 font-sans font-medium text-gray-900 whitespace-nowrap dark:text-white">

                <DeleteForeverIcon
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    size={20}
                    className="text-[#146C60] hover:cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Leads
