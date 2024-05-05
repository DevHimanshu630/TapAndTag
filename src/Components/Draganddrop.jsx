import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../Axios/Axios';
import { toast } from 'react-toastify';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function Draganddrop({ setUpload, setFiledata }) {
    const navigate = useNavigate();
    const { formId } = useParams();
    const token = localStorage.getItem('tpt_token');
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({ image: { files: {} } });
    const [formProfileData, setProfileFormData] = useState({ profilePhoto: '' });

    const handleBox = () => {
        setUpload(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        const updatedImages = { ...formData.image.files };
        for (let i = 0; i < files.length; i++) {
            const uniqueKey = `file_${Date.now()}_${i}`;
            updatedImages[uniqueKey] = files[i];
        }
        setFormData({ ...formData, image: { files: updatedImages } });
    };

    const handleInput = () => {
        fileInputRef.current.click();
    };

    const handleMultipleInputChange = (e) => {
        e.preventDefault();
        const files = e.target.files;
        const updatedImages = { ...formData.image.files };
        for (let i = 0; i < files.length; i++) {
            const uniqueKey = `file_${Date.now()}_${i}`;
            updatedImages[uniqueKey] = files[i];
        }
        setFormData({ ...formData, image: { files: updatedImages } });
    };

    useEffect(() => {
        // Check if formData has been updated
        if (Object.keys(formData.image.files).length > 0) {
            // Call handleUpload when formData has been updated
            handleUpload();
        }
    }, [formData]);

    const handleUpload = async () => {
        const formDatas = new FormData();
        formDatas.append('profilePhoto', formProfileData.profilePhoto);

        if (formData.image && formData.image.files) {
            const files = formData.image.files;
            for (const key in files) {
                if (files.hasOwnProperty(key)) {
                    formDatas.append('image', files[key]);
                }
            }
        }

        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, formDatas, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res?.status === 200) {
                toast.success('Images Uploaded!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                setTimeout(()=>{
                    setUpload(false);
                    setFiledata((prev)=>!prev)
                },1000)
                

            }
            console.log(res);
        } catch (err) {
            if (err?.response?.status === 405) {
                toast.error('Session Expired!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                localStorage.removeItem('tpt_token');
                navigate('/login');
            }
            console.error(err);
        }
    };

    return (
        <div className="h-full w-full">
            <div
                onClick={handleInput}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-blue-500 rounded-xl border-dashed h-[50vh] w-[65vw] cursor-pointer m-12 flex flex-col justify-center items-center text-xl gap-6"
            >
                <div className="flex flex-col items-center">
                    <p>
                        <PhotoLibraryIcon fontSize="large" />
                    </p>
                    <p>Drag & Drop</p>
                    <p>
                        or <span className="text-blue-500">click</span>
                    </p>
                </div>
                <p className="text-sm">Supports: JPEG, JPG, PNG</p>
            </div>
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
            <div className="flex gap-6 absolute right-6 bottom-6">
                <button
                    onClick={handleBox}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </button>
                {/* <button onClick={handleUpload} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    + Upload
                </button> */}
            </div>
        </div>
    );
}

export default Draganddrop;
