import axios from "../Axios/Axios";
import "../Css/payment.css";
import React, { useEffect, useState } from "react";
import { handlePayment } from "../Components/RazorPay";
import { useParams, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

function Payment() {
  const token = localStorage.getItem("token");
  const [addressSaved, setAddressSaved] = useState(false);
  const { id } = useParams();
  console.log(id);
  const fetchOrder = async () => {
    try {
      const res = await axios.get(`users/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    }
    catch (e) {
      console.log(e);
    }
  };

  const [form, setForm] = useState({
    country: "",
    fullname: "",
    mobile: "",
    pincode: "",
    address1: "",
    address2: "",
    address3: "",
    landmark: "",
    city: "",
    state: "",
  });
  const handleForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAddress = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await axios.post(
        "users/save-address",
        {
          address: form,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Address Saved!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      console.log(res);
      setAddressSaved(true);
    } catch (e) {
      console.log(e);
    }
  };
  const linearGradientStyle = {
    background: "linear-gradient(90deg, #022D24 0%, #146C60 94.17%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  var [city, setCity] = useState("Gorakhpur");
  function handleGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5c61d15ecbe202cf7d97d4dfe626fc88&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.log(error));
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  weather && console.log(weather);
  const handleStateChange = (e) => {
    setForm(e.target.value);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div>
      <ToastContainer />
      {addressSaved ? (
        <>
          <div className="address bottom-2 p-4 w-full flex justify-center items-center text-center border border-slate-500">
            <h3 className="text-slate-600">Delivery Address </h3>{" "}
            <span className="font-bold">
              {" "}
              &nbsp;&nbsp;&nbsp; {form.fullname} &nbsp;{" "}
            </span>
            <p className="inline">{`${
              " " +
              form.address1 +
              " " +
              form.address2 +
              " " +
              form.address3 +
              " " +
              form.city +
              " " +
              form.pincode +
              " " +
              form.state +
              " " +
              form.country
            }`}</p>
          </div>
        </>
      ) : (
        <>
          <section class="bg-white dark:bg-white text-black">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-left text-black-600">
                Delivery Address
              </h2>
              <Button onClick={handleGetLocation} variant="contained">
                Get Location
              </Button>
              <form
                onSubmit={handleAddress}
                method="POST"
                className="space-y-8"
              >
                <div className="flex w-full gap-8">
                  <div className="w-1/2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-black-600 dark:text-black-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-black-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      name="fullname"
                      value={form.fullname}
                      onChange={handleForm}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="w-1/2">
                    <label
                      for="mobile no."
                      class="block mb-2 text-sm font-medium text-black-600 "
                    >
                      Mobile No. &nbsp;&nbsp;&nbsp;&nbsp;(May be Used to Assist
                      Delivery)
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      className="block p-2.5 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Mobile No."
                      name="mobile"
                      value={form.mobile}
                      onChange={handleForm}
                      required
                    />
                  </div>
                </div>
                <div className="flex w-full gap-8">
                  <div className="w-1/2">
                    <label
                      for="subject"
                      class="block mb-2 text-sm font-medium text-black-600 "
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      class="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="6 Digit [Eg. 110001]"
                      name="pincode"
                      value={form.pincode}
                      onChange={handleForm}
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      for="city"
                      class="block mb-2 text-sm font-medium text-black-600 "
                    >
                      Town / City
                    </label>
                    <input
                      type="text"
                      id="City"
                      className="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="City"
                      name="city"
                      value={form.city}
                      onChange={handleForm}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="address1"
                    class="block mb-2 text-sm font-medium text-black-600 "
                  >
                    Flat, House No., Building, Company, Apartment
                  </label>
                  <input
                    type="text"
                    id="address1"
                    class="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Address Line 1"
                    name="address1"
                    value={form.address1}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="address2"
                    class="block mb-2 text-sm font-medium text-black-600 "
                  >
                    Area Colony Street Sector Village
                  </label>
                  <input
                    type="text"
                    id="address2"
                    className="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Address Line 2"
                    name="address2"
                    value={form.address2}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div className="flex w-full gap-8">
                  <div className="w-1/2">
                    <label
                      for="address3"
                      class="block mb-2 text-sm font-medium text-black-600 "
                    >
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      id="address3"
                      className="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Eg. Near AIIMS Hospital"
                      name="landmark"
                      value={form.landmark}
                      onChange={handleForm}
                      required
                    />
                  </div>

                  {/* <div className="w-1/2">
                    <label
                      for="state"
                      class="block mb-2 text-sm font-medium text-black-600 "
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="State"
                      className="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="State"
                      name="state"
                      value={form.state}
                      onChange={handleForm}
                      required
                    />
                  </div> */}
                  <div className="w-1/2">
                    <label
                      htmlFor="state"
                      className="block mb-2 text-sm font-medium text-black-600"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      className="block p-3 w-full text-sm text-black-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      name="state"
                      value={form.state}
                      onChange={handleForm}
                      required
                    >
                      <option value="">Select a state</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Save Address
                </button>
              </form>
            </div>
          </section>
        </>
      )}
      <div className="pl-10 pt-3 flex w-full items-center justify-center">
        <button
          hidden={!addressSaved}
          className={`${
            !addressSaved
              ? "bg-slate-500 text-white font-bold py-2 px-4 m-2 rounded"
              : "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded"
          } p-2 ml-4 border rounded`}
          onClick={() => {
            setAddressSaved(false);
          }}
        >
          Edit Address
        </button>
        <button
          disabled={!addressSaved}
          hidden={!addressSaved}
          className={`${
            !addressSaved
              ? "bg-slate-500 text-white font-bold py-2 px-4 m-2 rounded"
              : "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded"
          } p-2 ml-4 border rounded`}
          data-toggle="tooltip"
          data-placement="top"
          title={!addressSaved ? "Save address to Proceed" : ""}
          onClick={handlePayment({
            orderId: id,
          })}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;
