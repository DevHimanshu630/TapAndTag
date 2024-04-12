import React, { useRef, useState } from 'react'
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import profileImg from "../Images/ProfileImg.png";
import Checkbox from "@mui/material/Checkbox";
import { logDOM } from '@testing-library/react';
import axios from '../Axios/Axios';
import { toast, ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom';
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function ImageCard({ images }) {
    console.log(images);

    console.log();

    const { formId } = useParams();
    console.log(formId);
    const token = localStorage.getItem("token")

    const [imageId, setImageId] = useState()

    const handleDelete = async (id) => {
        console.log("Deleting Multiple image", id);
        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, {
                deleteImageId: [id]
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    // withCredentials: true
                }
            );
            if (res?.status === 200) {
                toast.error("Images Deleted!", {
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
            console.error(err);
        }
    };
    const [formProfileData, setProfileFormData] = useState({
        profilePhoto: "",
    });
    const fileInputRef = useRef(null);
    const [showInput, setShowDiv] = useState(false)

    const handleInput = () => {
        fileInputRef.current.click();
    };

    // const handleProfileInputChange = (e) => {
    //     const imgFile = e.target.files[0];
    //     setProfileFormData({ profilePhoto: imgFile });
    // };


    const [formData, setFormData] = useState({
        image: { files: {} },
    });

    const handleMultipleInputChange = (e) => {
        const files = e.target.files;
        const updatedImages = { ...formData.image.files };
        for (let i = 0; i < files.length; i++) {
            const uniqueKey = `file_${Date.now()}_${i}`;
            updatedImages[uniqueKey] = files[i];
        }
        setFormData({
            ...formData,
            image: { files: updatedImages },
        });
    };


    const handleUpload = async () => {
        const formDatas = new FormData();
        formDatas.append("profilePhoto", formProfileData.profilePhoto);

        if (formData.image && formData.image.files) {
            const files = formData.image.files;
            for (const key in files) {
                if (files.hasOwnProperty(key)) {
                    formDatas.append("image", files[key]);
                }
            }
        }
        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, formDatas, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                // withCredentials: true
            });
            if (res?.status === 200) {
                toast.success("Images Uploaded!", {
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
            console.error(err);
        }
    };


    console.log(images);
    return (
        <div className='flex flex-col border gap-2  w-52 h-48 flex-wrap'>


            {images?.map((img, index) => (
                <div key={index} className='border  rounded-md w-52 h-48'>
                    <div className="flex relative h-full">
                        <input type='checkbox' className="flex border-none focus:outline-none relative z-10 top-2 left-2 appearance-none" />
                        <img src={img?.contentURL} alt='profile-' className="bg-cover rounded-t-md absolute z-0 w-full h-full" />
                    </div>
                    <div className="py-3 flex items-center justify-around rounded-b-lg bg-gray-400">
                        <button className='text-md bg-blue-500 text-white px-4 rounded-md' >
                            Select
                        </button>

                        {/* <input
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleMultipleInputChange}
                            id="dropzone-file"
                            name="image"
                            type="file"
                            multiple // Allow multiple files to be selected
                            style={{ display: 'none' }} // Use inline style to hide the input
                        />
                        <TbPhotoSquareRounded
                            className='hover:cursor-pointer text-white'
                            onClick={() => fileInputRef.current.click()} // Trigger click event of the file input
                        /> */}

                        <MdDelete className='hover:cursor-pointer text-white' onClick={() => handleDelete(img?._id)} />
                    </div>
                </div>
            ))
            }
            <img onClick={handleInput} src={profileImg} className=' object-contain' alt="no image" />
            <div className='flex'>
                {/* Display selected files */}
                {Object.keys(formData.image).length > 0 && (
                    <div className="flex flex-col w-96 flex-wrap gap-2">
                        <p className="text-[#D3D3D3] flex flex-col">
                            Selected files: {Object.values(formData.image.files).map((file) => file.name).join(', ')}
                        </p>
                        {/* <p
                            className="hover:cursor-pointer"
                            onClick={() => setFormData({ ...formData, image: {} })}
                        >
                            <span className="text-[#D3D3D3]"><MdDeleteOutline size={24} /></span>
                        </p> */}
                    </div>
                )}
                <label htmlFor="dropzone-file" className="flex flex-col gap-1 hover:cursor-pointer">
                    {/* <img src={formUpload} sizes={20} className="" alt="" /> */}
                    <p className="text-[8px]">Choose Files</p>
                    <input
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleMultipleInputChange}
                        id="dropzone-file"
                        name="image"
                        type="file"
                        multiple // Allow multiple files to be selected
                        className="hidden"
                    />
                </label>
            </div>



            <Button onClick={handleUpload} variant="contained" disableElevation>
                + New Upload
            </Button>
        </div>

    )
}

export default ImageCard
