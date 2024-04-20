import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Axios/Axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function VcardTemplate() {
  const { pageId } = useParams();
  // const pageURL= `https://www.tapandtag.in/vcard/${pageId}`
  // console.log(pageURL);
  console.log("username id", pageId);
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


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData , setformData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName:"",
    address:"",
    message:""
  })

  const handleChange = (e) => {
    console.log(formData);
    setformData({
        ...formData,
        [e.target.name]: e.target.value,
    });
}

const handleLeadform = async (e) => {
  e.preventDefault();
  try {
      const res = await axios.post(`lead/${pageId}`,
          {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              companyName:formData.companyName,
              address:formData.address,
              message:formData.message
          },
          {
              headers: {
              },
          }
            );
      console.log(res);
      if (res.status == 200) {
          toast.success("User created successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
          // setTimeout(() => {
          //     navigate("/")
          // }, [1000])
      }
  }
  catch (err) {
      if (err.response && err.response.status === 403) {
          toast.error("User already exists. Please choose a different email.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
      }
      if (err.response && err.response.status === 500) {
          toast.error("Unexpected Error Occured", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
      }


      else {
          toast.error('Please try again after some time.', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
      }
  }

}


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const gradientTextStyle = {
    background: 'linear-gradient(180deg, #1E1E1E -61.11%, #079376 177.78%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
};

  return (
    <div>
      {userData ? (
        <div>
          <ToastContainer/>
          <div className="w-full h-full ">
            <div
              class=" relative w-full max-w-full border  rounded-t-2xl"
              style={{ backgroundImage: 'url("/image/phone look bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                      <li className="cursor-pointer " onClick={generateVCF}>
                        Save
                      </li>
                      <Link to={"/"}>
                        <li className="cursor-pointer">Get Your Card</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <div class="flex flex-col gap-4 w-full items-center justify-between pb-3 mt-[3rem]">
                <div className='flex w-full justify-center gap-10 pr-12 items-center '>
                <img
                  src={userData.profilePhotoObj.contentURL}
                  className="xl:w-32 xl:h-32  w-24 h-24 rounded-full shadow-lg  object-cover"
                  alt=""
                />      
                <div >
                <h5 class="mb-1 text-xl capitalize font-medium font-sans text-[white] dark:text-white">
                  {userData.name}
                </h5>
                <span class="text-sm text-[white] capitalize dark:text-gray-400 font-sans">
                  {userData.designation}
                </span>
                  </div>  
                </div>
                  <div>
                    </div>     
                <h1 class=" text-2xl capitalize  font-sans font-medium text-[white] dark:text-white">
                  {userData.companyName}
                </h1>
              </div>
            </div>
            <div className="w-full flex gap-16 py-4 md:px-24 md:justify-between justify-center">
                <button onClick={toggleModal} style={gradientTextStyle} className='border px-3 font-semibold text-[14px] rounded-full border-[#146C60] '>
                        Connect with Us
                </button>
                <button className='border rounded-full save text-white px-6 py-1 text-[14px]' onClick={generateVCF}>
                      Save
                 </button>
               
            </div>
            <div className="flex mt-2 justify-center gap-20 md:px-24 md:justify-between ">
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
                  {/* form open code */}
                  <div className="flex justify-center items-center">
    
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <span onClick={toggleModal} className="absolute top-0 right-0 cursor-pointer p-2">&times;</span>
            <h2 className="text-xl font-bold mb-4">Connect with US</h2>
            <form onSubmit={handleLeadform}>
              {/* Your form inputs */}
              <input onChange={handleChange} type="text" name="name"  placeholder="Name" className="block w-full border border-gray-300 rounded mb-2 px-4 py-2" />
              <input onChange={handleChange} type="email" name="email" placeholder="Email" className="block w-full border border-gray-300 rounded mb-4 px-4 py-2" />
              <input onChange={handleChange} type="text" name="phone" placeholder="phone" className="block w-full border border-gray-300 rounded mb-4 px-4 py-2" />
              <input onChange={handleChange} type="text" name="companyName" placeholder="company name" className="block w-full border border-gray-300 rounded mb-4 px-4 py-2" />
              <input onChange={handleChange} type="text" name="address" placeholder="Address" className="block w-full border border-gray-300 rounded mb-4 px-4 py-2" />
              <textarea onChange={handleChange} type="text" name="message" placeholder="Message" className="block w-full border border-gray-300 rounded mb-4 px-4 py-2" />
              {/* Add more form inputs as needed */}
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>

                {/* end form code */}
              </div>

              <div className="font-sans">
                <a
                  className=" underline underline-offset-2"
                  href={userData.webSiteUrl}
                  target="_himanshu"
                >
                  {userData.webSiteUrl}
                </a>
              </div>
            </div>

            <div className="flex w-full h-[90vh]  mb-[5rem]      justify-start items-start flex-col">
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
                  <div className="w-full h-1/2 bg-[#EEEEEE] p-2 px-5 font-sans">
                    SMS
                  </div>
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
                  <div className="w-full  bg-[#EEEEEE] p-2 px-5 font-sans">
                    Images
                  </div>
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
