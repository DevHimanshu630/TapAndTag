import React, { useState } from 'react'
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
        console.log("Deleting profile image", id);
        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, {
                deleteProfileId: [id]
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <div className='flex gap-2 flex-wrap'>
            {images?.map((img, index) => (
                <div key={index} className='border rounded-md w-52 h-48'>
                    <div className="flex relative h-full">
                        <input type='checkbox' className="flex border-none focus:outline-none relative z-10 top-2 left-2 appearance-none" />
                        <img src={img.contentURL} alt={`profile-${index}`} className="bg-cover rounded-t-md absolute z-0 w-full h-full" />
                    </div>
                    <div className="py-3 flex items-center justify-around rounded-b-lg bg-gray-400">
                        <button className='text-md bg-blue-500 text-white px-4 rounded-md' >
                            Select
                        </button>
                        <MdContentCopy />
                        <TbPhotoSquareRounded />
                        <MdOutlineEdit />
                        <MdDelete className='hover:cursor-pointer text-white' onClick={() => handleDelete(img._id)} />
                    </div>
                </div>
            ))}
            <Button variant="contained" disableElevation>
                + New Upload
            </Button>
        </div>
    )
}

export default ImageCard
