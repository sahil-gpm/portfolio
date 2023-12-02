import React, { useState, useEffect } from 'react'
import oncode from '../../assets/oncode/oncode.png'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const Oncode = () => {


    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div>
            <div className={`fade-slide-in ${loaded ? "loaded" : ""}`}>
                <div className="head text-white text-4xl md:text-5xl text-center w-3/4 mx-auto font-bold tracking-tight mt-20">
                    <span className='text-green'> Oncode </span>- where simplicity★ meets versatality🌟
                </div>
                <div className="ui mt-10 flex w-3/4 mx-auto justify-between items-center gap-3 px-2 md:px-12">
                    <div className="controls text-white text-base md:text-xl font-semibold ">
                        Take a good look 👀 of the app ➡️
                    </div>
                    <button className='text-main text-xs md:text-base bg-green px-4 py-3 rounded-3xl font-semibold' onClick={() => {toast.success("Sorry but mobile view is not available") }}>Change view</button>
                </div>

                <img src={oncode} className='w-[80%] md:w-[70%] mx-auto mt-8 rounded-3xl' alt="" />
                <div className="feat text-white text-center">
                    <div className="HEAD capitalize text-2xl mt-8  font-semibold w-3/4 mx-auto px-10">features</div>
                    <div className="f w-3/4 mx-auto px-3 md:px-10 flex justify-center items-center flex-wrap gap-2 mt-5">
                        <span className='px-4 py-2 rounded-3xl border-white border '>Firebase authentication</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Sharable coding space</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Web based editor</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Code storage and deletion</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Code editing and retrieval</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Profile customization</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>20+ language execution with API</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Community for doubt solving</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>User friendly interfaces</span>
                    </div>
                </div>
                <div className="other-details text-white w-[90%] md:w-3/4 mx-auto my-6 px-8 gap-3 text-center">
                    <div className="description text-center text-xs md:text-base font-semibold md:font-normal">Oncode is a <span className='text-green'>web based</span> that enables every required features 🤞 for a coder. It uses react 🔵 as it's frontend and node + socket.io ✅ as the backend.Besides tailwind 🔷 for styling, compactness. I have also deployed it on render ☁️ hosting services.I have used firebase for authentication and cloud firestore for storing user related data and this was the biggest react app i ever developed.It was actually my college project and due to some deadlines i was unable to make it mobile friendly and also i kept it's backend repositort private to avoid code exposure 😢</div>
                    <Link target='_blank' to={'https://github.com/sahil-gpm/OnCode-Frontend'}><button className='bg-green text-main px-4 py-3 rounded-md my-5' >Github ★</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Oncode
