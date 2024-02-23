import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function VcardTemplate() {
  const { pageId } = useParams();
  console.log("username id", pageId);
  // const PageURL = `https://tap-and-tag.vercel.app/vcardTemp/${pageId}`
  // console.log("pageURL *************>>>>>" ,PageURL );

  const [userData, setUserData] = useState("");

  console.log("userdata ----------------->", userData);

  useEffect(() => {
    const fetchData = async () => {
      console.log(pageId);
      try {
        console.log("data post");
        const response = await axios.get(
          `https://qdp72jc1-8080.inc1.devtunnels.ms/users/formdata/${pageId}`
        );
        console.log("response *********-------->",response);
        setUserData(response.data.response);
        document.title = `Vcard ${pageId}`;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [pageId]);

  return (
    <div>
      {userData ? (
        <div>
          <div className="w-full h-full ">
            <div class=" w-full max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
             style={{ backgroundImage: `url('/image/bg.png')` }}
            >
              <div class="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span class="sr-only">Open dropdown</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-[white] dark:text-white">
                  {userData.name}
                </h5>
                <span class="text-sm text-[white] dark:text-gray-400 font-sans">
                  {userData.designation}
                </span>
                <h1 class="mb-1 text-2xl mt-4 font-medium text-[white] dark:text-white">
                  {userData.company}
                </h1>
              </div>
            </div>

            <div className="flex  justify-around mt-9">
              <div className="flex gap-3 mr-[5.5rem]">
                <a href={userData.instagramUrl}>
                  <img src="/image/insta.png" alt="" />
                </a>
                <a href={userData.linkedinUrl}>
                  <img src="/image/linkedIN.png" alt="" />
                </a>
                <a href={userData.twitterUrl}>
                  <img src="/image/Vector.png" alt="" />
                </a>
              </div>

              <div className="">
                <a
                  className=" underline underline-offset-2"
                  href={userData.webSiteUrl}
                >
                  {userData.webSiteUrl}
                </a>
              </div>
            </div>

            <div className="flex w-full h-[60vh] pt-[10rem] mt-[2rem]  overflow-x-auto justify-center items-center flex-col">
              <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">EMAIL</div>
                <div className="flex items-center gap-4 p-2 px-5">
                  <img src="/image/email.png" alt="" />
                  <p>{userData.email}</p>
                </div>
              </div>
              

              <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">Mobile</div>
                <div className="flex items-center gap-4 p-2 px-5">
                  <img src="/image/phone.png" alt="" />
                  <p>{userData.mobile}</p>
                </div>
              </div>

              <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">SMS</div>
                <div className="flex items-center gap-4 p-2 px-5">
                  <img src="/image/sms.png" alt="" />
                  <p>{userData.sms}</p>
                </div>
              </div>

              <div className="w-[90%] h-[15vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                  ADDRESS
                </div>
                <div className="flex items-center gap-4 p-2 px-5">
                  <p>{userData.address1} , {userData.address2} , {userData.city} , {userData.state} , {userData.pinCode} </p>
                </div>
              </div>

              <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                  ADDRESS
                </div>
                <div className="flex items-center gap-4 p-2 px-5">
                  <p>himanshu@molog.in</p>
                </div>
              </div>

              <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                  ADDRESS
                </div>
                <div className="flex items-center gap-4 p-2 px-5">
                  <p>himanshu@molog.in</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      ) : (
        <p>Loading...</p>
      )}



    </div>
  );
}

export default VcardTemplate;