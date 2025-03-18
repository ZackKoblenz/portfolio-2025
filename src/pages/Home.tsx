import React from 'react'
import logo from '../assets/logo.png'
import kobot from '../assets/kobot.png'
import points from '../assets/incentive points.png'
import generator from '../assets/bingo generator.png'
import koth from '../assets/koth tracker.png'
import Carousel from '../components/Carousel'


function Home() {
  return (
    <>
    <div className="projects w-full text-center">
        <h1>KoBot</h1>
        <div className='flex justify-left mb-8'>
            <img src={kobot} className=" h-[400px]"></img>
            <div>
                <p className="text-xl">Description</p>
                <p>Description</p>
            </div>
        </div>
    </div>
    <div className="projects w-full text-center">
        <h1>Incentive Points</h1>
        <div className='flex justify-center mb-8'>
            <img src={points} className=" h-[400px]"></img>
        </div>
    </div>
    <div className="projects w-full text-center">
        <h1>Bingo Generator</h1>
        <div className='flex justify-center mb-8'>
            <img src={generator} className=" h-[400px]"></img>
        </div>
    </div>
    <div className="projects w-full text-center">
        <h1>King of the Hill Tracker</h1>
        <div className='flex justify-center mb-8'>
            <img src={koth} className=" h-[400px]"></img>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </>
    
  )
}

export default Home
