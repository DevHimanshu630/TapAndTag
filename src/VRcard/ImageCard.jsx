import React from 'react'
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
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function ImageCard({ images }) {
    console.log(images);
    return (
        <div className='flex gap-2 flex-wrap'>
            {images.map((img, index) => (
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
                        <MdDelete />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageCard
