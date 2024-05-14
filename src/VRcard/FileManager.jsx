import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "./Card";
import ImageCard from "./ImageCard";
import {ToastContainer } from "react-toastify";
import Draganddrop from "../Components/Draganddrop";
import { convertLength } from "@mui/material/styles/cssUtils";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FlieManager({ profile, image, setFiledata }) {
    const [type, setType] = useState("");
    const [order, setOrder] = useState("");
    const [upload, setUpload] = useState(false);
    const handleChange = (event) => {
        setType(event.target.value);
    };
    const handleOrder = (event) => {
        setOrder(event.target.value);
    };

    const [img, setImages] = useState(true)
    const [checkfill, setCheckfill] = useState([])
    const handleImg = () => {
        setImages(false)
    }
    const handleProfileImg = () => {
        setImages(true)
    }
    const handleCheck = () => {
        if (checkfill.length) {
            setCheckfill([]);
        } else {
            const allImageIds = image.map(img => img._id);
            setCheckfill(allImageIds);
        }
    };
    
    
    console.log('Checkfill-------------------------->',checkfill)
    return (
        <div className="flex flex-col  h-[80vh]">
            <div className="flex  h-full">
            <ToastContainer/>
                <div className="flex flex-col w-80 gap-4 pt-4 pr-2 border-r border-gray-300 text-2xl font-semibold">
                    {/* <input
                        type="text"
                        value={search}
                        placeholder="Search file"
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-3"
                    />
                    <p className="text-blue-600 hover:cursor-pointer">All Files</p> */}
                    <p onClick={handleProfileImg} className={`p-2 hover:cursor-pointer transition duration-200 ease-in-out ${img ? 'bg-[#12665a] text-white':'text-[#12665a] hover:bg-[#12665a] hover:text-white'} rounded-xl`}>Profile </p>
                    <p onClick={handleImg} className={`p-2 hover:cursor-pointer transition duration-200 ease-in-out ${!img ? 'bg-[#12665a] text-white':'text-[#12665a] hover:bg-[#12665a] hover:text-white'} rounded-xl`}>Image</p>
                </div>
                <div className="flex flex-col  flex-grow w-full">
                    <div className="flex  items-center justify-between border-b border-gray-300 py-2">
                        <div className="check flex items-center">
                            {
                                !img && (<>
                                <Checkbox {...label} id="check" onChange={handleCheck} 
                                 checked={(checkfill.length === image.length && checkfill.length > 0 ? true : false)} />
                                <label htmlFor="check" className="text-xl">Select All</label> 
                                </>)
                            }               
                        </div>
                        <div className="flex gap-4">
                            <Box sx={{ minWidth: 200 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Type"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"image"}>Image</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 200 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Order</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={order}
                                        label="order"
                                        onChange={handleOrder}
                                    >
                                        <MenuItem value={"New first"}>New First</MenuItem>
                                        <MenuItem value={"Old first"}>Old First</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>


                        </div>
                    </div>
                    <div className="m-2 h-[70%]">
                        {
                            img ? (<Card profileImg={profile} setFiledata={setFiledata} />)
                            :
                                (upload ? (
                                    <Draganddrop setUpload={setUpload} setFiledata={setFiledata} />
                                ):(
                                    <ImageCard images={image} setFiledata={setFiledata} setUpload={setUpload}
                                    checkfill={checkfill} setCheckfill={setCheckfill}/>
                                ))
                        }

                    </div>
                </div>  
            </div>
        </div>
    );
}
export default FlieManager;