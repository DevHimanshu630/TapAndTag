import axios from "../../Axios/Axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { usePrintContext } from "../Context/PrintCards";

function LayoutPrint(){
    const {printCards, setPrintCards} = usePrintContext()
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState()
    useEffect(() => {
        switch (location.pathname) {
          case "/admin/printlist/remaining":
            setCurrentPage(1);
            break;
          case "/admin/printlist/pending":
            setCurrentPage(2);
            break;
          case "/admin/printlist/printed":
            setCurrentPage(3);
            break;
        }
      }, [location.pathname]);

    useEffect(()=>{
        const fetching = async() =>{
            const data = await axios.get('admin/print-data');
            if(data.status === 200){
                setPrintCards(data.data.printdata)
                console.log(data.data.printdata)
            }
        }
        fetching()
        console.log('here the useEffect was called !!!!')
    },[])
    return (
    <>
    <div className="flex gap-4 p-8 justify-center">
        <Link to={'remaining'}><button class={`rounded-lg px-4 py-1 border-2 border-red-500 text-black ${currentPage === 1? 'bg-red-100':''} hover:bg-red-100`}>Remaining</button></Link>
        <Link to={'pending'}><button class={`rounded-lg px-4 py-1 border-2 border-yellow-500 text-black ${currentPage === 2? 'bg-yellow-100':''} hover:bg-yellow-100`}>Pending</button></Link>
        <Link to={'printed'}> <button class={`rounded-lg px-4 py-1 border-2 border-green-500 text-black ${currentPage === 3? 'bg-green-100':''} hover:bg-green-100`}>Printed</button></Link>
    </div>
    <Outlet/>
    </>
    );
}

export default LayoutPrint;