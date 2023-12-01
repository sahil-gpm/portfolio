import React,{useEffect,useState} from 'react'
import Intro from './Intro'
import Categories from './Categories'

const Home = () => {
  const [loaded,setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)
  },[])

  return (
    <div className={`fade-slide-in ${ loaded ? "loaded" : ""}`}>
      <Intro/>
      <Categories/>
    </div>
  )
}

export default Home
