import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Card from "./Card";
import ImageCard from "./ImageCard";
import {ToastContainer } from "react-toastify";
import Draganddrop from "../Components/Draganddrop";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FlieManager({ profile, image, setFiledata }) {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [order, setOrder] = useState("");
    const [upload, setUpload] = useState(false);
    const [selectAll, setSelectAll] = useState(false)
    const handleChange = (event) => {
        setType(event.target.value);
    };
    const handleOrder = (event) => {
        setOrder(event.target.value);
    };

    const [img, setImages] = useState(true)
    const handleImg = () => {
        setImages(false)
    }
    const handleProfileImg = () => {
        setImages(true)
    }





    // console.log('sonu nigam',selectAll)
    // console.log(profile);
    return (
        <div className="flex flex-col  h-[80vh]">
            <div className="flex  h-full">
            <ToastContainer/>
                <div className="flex flex-col w-80 pt-3 gap-4 pr-2 border-r border-gray-300">
                    {/* <input
                        type="text"
                        value={search}
                        placeholder="Search file"
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-3"
                    />
                    <p className="text-blue-600 hover:cursor-pointer">All Files</p> */}
                    <p onClick={handleProfileImg} className="text-blue-600 hover:cursor-pointer">Profile </p>
                    <p onClick={handleImg} className="text-blue-600 hover:cursor-pointer">Image</p>
                </div>
                <div className="flex flex-col  flex-grow w-full">
                    <div className="flex  items-center justify-between border-b border-gray-300 py-2">
                        <div className="check flex items-center">
                            {/* <Checkbox {...label} id="check" onClick={()=>setSelectAll((prev)=>!prev)} />
                            <label htmlFor="check">Select All</label> */}
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
                    <div className="m-2">
                        {
                            img ? (<Card profileImg={profile} setFiledata={setFiledata} />)
                            :
                                (upload ? (
                                    <Draganddrop setUpload={setUpload} setFiledata={setFiledata} />
                                ):(
                                    <ImageCard images={image} setFiledata={setFiledata} setUpload={setUpload}
                                    selectAll={selectAll}/>
                                ))
                        }

                    </div>
                </div>  
            </div>
        </div>
    );
}
export default FlieManager;