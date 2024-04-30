import React, { useState } from 'react'
import logo from "../Images/logo.png"
import axios from "../Axios/Axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../Context/User';
import Navbar from '../Components/Navbar';
import { useOrderNowContext } from '../Context/Ordernow';

function SignUp() {
    const navigate = useNavigate();
    const {userInfo,setUserInfo} = useUserContext()
    const {OrderNow, setOrderNow, OrderFormData, setOrderFormData} = useOrderNowContext()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",

    })
    const handleChange = (e) => {
        console.log(formData);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post('users/signup',
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                },
                {
                    headers: {
                    },
                    // withCredentials: true // This will include the cookie on our request
                }
                  );

                // const info = await axios.get('users/profile',{
                //     withCredentials: true
                // })
                setUserInfo(res.data.token)
                
            console.log(res);
            if (res.status == 200) {
                const token = res.data.token;
                localStorage.setItem('tpt_token', token);
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                })
                toast.success("User created successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                if(OrderNow){
                    setTimeout(async()=>{
                      try {
                      const form = await axios.post("users/uploadForm", OrderFormData, {
                        headers: {
                          "Content-Type": "multipart/form-data", // Set content type for FormData
                          Authorization: `Bearer ${res.data.token}`,
                        },
                        // withCredentials: true
                      });
                      if (form?.status == 422) {
                        toast.error("Duplicate Page Url!", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                      }
                      if (form?.status == 200) {
                        toast.success("Qr Created successfully!", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                        setOrderNow(false)
                      }
                      // setQR(null)
                      
                    } catch (err){
                      // console.log(err?.response?.status);
                      if (err?.response && err?.response?.status == 501) {
                        toast.error("Error in Uploading Form", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                      }
                
                      if (err?.response && err?.response?.status == 405) {
                        toast.error("User Does Not Found Please SignUp First", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                        setTimeout(() => {
                          navigate("/signUp");
                        }, 2000);
                      }
                      if (err?.response && err?.response?.status == 403) {
                        toast.error("Error in saving form data!", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                        setTimeout(() => {
                          navigate("/signUp");
                        }, 3000);
                      }
                      if (err?.response && err?.response?.status == 422) {
                        toast.error("Duplicate Page Url!", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                      }
                
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
                    }
                  },[2000])
                  setTimeout(() => {
                    navigate('/dashboard');
                  }, [1000]);
                  }else{
                    setTimeout(() => {
                      navigate("/");
                    }, [1000]);
                  }
            }
            
        }
        catch (err) {
            if (err.response && err.response.status === 403) {
                toast.error("User already exists. Please choose a different email.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            if (err.response && err.response.status === 500) {
                toast.error("Unexpected Error Occured", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
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



            else {
                toast.error('Please try again after some time.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }

    }
    const gradientTextStyle = {
        background: 'linear-gradient(90deg, #022D24, #146C60)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      };

    return (
        <>
            <ToastContainer />
            <Navbar/>
            <section class=" pt-12">
                <div class="flex flex-col items-center justify-center px-6  mx-auto h-screen lg:py-0">                 
                    <div class="w-full bg-white rounded-3xl  flex flex-col items-center shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <Link to={"/"} class="text-2xl pt-6 font-semibold text-gray-900 ">
                        <img class="md:w-[140px] w-[120px] " src={logo} alt="logo" />
                    </Link>
                        <div class="p-6 space-y-4 md:space-y-6 w-full sm:p-8">
                            <h1 style={gradientTextStyle} class="text-xl font-sans py-6  font-semibold  text-center   leading-tight  text-gray-900 md:text-2xl ">
                                Create and account
                            </h1>
                            <form onSubmit={handleSubmitSignUp} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                   <input onChange={handleChange} type="text" name="username" id="username" placeholder='Username'  class=" border  placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white focus:ring-primary-300   font-sans rounded-full w-full " required />
                                </div>
                                <div>
                                  <input onChange={handleChange} type="email" name="email" id="email"  placeholder='Enter your Email Address'  class="border font-sans   placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] border-[#9C9C9C]  dark:focus:ring-white rounded-full w-full"  required />
                                </div>
                                <div>
                                   <input onChange={handleChange} type="password" name="password" id="password"   placeholder="Create a password" class="border font-sans border-[#9C9C9C]   placeholder:font-light placeholder:font-sans placeholder:text-[#9C9C9C] dark:focus:ring-white rounded-full w-full" required />
                                </div>
                                <div class="flex items-start pb-8">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-white " required />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-medium text-[#606060]">I accept the <Link to={"/termandcondition"} target='_black' class="font-medium underline  text-[#606060]" >Terms and Conditions</Link></label>
                                    </div>
                                </div>
                                <button
                      type="submit"
                      class="btn-hover block m-auto color-5"
                    >
                      Create
                    </button>
                                <p class="text-xs pt-8 font-sans text-center  text-[#606060] ">
                                    Already have an account? <Link to="/login" class=" text-[#606060] underline ">Login here </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
