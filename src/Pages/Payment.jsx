import axios from "../Axios/Axios";
import React, { useState } from "react";
import { handlePayment } from "../Components/RazorPay";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Payment() {
  const token = localStorage.getItem("token");
  const [addressSaved, setAddressSaved] = useState(false);
  console.log(addressSaved);
  const { id } = useParams();
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
  const handleAddress = async (e) => {
    e.preventDefault();
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
  const handleForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const linearGradientStyle = {
    background: "linear-gradient(90deg, #022D24 0%, #146C60 94.17%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div>
      <ToastContainer />
      {addressSaved ? (
        <>
          <div className="address">
            <h3 className="font-bold inline-block">Delivery Address - </h3>{" "}
            <p className="inline">{`${
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
            <button className="p-2 ml-4 bg-blue-400 border rounded" onClick={()=>{setAddressSaved(false)}}>Edit</button>
          </div>
        </>
      ) : (
        <>
          <section class="bg-white dark:bg-gray-900 text-black">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white">
                Delivery Address
              </h2>

              <form
                onSubmit={handleAddress}
                method="POST"
                className="space-y-8"
              >
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleForm}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    for="mobile no."
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Mobile No. &nbsp;&nbsp;&nbsp;&nbsp;(May be Used to Assist
                    Delivery)
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Mobile No."
                    name="mobile"
                    value={form.mobile}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pin Code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="6 Digit [Eg. 110001]"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="address1"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Flat, House No., Building, Company, Apartment
                  </label>
                  <input
                    type="text"
                    id="address1"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Area Colony Street Sector Village
                  </label>
                  <input
                    type="text"
                    id="address2"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Address Line 2"
                    name="address2"
                    value={form.address2}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="address3"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="address3"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Eg. Near AIIMS Hospital"
                    name="landmark"
                    value={form.landmark}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="City"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="City"
                    name="city"
                    value={form.city}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="state"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="State"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="State"
                    name="state"
                    value={form.state}
                    onChange={handleForm}
                    required
                  />
                </div>
                <div>
                  <label
                    for="country"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Country"
                    name="country"
                    value={form.country}
                    onChange={handleForm}
                    required
                  />
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

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={handlePayment({
          orderId: id,
        })}
      >
        Payment
      </button>
    </div>
  );
}

export default Payment;
