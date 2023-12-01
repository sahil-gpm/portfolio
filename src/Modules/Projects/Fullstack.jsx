import React, { useEffect, useState } from 'react'
import chatrooms_desktop from '../../assets/chatrooms/chatroms_desktop.png'
import oncode from '../../assets/oncode/oncode.png'
import { Link } from 'react-router-dom'


const Fullstack = () => {
  const [loaded,setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)
  },[])

  return (
    <>
      <div className={`mt-24 fade-slide-in md:overflow-y-hidden ${loaded ? "loaded" : ""}`}>
        <div className="head text-4xl font-bold text-white w-3/4 mx-auto text-center">
          <span className='text-green'>Full stack</span> projects by me ►
        </div>
        <div className='p-2 md:p-10 flex flex-col md:flex-row justify-center items-center gap-5'>
          <div className="box1 bg-green w-[85%] mt-10 md:mt-0 md:w-[70%] lg:w-[27%] rounded-xl shadow-md shadow-grey">
            <img src={chatrooms_desktop} className='w-full rounded-t-xl h-52 object-cover' alt="" />
            <div className="info p-10 text-main text-2xl text-start font-bold ">
              Chatrooms - a full stack stranger room chat app make with mern and socket io.
            </div>
           <Link to={'/sahil-chatrooms-app'}><button className='bg-white text-main px-4 py-2 rounded-md ml-10 mb-6 text-sm font-semibold'>View in detail</button></Link> 
          </div>
          <div className="box2 bg-green  w-[85%] md:w-[70%] lg:w-[27%] rounded-xl shadow-md shadow-grey">
            <img src={oncode} className='w-full rounded-t-xl h-52 object-cover' alt="" />
            <div className="info p-10 text-main text-2xl text-start font-bold ">
              Oncode - an online coding utility made with react that fulfills every coding necessity.
            </div>
            <Link to={'/sahil-oncode-app'}><button className='bg-white text-main px-4 py-2 rounded-md ml-10 mb-6 text-sm font-semibold'>View in detail</button></Link>
          </div>
        </div>
        <div className='text-center my-10 text-grey text-sm'>
            sahil@portfolio2023
          </div>
      </div>
    </>
  )
}

export default Fullstack
