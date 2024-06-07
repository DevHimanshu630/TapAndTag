import React, { useState } from 'react'
import LandingFooter from '../Components/LandingFooter'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import LandingNav from '../Components/LandingNav'
import { useUserContext } from '../Context/User'

function Landing() {
  const [username, setUsername] = useState()
  const [designation, setDesignation] = useState()
  const [cardimg, setCardimg] = useState('/wood.png')

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuNav, setIsMenuNav] = useState(false);
  const {userInfo,setUserInfo} = useUserContext()


  return (
    <div className='bg-black h-full w-full flex flex-col gap-2'>
        <section className='relative w-full h-full'>
            <div className='h-full w-[70%] bg-gradient-to-r to-transparent from-black opacity-80 absolute z-10 '></div>
            <img src="/tath1.png" className='object-cover h-full w-full relative z-0' alt="" />
            <span className='absolute h-[20%] gap-[20%] w-full items-center justify-center md:flex flex-col z-20 top-0 left-0 hidden'>
            <img src="/tatlogo.svg" className='w-[10%]' alt="" />
            <div className='text-white font-[400] text-[1.2vw] leading-[24px] flex gap-[3.2vw] w-full tanderness justify-center items-center'>
                <Link to={'/'}><h1>HOME</h1> </Link>
                <Link to={'/product'}><h1>PRODUCT</h1></Link>
                <Link to={'/sustainability'}><h1>SUSTAINABILITY</h1></Link>
                <Link to={'/'}><h1>SUPPORT</h1></Link>
                {
                  userInfo ? (
                    <a href='/dashboard' className="bg-gradient-to-r from-[#022e25] to-[#136b5f] px-[2%] py-[0.6vw] rounded-lg cursor-pointer transition-all duration-1000 ease-in-out">Dashboard</a>
                  ):(
                    <a href='/login' className='border-2 border-white rounded-lg px-[2vw] py-[0.5vw] text-center cursor-pointer' >Login</a>
                  )
                }
                <a href='/qrform' className="bg-gradient-to-r from-[#022e25] to-[#136b5f] px-[2%] py-[0.6vw] rounded-lg cursor-pointer transition-all duration-1000 ease-in-out">Order Now</a>
            </div>
            </span>
            <span className='absolute w-full md:hidden flex-col z-20 top-0 left-0 flex'>
              {/* <div className='w-full flex p-[2vw] px-[3vw] justify-between'>
              <button
              type="button"
              onClick={toggleMenu}
              className='text-white'
              aria-controls="navbar-toggle"
              aria-expanded={''}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
              <div className='text-white flex gap-[3vw] w-[37%] text-[3.5vw] justify-center items-center'>
              <a href='' className='border-2 border-white rounded-lg px-[2vw] py-[0.5vw] text-center cursor-pointer' >Login</a>
                <a href='' className="bg-gradient-to-r from-[#022e25] to-[#136b5f] px-[2%] py-[0.6vw] rounded-lg cursor-pointer  transition-all duration-1000 ease-in-out">Order Now</a>
              </div>
              </div> */}

              <LandingNav/>
            </span>
            <span className='absolute h-[120%] w-[45%] pl-[10%] gap-[1.7vw] justify-center flex z-10 flex-col top-0 left-0'>
                <h1 className='font-[1000] text-[3.5vw] text-white font-primary leading-tight '>PROFESSIONALISM IN A SINGLE TAP</h1>
                <h2 className='font-[300] text-[1.2vw] text-white font-primary'>For those aiming to leave a fantastic initial impact.</h2>
                <Link to={'/product'}><button className='bg-gradient-to-r from-[#022e25] to-[#136b5f] tanderness flex self-start text-white text-[1vw] px-[2vw] py-[0.5vw] rounded-lg'>Explore Our Collection</button></Link>
            </span>
        </section>
        <section className='relative w-full h-full'>
        <img src="/tath2.png" className='object-cover h-full w-full relative z-0' alt="" />
        <span className='absolute my-[10%] gap-[5vw] w-full flex flex-col items-center z-10 top-0 left-0'>
          <div className='flex flex-col mt-[4%] items-center justify-center gap-[1vw] h-full w-full'>
          <h1 className='font-[700] text-[2.5vw] text-white font-primary'>EXPLORE OUR COLLECTION</h1>
          <h2 className=' text-[1.2vw] text-white font-primary w-[43%] leading-tight text-center'>
          Discover the perfect match for you among our three distinct collections, each card is meticulously crafted to reflect the essence of refinement.
          </h2>
          </div>
          <div className='flex w-[50%] items-center font-[500] text-[1vw] font-primary text-white gap-[6%]'>
            <div className='flex flex-col items-center gap-[1vw]'>
              <img src="/classic.png" alt="" />
              <p>MODERN VERSATALITY</p>
            </div>

            <div className='flex flex-col items-center gap-[1vw]'>
              <img src="/wood.png" alt="" />
              <p>EARTHY AESTHETIC</p>
            </div>

            <div className='flex flex-col items-center gap-[1vw]'>
              <img src="/metal.png" alt="" />
              <p>TIMELESS ELEGANCE</p>
            </div>
          </div>
          <p className='font-[700] leading-[24px] mt-[5vw] text-[1vw] font-primary text-white'>Place an <Link to={'/qrform'} className='underline'>Order</Link> for yours Now</p>
        </span>
        </section>
        <section className='relative w-full h-full'>
        <img src="/tath3.png" className='h-full relative w-full object-cover z-0' alt="" />
        <span className='absolute flex flex-col mt-[7%] w-[40%] xl:gap-[4vw] gap-[3vw] top-0 right-0'>
        <div className='flex flex-col items-right justify-center pl-[10%] gap-[1vw] w-full'>
          <h1 className='font-[700] text-[2vw] text-white font-primary leading-tight w-[60%]'>UNLOCK THE UNTAPPED POTENTIAL</h1>
          <h2 className='font-[300] text-[1vw] text-white font-primary w-[78%]'>
          An eco-friendly innovation poised to revolutionize networking and information exchange.
          </h2>
          </div>
        <div className='pl-[10%] w-[80%] gap-[1.5vw] flex flex-col font-primary'>
          <h1 className='font-[700] text-[1vw] text-white'>ENTER YOUR DETAILS FOR BETTER EXPERIENCE</h1>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Your Full Name' className='bg-[#191919] text-white text-[1vw] p-0 px-2 xl:p-[0.7rem]'/>
          <input type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)} placeholder='Enter Your Designation' className='bg-[#191919] text-white text-[1vw] p-0 px-2 xl:p-[0.7rem]'/>
          <button className='bg-gradient-to-r from-[#022e25] to-[#136b5f] flex self-end text-white text-[1vw] px-[2vw] py-[0.5vw] rounded-lg'>Done</button>
        </div>
        <div className=' -mt-[2vw] w-[80%] flex flex-col gap-[4vw] items-center justify-center'>
          <img src={cardimg} className='w-[15vw]' alt="" />
          <nav className='flex w-full pl-[10%] items-center gap-[1vw]'>
            <img src="/theme1.png" onClick={()=>setCardimg('/classic.png')} className={`w-[3vw] object-cover h-[3vw] rounded-full hover:border-2 hover:border-blue-400 hover:p-1`} alt="" />
            <img src="/theme2.png" onClick={()=>setCardimg('/wood.png')} className={`w-[3vw] object-cover h-[3vw] rounded-full hover:border-2 hover:border-blue-400 hover:p-1`} alt="" />
            <img src="/theme3.png" onClick={()=>setCardimg('/metal.png')} className={`w-[3vw] object-cover h-[3vw] rounded-full hover:border-2 hover:border-blue-400 hover:p-1`} alt="" />
            <p className='text-[#9F9F9F] font-[700] italic leading-[24px] text-[1vw]'>Choose Your Style</p>
          </nav>
        </div>
        </span>
        </section>
        <section className='relative w-full h-full flex justify-center items-center'>
        <img src="/tath4.png" className='object-cover h-full w-full'  alt="" />
        <span className='flex w-[70%] h-[28%] justify-between items-center absolute z-10 top-0 '>
          <div className='flex flex-col gap-[2vw] w-[43%]'>
            <h1 className='font-[700] text-[2.1vw] text-white font-primary leading-tight w-[90%]'>THE UNSEEN POTENTIAL OF SUSTAINABLE DIGITAL VISITING CARDS AWAIT DISCOVERY.</h1>
            <p className='font-[300] text-[1vw] text-white font-primary w-[78%] leading-tight'>Witness a substantial reduction in paper wastage, championing Niti Ayog's relentless quest for a digitally empowered India.</p>
          </div>
          <div className='flex flex-col gap-[3vw]'>
            <div className='flex gap-[10vw]'>
              <div className='flex gap-5 items-center justify-center'>
                <img src="/homesvg1.svg" className='w-[2vw]' alt="" />
                <div className='flex-col justify-center items-center'>
                  <h1 className='font-[700] text-[1.4vw] text-white font-primary'>1k+</h1>
                  <p className='font-[300] text-[1vw] text-white '>Cards generated</p>
                </div>
              </div>
              <div className='flex gap-5 items-center justify-center'>
                <img src="/homesvg2.svg" className='w-[2vw]' alt="" />
                <div className='flex-col justify-center items-center'>
                  <h1 className='font-[700] text-[1.4vw] text-white font-primary'>46.3k</h1>
                  <p className='font-[300] text-[1vw] text-white  '>Scans</p>
                </div>
                </div>
            </div>
            <div className='flex gap-[10vw]'>
            <div className='flex gap-5 items-center justify-center'>
                <img src="/homesvg3.svg" className='w-[2vw]' alt="" />
                <div className='flex-col justify-center items-center'>
                  <h1 className='font-[700] text-[1.4vw] text-white font-primary'>3</h1>
                  <p className='font-[300] text-[1vw] text-white  '>Types of Cards</p>
                </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                <img src="/homesvg4.png" className='w-[2vw]' alt="" />
                <div className='flex-col justify-center items-center'>
                  <h1 className='font-[700] text-[1.4vw] text-white font-primary'>450+</h1>
                  <p className='font-[300] text-[1vw] text-white  '>Trees Saved</p>
                </div>
                </div>
                
            </div>
          </div>
        </span>
        <span className='flex flex-col z-10 absolute top-0 w-full h-[90%] gap-[3vw] items-center justify-center'>
          <h1 className='font-[700] text-[2vw] text-white font-primary w-[48%] leading-tight text-center'>NO MORE CLUMSY STACKS OF PAPER, A MERE TAP ON YOUR SMARTPHONE.</h1>
          <p className='font-[300] text-[1vw] text-white font-primary w-[28%] text-center'>For people who want to make a great first impression. Tap and share your contact details, gather leads and connect to over 5,000 apps and CRM tools.</p>
          <Link to={'/product'}> <button className="bg-gradient-to-r from-[#022e25] to-[#136b5f] flex self-center text-white text-[1vw] px-[2vw] py-[0.7vw] leading-none rounded-full">Learn More</button></Link>
        </span>
        <LandingFooter/>
        </section>
    </div>
  )
}

export default Landing