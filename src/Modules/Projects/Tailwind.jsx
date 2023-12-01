import React, { useState, useEffect } from 'react'
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import { Link } from 'react-router-dom'
const Tailwind = () => {

    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div className={`fade-slide-in ${loaded ? "loaded" : ""}`}>
            <div className="head text-white text-5xl text-center w-3/4 mx-auto font-bold tracking-tight mt-20">
                <span className='text-green'> Tailwind templates </span>- for practicing designing static pages 🧑‍💻
            </div>
            <div className="ui mt-10 w-3/4 mx-auto px-2 md:px-12">
                <div className="controls text-white text-base md:text-xl font-semibold text-center">
                    Take a good look 👀 of the templates ➡️
                </div>
            </div>

            <div className='w-3/4 text-green text-center font-semibold mt-6 mx-auto'>Facebook login/signup clone</div>
            <img src={fb} className='w-[80%] md:w-[70%] mx-auto mt-2 rounded-3xl' alt="" />
            <div  className='w-3/4 text-green  text-center  font-semibold mt-6 mx-auto'>Instagram login/signup clone</div>
            <img src={ig} className='w-[80%] md:w-[70%] mx-auto mt-2 rounded-3xl' alt="" />
            <div className="other-details text-white w-[90%] md:w-3/4 mx-auto my-6 px-8 gap-3 text-center">
                <div className="description text-center text-xs md:text-base font-semibold md:font-normal">This pages are sign ups in <span className='text-green'>tailwind css 🔷</span> which i did in my beginning of developnemt, this are static pages which doesn't have any logic. It was an attempt to learn tailwind 🔷 and it's classes and customizations ✅ in the tailwind config files.I have uploaded the facebook 🧑‍💻 page code to github but not the second one. I only got the screenshot as it was saved in drive 🙁</div>
               <Link to={'https://github.com/sahil-gpm/Tailwind_1/tree/main'} target='_blank'><button className='bg-green text-main px-4 py-3 rounded-md my-5' >Github ★</button></Link> 
            </div>
        </div>
    )
}

export default Tailwind
