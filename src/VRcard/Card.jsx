import React, { useRef, useState } from 'react'
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";

import Checkbox from "@mui/material/Checkbox";
import { logDOM } from '@testing-library/react';
import axios from '../Axios/Axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function Card({ profileImg }) {
    const navigate = useNavigate();
    console.log(profileImg?._id);

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
                }, [1000]);
              }
            console.log(res);
        } catch (err) {

            if ( err.response.status === 405) {
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
    const [showInput, setShowDiv] = useState(false)


    const handleProfileInputChange = (e) => {
        const imgFile = e.target.files[0];
        setProfileFormData({ profilePhoto: imgFile });
    };



    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("profilePhoto", formProfileData.profilePhoto);

        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                // withCredentials: true
            });
            if (res?.status === 200) {
                toast.success("Profile Image Updated!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
                setTimeout(() => {
                }, [1000]);
              }
            console.log(res);
        } catch (err) {

            if ( err.response.status === 405) {
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




    return (
        <div className='border rounded-md w-52  h-48'>
            <div className="flex relative  h-full">
                <input type='checkbox' className="flex border-none focus:outline-none relative z-10 top-2 left-2 appearance-none" />
                <img src={profileImg?.contentURL} alt="no-profile" className="bg-cover rounded-t-md absolute z-0 w-full h-full" />
            </div>
            <div className="py-3 flex  items-center justify-around rounded-b-lg bg-gray-400">
                <button className='text-md bg-blue-500 text-white px-4 rounded-md' >
                    Select
                </button>
                <MdContentCopy className='hover:cursor-pointer text-white' onClick={""} />
                <input
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleProfileInputChange}
                    id="dropzone-imgFile"
                    name="imgFile"
                    type="file"
                    style={{ display: 'none' }} // Use inline style to hide the input
                />

                <TbPhotoSquareRounded
                    className='hover:cursor-pointer text-white'
                    onClick={() => fileInputRef.current.click()} // Trigger click event of the file input
                />

                <MdOutlineEdit className='hover:cursor-pointer text-white' onClick={""} />
                <MdDelete className='hover:cursor-pointer text-white' onClick={() => handleDelete(profileImg._Id)} />

            </div>
            <Button onClick={handleUpload} variant="contained" disableElevation>
                + New Upload
            </Button>
        </div>
    );
}
export default Card