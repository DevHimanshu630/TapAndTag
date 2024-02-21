import React, { useState } from "react";
import { MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";
import axios from "../Axios/Axios";

function Userdetails() {

  const [data, setData] = useState({
    email: '',
    heading: '',
    subHeading: '',
    emailicon: '',
    iconMobile: '',
    IconSms: '',
    headingTitle: '',
    HeadingDescription: '',
    cardTitle: '',
    cardButtonText: '',
    contactLable: '',
    contactNumber: '',
    EmailLable: '',
    lableEmail: '',
    Address: '',
    AddressLine1: '',
    AddressLine2: '',
    city: '',
    state: '',
    country: '',
    Zipcode: '',
    ActionButton: '',
    GmapURL: '',
    ImageTitle: '',
    ImageDesc: '',
    SocialTitle: '',
    SocialDesc: '',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    linksTitle: '',
    linksDesc: '',
    AdditionalLinks: ''

  })

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const token = localStorage.getItem('token')
  const handleSubmitUserData = async (e) => {
    console.log(token);
    e.preventDefault();

    try {
      const res = await axios.post('users/formdata', {
        data
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },

        }
      );
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmitUserData} class="max-w-sm mx-auto">
        <div className="flex w-full">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="heading"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Heading
            </label>
            <input
              type="text"
              name="heading"
              id="heading"
              value={data.heading}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="subHeading"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sub Heading
            </label>
            <input
              name="subHeading"
              type="text"
              id="subheading"
              value={data.subHeading}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <h1>Profile connect icons</h1>
        <div className="flex w-full">
          <div class="mb-5">
            <label
              for="emailicon"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              autoComplete="true"
              placeholder="name@flowbite.com"
              type="email"
              name="emailicon"
              id="iconemail"
              value={data.emailicon}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="iconMobile"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile
            </label>
            <input
              name="iconMobile"
              type="phone"
              id="iconMobile"
              value={data.iconMobile}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="IconSms"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              SMS
            </label>
            <input
              name="IconSms"
              type="text"
              id="sms"
              value={data.IconSms}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <h1>Heading and Text</h1>
        <div className="flex w-full">
          <div class="mb-5">
            <label
              for="headingTitle"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="headingTitle"
              type="text"
              id="headingtitle"
              value={data.headingTitle}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="HeadingDescription"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              name="HeadingDescription"
              id="headingdescription"
              value={data.HeadingDescription}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <h1> Card background</h1>
        <div className="flex w-full">
          <div class="mb-5">
            <label
              for="cardTitle"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              title
            </label>
            <input
              name="cardTitle"
              type="text"
              id="cardtitle"
              value={data.cardTitle}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="cardButtonText"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Button Text
            </label>
            <input
              name="cardButtonText"
              type="text"
              id="btntext"
              value={data.cardButtonText}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <h1>Contact Number </h1>
        <div className="flex w-full">
          <div class="mb-5">
            <label
              for="contactLable"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Label
            </label>
            <input
              name="contactLable"
              type="text"
              id="contact"
              value={data.contactLable}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="contactNumber"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number
            </label>
            <input
              type="text"
              id="number"
              name="contactNumber"
              value={data.contactNumber}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <h1>Email</h1>
        <div className="flex">
          <div class="mb-5">
            <label
              for="EmailLable"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Label
            </label>
            <input
              type="text"
              id="email"
              name="EmailLable"
              value={data.EmailLable}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="lableEmail"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="lableEmail"
              value={data.lableEmail}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <h1>Address</h1>
        <div className="flex w-full flex-wrap">
          <div class="mb-5">
            <label
              for="Address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Label
            </label>
            <input
              name="Address"
              type="text"
              id="addlable"
              value={data.Address}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>


          <div class="mb-5">
            <label
              for="AddressLine1"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address line 1
            </label>
            <input
              type="text"
              id="add1"
              name="AddressLine1"
              value={data.AddressLine1}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="AddressLine2"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address line 2
            </label>
            <input
              name="AddressLine2"
              type="text"
              id="add2"
              value={data.AddressLine2}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>


          <div class="mb-5">
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              city
            </label>
            <input
              name="city"
              type="text"
              id="City"
              value={data.city}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              state
            </label>
            <input
              name="state"
              type="text"
              id="state"
              value={data.state}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>


          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              name="country"
              type="text"
              id="country"
              value={data.country}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Zipcode
            </label>
            <input
              name="Zipcode"
              type="phone"
              id="zip"
              value={data.Zipcode}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Action Button
            </label>
            <input
              name="ActionButton"
              type="text"
              id="actbtn"
              value={data.ActionButton}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              GoogleMap URL
            </label>
            <input
              name="GmapURL"
              type="text"
              id="map"
              value={data.GmapURL}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>


        </div>


        <h1>Images</h1>
        <div className="flex">
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="ImageTitle"
              type="text"
              id="imgtitle"
              value={data.ImageTitle}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              name="ImageDesc"
              type="text"
              id="imgdesc"
              value={data.ImageDesc}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

        </div>


        <h1>social links</h1>
        <div className="flex w-[100vw]">
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="SocialTitle"
              type="text"
              id="SocialTitle"
              value={data.SocialTitle}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              name="SocialDesc"
              type="text"
              id="socialdesc"
              value={data.SocialDesc}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              facebook URL
            </label>
            <input
              name="facebookUrl"
              type="text"
              id="tfacebook"
              value={data.facebookUrl}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Instagram URL
            </label>
            <input
              name="instagramUrl"
              type="text"
              id="insta"
              value={data.instagramUrl}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Twitter URL
            </label>
            <input
              name="twitterUrl"
              type="text"
              id="twitter"
              value={data.twitterUrl}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

        </div>

        <h1>links</h1>
        <div className="flex">
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="linksTitle"
              type="text"
              id="linktitle"
              value={data.linksTitle}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              name="linksDesc"
              type="text"
              id="linkdesc"
              value={data.linksDesc}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Link
            </label>
            <input
              name="AdditionalLinks"
              type="text"
              id="additionallinks"
              value={data.AdditionalLinks}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Userdetails;
