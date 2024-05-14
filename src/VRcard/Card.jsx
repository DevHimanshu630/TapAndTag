import React, { useRef, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from '../Axios/Axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Dragprofile from '../Components/Dragprofile';
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function Card({ profileImg, setFiledata }) {
    const navigate = useNavigate();
    console.log('how it is done',profileImg?._id);

    const { formId } = useParams();
    console.log(formId);
    const token = localStorage.getItem("tpt_token")

    const handleDelete = async (id) => {
        console.log("Deleting profile image");
        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, {
                deleteProfileId: profileImg?._id
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    // withCredentials: true
                }
            );
            if (res?.status === 200) {
                toast.error("Profile Image Deleted!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
                setTimeout(() => {
                    setFiledata((prev)=> !prev)
                }, [1000]);
              }
            console.log(res);
        } catch (err) {

            if ( err?.response?.status === 405) {
                toast.error("Session Expired!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                localStorage.removeItem("tpt_token");
                setTimeout(() => {
                    navigate("/login")
                }, [1000])


            }

            console.error(err);

        }
    };

    const [formProfileData, setProfileFormData] = useState({
        profilePhoto: "",
    });
    const fileInputRef = useRef(null);


    const handleProfileInputChange = (e) => {
        const imgFile = e.target.files[0];
        setProfileFormData({ profilePhoto: imgFile });
    };


    return profileImg._id == null ? <Dragprofile setFiledata={setFiledata}/> : (
        <div className='border rounded-md w-52  h-48'>
            <div className="flex relative  h-full">
                <img src={profileImg?.contentURL} alt="no-profile" className="bg-cover rounded-t-md absolute z-0 w-full h-full" />
            </div>
            <div className="py-3 flex  items-center justify-around rounded-b-lg bg-gray-400">              
                <label htmlFor="dropzone-file" className="flex flex-col gap-1 hover:cursor-pointer">
                <MdEdit
                    className='hover:cursor-pointer text-white'
                />
                    <input
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleProfileInputChange}
                    id="dropzone-file"
                    name="imgFile"
                    type="file"
                    style={{ display: 'none' }} // Use inline style to hide the input
                />
                </label>
               

                <MdDelete className='hover:cursor-pointer text-white' onClick={() => handleDelete(profileImg._Id)} />

            </div>
        </div>
    )
}
export default Card