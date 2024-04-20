import React, { useState } from 'react';
import axios from '../Axios/Axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Forgot() {



    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get('email');
    const key = searchParams.get('key');
    const [passwordMatchError, setPasswordMatchError] = useState("");
    const [passwordLengthError, setPasswordLengthError] = useState("");
    const [forgotData, setForgotData] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForgotData({ ...forgotData, [name]: value });

        if (name === "confirmPassword" && value !== forgotData.password) {
            setPasswordMatchError("Passwords do not match");
        } else {
            setPasswordMatchError("");
        }

        if (name === "password" && value.length < 8) {
            setPasswordLengthError("Password must be at least 8 characters long");
        } else {
            setPasswordLengthError("");
        }
    };


    const navigate = useNavigate()

    const handleForgot = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/users/forgot-password-reset', {
                email: email,
                resetKey: key,
                newPassword: forgotData.password
            });
            console.log(res);
            if (res?.status === 200) {
                toast.success("Password Reset successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setTimeout(() => {
                    navigate("/login")
                }, [1000])
            }
        } catch (err) {
            console.log(err?.response?.status);
            if (err.response.status === 404) {
                toast.error("Reset Link Expired", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
            if (err?.response?.status === 403) {
                toast.error("password should be greater than 8 characters", {
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
    };

    return (
        <>
            <ToastContainer />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-sans text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Tap&Tag
                    </a>
                    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Change Password
                        </h2>
                        <form onSubmit={handleForgot} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div className='flex flex-col'>
                                <label htmlFor="password">New Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={forgotData.password}
                                    onChange={handleChange}
                                />
                                {passwordLengthError && <p className='text-red-400'>{passwordLengthError}</p>}
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={forgotData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {passwordMatchError && <p className='text-red-400'>{passwordMatchError}</p>}
                            </div>
                            <button className='' onClick={handleForgot}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Forgot;
