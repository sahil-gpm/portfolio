import React, { useState,useEffect } from 'react'
import desktop from '../../assets/newsfeed/newsfeed_desktop.png'
import mobile from '../../assets/newsfeed/newsfeed_mobile.png'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const Apibased = () => {

    const [view,setView] = useState(true)
    const [loaded,setLoaded] = useState(false)

    useEffect(()=>{
      setLoaded(true)
    },[])

    return (
        <div className={`fade-slide-in ${ loaded ? "loaded" : ""}`}>
            <div className="head text-white text-5xl text-center w-3/4 mx-auto font-bold tracking-tight mt-20">
                <span className='text-green'> Newsfeed </span>- the daily news refresher for you 🌍💬
            </div>
            <div className="ui mt-10 flex w-3/4 mx-auto justify-between items-center gap-3 px-2 md:px-12">
                <div className="controls text-white text-base md:text-xl font-semibold ">
                    Take a good look 👀 of the app ➡️
                </div>
                <button className='text-main text-xs md:text-base bg-green px-4 py-3 rounded-3xl font-semibold' onClick={()=>{setView(!view);toast.success("Changed view")}}>Change view</button>
            </div>

            <img src={!view ? mobile : desktop} className='w-[80%] md:w-[70%] mx-auto mt-8 rounded-3xl' alt="" />
            <div className="other-details text-white w-[90%] md:w-3/4 mx-auto my-6 px-8 gap-3 text-center">
                <div className="description text-center text-xs md:text-base font-semibold md:font-normal">Newsfeed is a 📰  web based application integrated with newsapi to fetch 🤞 daily news. It's frontend is implemented in react 🔵 and uses tailwind css 🔷 for styling and responsiveness.You can also fetch news based on your living country 🇮🇳 or interests.It uses firebase for authentication 🔑 and storing data related to created user.It's made completely responsive with tailwind breakpoints.hope you like it, i was unable 😢 to deploy due to the news api restrictions...</div>
                <Link target='_blank' to={'https://github.com/sahil-gpm/newsfeed'}><button className='bg-green text-main px-4 py-3 rounded-md my-5' >Github ★</button></Link>
            </div>
        </div>
    )
}

export default Apibased
