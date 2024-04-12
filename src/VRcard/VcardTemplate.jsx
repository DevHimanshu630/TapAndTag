import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Axios/Axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
        const response = await axios.get(`users/formdata/${pageId}`);
        // console.log("response *********-------->", response);
        setUserData(response.data.response);
        document.title = `Vcard ${pageId}`;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [pageId]);
  // Import format function
  const generateVCF = () => {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
N:${userData.name}
TITLE:${userData.designation}
ORG:${userData.companyName}
EMAIL:${userData.email}
TEL:${userData.mobile}
ADR:${userData.city}
URL;TYPE=linkedin:${userData.linkedinUrl} 
URL;TYPE=twitter:${userData.twitterUrl} 
URL;TYPE=instagram:${userData.instagramUrl} 
URL;TYPE=Website:${userData.webSiteUrl}
PHOTO;TYPE=JPEG;VALUE=URL:${userData.profilePhotoObj.contentURL}
END:VCARD`;

    const blob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "contact.vcf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {userData ? (
        <div>
          <div className="w-full h-full ">
            <div
              class=" relative w-full max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{ backgroundImage: `url('/image/bg.png')` }}
            >
              {/* dropdown code */}
              <div className="">
                <div className="absolute top-0 p-4 right-0">
                  <button onClick={toggleDropdown}>
                    <MoreVertIcon className="text-white" />
                  </button>
                </div>
                  {isOpen && (
                    <div className="dropdown-content absolute right-2 top-11 rounded-lg p-2 px-6 bg-white shadow-lg shadow-gray-100">
                      <ul>
                        <li
                        className="cursor-pointer "
                       onClick={generateVCF}
                        >Save</li>
                      </ul>
                    </div>
                  )}
              </div>

              <div class="flex flex-col items-center pb-10 mt-[2rem]">
                <img
                  src={userData.profilePhotoObj.contentURL}
                  className="xl:w-32 xl:h-32  w-24 h-24 rounded-full shadow-lg  object-cover"
                  alt=""
                />
                {/* <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                /> */}
                <h5 class="mb-1 text-xl font-medium font-sans text-[white] dark:text-white">
                  {userData.name}
                </h5>
                <span class="text-sm text-[white] dark:text-gray-400 font-sans">
                  {userData.designation}
                </span>
                <h1 class="mb-1 text-2xl mt-4 font-sans font-medium text-[white] dark:text-white">
                  {userData.company}
                </h1>
              </div>
            </div>

            <div className="flex  justify-around mt-9">
              <div className="flex gap-3 mr-[5.5rem]">
                <a href={userData.instagramUrl} target="_blank">
                  <img src="/image/insta.png" alt="" />
                </a>
                <Link to={userData.linkedinUrl}>
                  <img src="/image/linkedIN.png" alt="" />
                </Link>
                <Link to={userData.twitterUrl}>
                  <img src="/image/Vector.png" alt="" />
                </Link>
                {/* <button
                  onClick={generateVCF}
                  className="bg-green-200 p-6 rounded"
                >
                  Save Data
                </button> */}
              </div>

              <div className="font-sans">
                <Link
                  className=" underline underline-offset-2"
                  to={userData.webSiteUrl}
                >
                  {userData.webSiteUrl}
                </Link>
              </div>
            </div>

            <div className="flex w-full h-[90vh]  mb-[5rem] mt-[2rem]     justify-start items-start flex-col">
              <div className="flex flex-col w-full h-full items-center justify-start">
                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full font-sans h-1/2 bg-[#EEEEEE] p-2 px-5">
                    EMAIL
                  </div>
                  <div className="flex font-sans items-center gap-4 p-2 px-5">
                    <img src="/image/email.png" alt="" />
                    <p>{userData.email}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full font-sans h-1/2 bg-[#EEEEEE] p-2 px-5">
                    Mobile
                  </div>
                  <div className="flex font-sans items-center gap-4 p-2 px-5">
                    <img src="/image/phone.png" alt="" />
                    <p>{userData.mobile}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5 font-sans">SMS</div>
                  <div className="flex font-sans items-center gap-4 p-2 px-5">
                    <img src="/image/sms.png" alt="" />
                    <p>{userData.sms}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[15vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full font-sans h-1/2 bg-[#EEEEEE] p-2 px-5">
                    ADDRESS
                  </div>
                  <div className="flex font-sans items-center gap-4 p-2 px-5">
                    <p>
                      {userData.address1} , {userData.address2} ,{" "}
                      {userData.city} , {userData.state} , {userData.pinCode}{" "}
                    </p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full font-sans h-1/2 bg-[#EEEEEE] p-2 px-5">
                    Desgination
                  </div>
                  <div className="flex font-sans items-center gap-4 p-2 px-5">
                    <p>{userData.designation}</p>
                  </div>
                </div>

                <div className="w-[90%] h-[10vh] mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full font-sans h-1/2 bg-[#EEEEEE] p-2 px-5">
                    Company
                  </div>
                  <div className="flex font-sans items-center gap-4 p-2 px-5">
                    <p>{userData.companyName}</p>
                  </div>
                </div>
                <div className="w-[90%]   mt-[2rem] rounded-[8px] border border-[#EEEEEE] flex-shrink-0">
                  <div className="w-full  bg-[#EEEEEE] p-2 px-5 font-sans">Images</div>
                  <div className="flex  flex-wrap items-center gap-4 p-2 px-5">
                    {userData.imageObj.map((image, index) => (
                      <img
                        key={index}
                        src={image.contentURL}
                        alt={`Image ${index}`}
                        className="object-cover flex gap-3"
                      />
                    ))}
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

export default VcardTemplate;
