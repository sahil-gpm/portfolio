import React, { useState, useEffect } from 'react'
import about from '../../assets/about.png'
const About = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`fade-slide-in ${loaded ? "loaded" : ""}`}>
      <div className="head text-center text-6xl font-bold tracking-tight text-white mt-32">
        Hello 👋, My name is <span className='capitalize text-green'>sahil chavan</span>
        <div className='flex flex-col lg:flex-row mt-3 justify-center items-center w-3/4 mx-auto'>
          <img src={about} className='mx-auto' alt="" />
          <p className='text-sm text-center lg:text-start md:text-base font-normal tracking-normal font-mono'>Hello, fabulous readers! 👋 I'm Sahil, a passionate <span className='text-green'>developer</span> on a mission to turn your ideas into incredible, functional realities. My journey into the 🧑‍💻 tech world started back in 9th grade, where the allure of coding captured my imagination. Despite the exam hurdles, I didn't 😢 let go of that dream.

            Fast forward to post-school life, and I dived headfirst into web development. Starting with the basics of HTML, CSS, and JS, I honed my skills over time. Now, I stand proud as a proficient developer with advanced expertise in a lot of technologies: React, Node, Firebase, MongoDB, Tailwind, Bootstrap – you name it! 🚀

            Not just limited to the backend magic, I'm also well-versed in crafting visually stunning user interfaces using tools like Figma. 🎨 My portfolio is a testament to the diverse range of web-based projects I've brought to life, and I'm just getting started! 🌟

            Stay tuned for more exciting additions to my portfolio. Let's create something extraordinary together! 💻✨</p>
        </div>
      </div>
      <div className='text-center my-10 text-grey text-sm'>
        sahil@portfolio2023
      </div>
    </div>
  )
}

export default About
