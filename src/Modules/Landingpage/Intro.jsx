import React from 'react'
import Typing from './Typing'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div>
            <div className="heading text-white mt-24 text-5xl md:text-6xl text-center font-bold tracking-tight w-3/4 mx-auto">
                Hey folks 👋, I'm <span className='text-green'>sahil</span> - a guy who loves developing applications
            </div>
            <div className='text-center mt-10 mx-5 text-green font-mono text-xl md:text-2xl'>
               I can <Typing />
            </div>
            <div className="pararaph text-white text-sm md:text-base w-3/4 md:w-[60%] mx-auto mt-10 text-center">
            Greetings! 👋 I'm a <span className='text-green'>passionate developer</span>, transforming lines of code into impactful solutions. I thrive on challenges like designing intuitive interfaces, optimizing high-performance algorithms, and resolving intricate bugs. 🚀 My commitment to staying at the forefront of industry trends ensures that my work not only embraces cutting-edge technology but also seamlessly integrates with the ever-evolving tech landscape. Let's collaboratively code a future where innovation knows no bounds! 🌐✨
            </div>
            <div className="buttons text-slate text-center mt-10 mx-8 text-sm font-semibold flex justify-center items-center gap-3">
                <button className='bg-green px-4 md:w-52 py-3 rounded-md' onClick={()=>{
                    navigator.clipboard.writeText("sahilchavangithub@gmail.com").then(()=>{
                        toast.success("My mail id is copied to clipboard")
                    }).catch(()=>{
                        toast.error("Some error occurred try again")
                    })
                }}>Contact me</button>
               <Link to={"/about-me"}><button className='bg-grey px-4 md:w-52 py-3 rounded-md'>About me</button></Link> 
            </div>
            
        </div>
    )
}

export default Intro
