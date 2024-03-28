import React from "react";
import { Link } from "react-router-dom";

function MobilePreview({ data, profileimg, formData, link, images }) {
  const multimg = Object?.keys(formData?.image?.files)?.map((key) => (
    <img
      key={key}
      src={URL?.createObjectURL(formData?.image?.files[key])} // Pass File object directly
      className="w-[76px] rounded-full h-[76px]"
      alt=""
    />
  ));
  return (
    <div className="border-2  w-[330px] h-[400px] overflow-y-auto rounded-lg border-black p-2">
      {data ? (
        <div>
          <div className="w-full h-full ">
            <div
              class=" w-full max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
              <div class="flex flex-col items-center pb-10">
                {/* <img src={data.profilePhotoObj.contentURL} className="xl:w-32 xl:h-32  w-24 h-24 rounded-full shadow-lg  object-cover" alt="" /> */}
                {profileimg ? (
                    link ? (
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={profileimg}
                        alt="Bonnie image"
                      />
                    ) : (
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={URL.createObjectURL(profileimg)}
                        alt="Bonnie image"
                      />
                    )
                  ) : (
                  <img
                    class="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                )}
                <h5 class="mb-1 text-xl font-medium text-[white] dark:text-white">
                  {data.name}
                </h5>
                <span class="text-sm text-[white] dark:text-gray-400 font-sans">
                  {data.designation}
                </span>
                <h1 class="mb-1 text-2xl mt-4 font-medium text-[white] dark:text-white">
                  {data.company}
                </h1>
              </div>
            </div>

            <div className="flex  justify-around mt-9">
              <div className="flex gap-3 mr-[5.5rem]">
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
                  className=" underline underline-offset-2"
                  to={data.webSiteUrl}
                >
                  {data.webSiteUrl}
                </Link>
              </div>
            </div>

            <div className="flex w-full h-[90vh] mb-[5rem] mt-[2rem] justify-start items-start flex-col">
              <div className="flex flex-col w-full h-full items-center justify-start">
                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                    EMAIL
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5">
                    <img src="/image/email.png" alt="" />
                    <p>{data.email}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                    Mobile
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5">
                    <img src="/image/phone.png" alt="" />
                    <p>{data.mobile}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">SMS</div>
                  <div className="flex items-center gap-4 p-2 px-5">
                    <img src="/image/sms.png" alt="" />
                    <p>{data.sms}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[15vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                    ADDRESS
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5">
                    <p>
                      {data.address1} , {data.address2} , {data.city} ,{" "}
                      {data.state} , {data.pinCode}{" "}
                    </p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                    Desgination
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5">
                    <p>{data.designation}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5">
                    Company
                  </div>
                  <div className="flex items-center gap-4 p-2 px-5">
                    <p>{data.companyName}</p>
                  </div>
                </div>
                <div className="w-[90%]   mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
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
                    {multimg}
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
