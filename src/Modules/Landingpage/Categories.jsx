import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <>
            <div className='mt-10 text-main flex-col flex md:flex-row justify-center items-center gap-2 font-semibold text-4xl rounded-3xl p-5'>
                <div className="box1 cursor-pointer bg-green text-center max-w-sm h-[22.5rem] flex justify-center items-center font-semibold text-4xl rounded-3xl p-10">
                    <Link to={'/sahil-full-stack-apps'}>Full stack 🤞 projects with 💛 Firebase and MongoDB 💚 ►</Link>
                </div>
                <div className="smallboxes flex flex-col justify-center gap-2">
                    <Link to={'/sahil-newsfeed-api-based-app'}>
                        <div className="box2 cursor-pointer max-w-sm h-[17rem] md:h-[11rem] bg-grey rounded-3xl p-16 text-center flex justify-center items-center">
                            Projects made ➡️ with api ⌘ integration ►
                        </div>
                    </Link>
                    <div className="box3 cursor-pointer max-w-sm  h-[17rem] md:h-[11rem] bg-white rounded-3xl p-16 text-center flex justify-center items-center">
                        Tailwind 🤞 css UI templates 🧑‍💻 ►
                    </div>
                </div>
            </div>
            <div className='text-center my-10 text-grey text-sm'>
                sahil@portfolio2023
            </div>
        </>
    )
}

export default Categories
