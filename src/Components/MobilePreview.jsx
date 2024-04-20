import React from "react";
import { Link } from "react-router-dom";
import profile from "../Images/Photo by Edmond Dantès.png"

function MobilePreview({ data, profileimg, formData, link, images }) {
  const multimg = Object?.keys(formData?.image?.files)?.map((key) => (
    <img
      key={key}
      src={URL?.createObjectURL(formData?.image?.files[key])} // Pass File object directly
      className="w-[76px] rounded-full h-[76px]"
      alt=""
    />
  ));
  console.log(data.company);
  return (    
    <div style={{ 
      width: '100%', // Specify the desired width here
      backgroundImage: `url('/image/Iphone mockup.png')`, 
      backgroundPosition: 'center', 
      zIndex: 1, // Set the z-index here
      // Set the z-index here
      backgroundSize: 'cover' // Optional, adjust according to your needs 
    }}className=" z-0  w-[350px] h-[670px] overflow-hidden  rounded-lg px-10  py-12">
      {data ? (
        <div className="  h-[540px] overflow-y-scroll rounded-lg	">
          <div className="w-full h-full ">
            <div
              class=" w-full max-w-full border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
              style={{ backgroundImage: 'url("/image/phone look bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                      <Link
                        to={"#"}
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center  gap-3 h-32 ">
                {/* <img src={data.profilePhotoObj.contentURL} className="xl:w-32 xl:h-32  w-24 h-24 rounded-full shadow-lg  object-cover" alt="" /> */}
             <div className="flex gap-3">

                {profileimg ? (
                    link ? (
                      <img
                        className="w-12 h-12 mb-3 rounded-full shadow-lg"
                        src={profileimg}
                        alt="Bonnie image"
                      />
                    ) : (
                      <img
                        className="w-12 h-12 mb-3 rounded-full shadow-lg"
                        src={URL.createObjectURL(profileimg)}
                        alt="Bonnie image"
                      />
                    )
                  ) : (
                  <img
                    class="w-12 h-12 mb-3 rounded-full shadow-lg"
                    src={profile}
                    alt="Bonnie image"
                  />
                )}
                <div className="">
                <h5 class=" text-xl font-sans font-light text-[white] ">
                   {data.name ? data.name : "Your Fullname"}
                </h5>
                <p class="text-xs text-[white]  ">
                  {data.designation ? data.designation : "Your Designation"}
                </p>
                </div>
             </div>
                <p class=" font-sans font-light text-[white] dark:text-white">
                {data.companyName ? data.companyName : "Your Company"}
                </p>
              </div>
            </div>

            <div className="flex mt-6 items-center  justify-between px-2 gap-3 ">
              <div className="flex gap-2 ">
                <Link to={data.instagramUrl}>
                  <img src="/image/insta.png" alt="" />
                </Link>
                <Link to={data.linkedinUrl}>
                  <img src="/image/linkedIN.png" alt="" />
                </Link>
                <Link to={data.twitterUrl}>
                  <img src="/image/Vector.png" alt="" />
                </Link>
              </div>

              <div className="">
                <Link
                  className=" text-[16px] underline underline-offset-2"
                  to={data.webSiteUrl}
                >
                  {data.webSiteUrl ? data.webSiteUrl :"yourwebsitehere.com"}
                </Link>
              </div>
            </div>

            <div className="flex w-full h-[90vh] mb-[5rem] justify-start items-start flex-col">
              <div className="flex flex-col w-full h-full items-center justify-start">
                <div className="w-[95%] h-[8vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  font-sans bg-[#EEEEEE] py-1 px-5">
                    EMAIL
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5 font-snas">
                    <img src="/image/email.png" alt="" />
                    <p>{data.email ? data.email:"yourname@gmail.in"}</p>
                  </div>
                </div>

                <div className="w-[95%] h-[8vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  font-sans bg-[#EEEEEE] py-1 px-5">
                    Mobile
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5 font-snas">
                    <img src="/image/phone.png" alt="" />
                    <p>{data.mobile ? data.mobile:"+91 701772XXXX"}</p>
                  </div>
                </div>

                <div className="w-[95%] h-[8vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  font-sans bg-[#EEEEEE] py-1 px-5">SMS</div>
                  <div className="flex items-center gap-4 p-2 px-5 font-snas">
                    <img src="/image/sms.png" alt="" />
                    <p>{data.sms ? data.sms:"+91 701772XXXX"}</p>
                  </div>
                </div>

                <div className="w-[95%] h-[15vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  font-sans bg-[#EEEEEE] py-1 px-5">
                    ADDRESS
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5 font-snas">
                    <p>
                      {data.address1 ? data.address1 :"813, Udyog Vihar Phase V,"}  {data.address2 ? data.address2 :"Gurugram,"} {data.city ? data.city :"Haryana,"} 
                      {data.state ? data.state :"Uttar Pradesh,"} {data.country ? data.country :"India,"} {data.pinCode ? data.pinCode : "122016"}
                    </p>
                  </div>
                </div>

                <div className="w-[95%] h-[8vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  font-sans bg-[#EEEEEE] py-1 px-5">
                    Designation
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5 font-snas">
                  {data.designation ? data.designation : "Your Designation"}
                  </div>
                </div>

                <div className="w-[95%] h-[8vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  font-sans bg-[#EEEEEE] py-1 px-5">
                    Company
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5 font-snas">
                  {data.companyName ? data.companyName : "Your Company"}
                  </div>
                </div>
                <div className="w-[95%]   mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  bg-[#EEEEEE] p-2 px-5">Images</div>
                  <div className="flex flex-wrap items-center gap-4 p-2 px-5">
                    {link ? (
                    <div className="flex gap-2">
                      {images?.map((image, index) => (
                      <img key={index} src={image?.contentURL}
                      className="w-[76px] rounded-full h-[76px]"
                      alt="" />
                      ))}
                    </div>
                    ) : (
                    multimg
                  )}
                  </div>
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

export default MobilePreview;