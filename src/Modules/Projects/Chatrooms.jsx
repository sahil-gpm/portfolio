import React, { useState, useEffect } from 'react'
import desktop from '../../assets/chatrooms/chatroms_desktop.png'
import mobile from '../../assets/chatrooms/chatrooms_mobile.png'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const Chatrooms = () => {

    const [view, setView] = useState(true)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div>
            <div className={`fade-slide-in ${loaded ? "loaded" : ""}`}>
                <div className="head text-white text-5xl text-center w-3/4 mx-auto font-bold tracking-tight mt-20">
                    <span className='text-green'> Chatrooms </span>- talk with strangers and make new friends 🗣️😌
                </div>
                <div className="ui mt-10 flex w-3/4 mx-auto justify-between items-center gap-3 px-2 md:px-12">
                    <div className="controls text-white text-base md:text-xl font-semibold ">
                        Take a good look 👀 of the app ➡️
                    </div>
                    <button className='text-main text-xs md:text-base bg-green px-4 py-3 rounded-3xl font-semibold' onClick={() => { setView(!view); toast.success("Changed view") }}>Change view</button>
                </div>

                <img src={!view ? mobile : desktop} className='w-[80%] md:w-[70%] mx-auto mt-8 rounded-3xl' alt="" />
                <div className="feat text-white text-center">
                    <div className="HEAD capitalize text-2xl mt-8  font-semibold w-3/4 mx-auto px-10">features</div>
                    <div className="f w-3/4 mx-auto px-10 flex justify-center items-center flex-wrap gap-2 mt-5">
                        <span className='px-4 py-2 rounded-3xl border-white border '>JWT authentication</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Creating rooms</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Joining other rooms</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Make conversations</span>
                        <span className='px-4 py-2 rounded-3xl border-white border'>Room controls</span>
                    </div>
                </div>
                <div className="other-details text-white w-[90%] md:w-3/4 mx-auto my-6 px-8 gap-3 text-center">
                    <div className="description text-center text-xs md:text-base font-semibold md:font-normal">Chatrooms is a <span className='text-green'>mern</span> app that allows you to create rooms 🔑 of your interests and others can simply see the active rooms and can join ⨝ them.This a complete full stack app that uses react 🔵 as frontend, node js ✅ in the backend server and mongo db as the database.Besides it uses socket io ⚪️ for connecting users through web sockets enabling room chat.It also uses tailwind css 🔷 for styles and responsiveness.</div>
                    <Link target='_blank' to={'https://github.com/sahil-gpm/chatrooms'}><button className='bg-green text-main px-4 py-3 rounded-md my-5' >Github ★</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Chatrooms
