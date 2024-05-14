import React, { useEffect, useRef, useState } from 'react'
import { MdDelete } from "react-icons/md";
import axios from '../Axios/Axios';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function ImageCard({ images, setUpload, setFiledata, checkfill, setCheckfill }) {
    const navigate = useNavigate();
    console.log(images);

    console.log();

    const { formId } = useParams();
    console.log(formId);
    const token = localStorage.getItem("tpt_token")

    const [imageId, setImageId] = useState()
    const handleDelete = async (id) => {
        console.log("Deleting Multiple image", id);
        try {
            const res = await axios.put(`users/formdata/filemanager/${formId}`, {
                deleteImageId: id
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
                setCheckfill([])
                setTimeout(() => {
                    setFiledata((prev)=>!prev)
                }, [500]);
            }
        // console.log(res);
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
    const handleBox = () =>{
        setUpload(true)
    }
    const handleCheck = (ids) =>{
    let index = checkfill.indexOf(ids);
    if (index === -1) {
      setCheckfill([...checkfill, ids]);
    } else {
      let updatedCheck = [...checkfill];
      updatedCheck.splice(index, 1);
      setCheckfill(updatedCheck);
    }
    
    }
    console.log('checkfill-------------------------------->',checkfill)
    console.log('images length ---------------------------->',images.length);
    return images.length? (
        <div className='flex flex-col border gap-2 w-52 h-48 flex-wrap'>

            {images?.map((img, index) => (
                <div key={index} className='border  rounded-md w-52 h-48'>
                    <div className="flex relative h-full">
                    <input type='checkbox' 
                    { ...(checkfill.indexOf(img._id) === -1 ? {} : { checked: true }) } 
                    onClick={()=>handleCheck(img._id)}
                    className="flex border-none focus:outline-none relative z-10 top-2 left-2 appearance-none" />
                        <img src={img?.contentURL} alt='profile-' className="bg-cover rounded-t-md absolute z-0 w-full h-full" />
                    </div>
                    <div className="py-3 flex items-center justify-around rounded-b-lg bg-gray-400">
                        <button onClick={()=>handleCheck(img._id)} className='text-md bg-blue-500 hover:bg-black-600 text-white px-4 rounded-md' >
                            Select
                        </button>

                        <MdDelete className='hover:cursor-pointer text-white' onClick={() => handleDelete([img?._id])} />
                    </div>
                </div>
            ))
            }
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
            {/* onClick={handleInput} */}
            <div className='flex gap-6 absolute right-6 bottom-6'>
            {checkfill.length > 0 && (
            <button onClick={() => handleDelete(checkfill)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete Selected
            </button>)}
            <button onClick={handleBox} className="bg-gradient-to-r from-[#022D24]  to-[#146C60] text-white font-bold py-2 px-4 rounded">
                Upload File
            </button>
            {/* <button onClick={handleUpload} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            + Upload
            </button> */}
            </div>
            
        </div>

    ) : ((
        <div className='w-full h-full flex items-center'>
       <div className="flex w-full h-full justify-center">
            <img src="https://res.cloudinary.com/dhwes67mf/image/upload/v1714455523/undraw_no_data_re_kwbl_er49db.svg" alt="" className="w-[20%] mt-24" />
        </div>

        <div className='flex gap-6 absolute right-6 bottom-6'>
        <button onClick={handleBox} className="bg-gradient-to-r from-[#022D24]  to-[#146C60] text-white font-bold py-2 px-4 rounded">
         Upload File
        </button>
    </div>
    </div>
      ))
}

export default ImageCard
