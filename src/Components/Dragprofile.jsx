import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../Axios/Axios';
import { toast } from 'react-toastify';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function Dragprofile({ setUpload, setFiledata }) {
    const navigate = useNavigate();
    const { formId } = useParams();
    const token = localStorage.getItem('tpt_token');
    const fileInputRef = useRef(null);
    const [formProfileData, setProfileFormData] = useState({ profilePhoto: '' });

    console.log('formProfileData ------------------------>',Object.keys(formProfileData).length)
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const imgFile = e.target.files[0];
        setProfileFormData({ profilePhoto: imgFile });
    };

    const handleInput = () => {
        fileInputRef.current.click();
    };

    const handleProfileInputChange = (e) => {
        const imgFile = e.target.files[0];
        setProfileFormData({ profilePhoto: imgFile });
    };

    useEffect(() => {
        // Check if formData has been updated
        if (Object.keys(formProfileData).length > 0) {
            // Call handleUpload when formData has been updated
            handleUpload();
        }
    }, [formProfileData]);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("profilePhoto", formProfileData.profilePhoto);

       if(formProfileData?.profilePhoto){try {
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
                    setFiledata((prev)=>!prev)
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
        }}
    };


    return (
        <div className="h-full w-full">
            <div
                onClick={handleInput}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-[#12665a] rounded-xl border-dashed h-full cursor-pointer m-12 flex flex-col justify-center items-center text-xl gap-6"
            >
                <div className="flex flex-col items-center">
                    <p>
                        <PhotoLibraryIcon fontSize="large" />
                    </p>
                    <p>Drag & Drop</p>
                    <p>
                        or <span className="text-[#12665a]">click</span>
                    </p>
                </div>
                <p className="text-sm">Supports: JPEG, JPG, PNG</p>
            </div>
            <input
                ref={fileInputRef}
                accept="image/*"
                onChange={handleProfileInputChange}
                id="dropzone-file"
                name="image"
                type="file"
                className="hidden"
            />

        </div>
    );
}

export default Dragprofile;
