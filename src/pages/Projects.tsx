import React from 'react'
import logo from '../assets/logo.png'
import kobot from '../assets/kobot.png'
import points from '../assets/incentive points.png'
import generator from '../assets/bingo generator.png'
import koth from '../assets/koth tracker.png'
import github from '../assets/github-mark-white.svg'

function Projects() {
  return (
    <div>
      <div className="projects w-full text-center ">
        <div className='Navbar'>
        <h1>KoBot</h1>
        </div>
        <div className='Navbar'>
            <img src={kobot} className="h-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"></img>
            <div className=" flex flex-col justify-center content-center w-1/4 gap-8 ">
                <p className="text-xl text-left"> Ko Bot is a full-stack application that allows a user to log into the front end, stores data like custom commands, and allows users to enable/disable, whitelist, set permissions, or delete commands.</p>
              <div className='flex justify-center'>
                <a href="https://github.com/ZackKoblenz/" className='justify-center'><img src={github} className="h-5"></img></a>
              </div>
            </div>
            
        </div>
    </div>
    <div className="projects w-full text-center">
    <div className='Navbar'>
        <h1>Incentive Points</h1>
    </div>
        <div className='Navbar'>
            <img src={points} className="h-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"></img>
            <div className="flex flex-col w-1/4 gap-8 ">
              <p className="text-xl text-left"> Incentive Points is a front-end application that allows a user to set credentials for an api to get information for interactions on their Twitch channel. They can then set settings to their liking for how the widget looks and updates. The Primary use for this is to allow a user to track multiple interactions into a single point system.</p>
              <div className='flex justify-center'>
                <a href="https://github.com/ZackKoblenz/" className='justify-center'><img src={github} className="h-5"></img></a>
              </div>
            </div>
        </div>
    </div>
    <div className="projects w-full text-center">
      <div className='Navbar'>
        <h1>Bingo Generator</h1>
      </div>
        <div className='Navbar'>
            <img src={generator} className="h-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"></img>
            <div className=" flex flex-col w-1/4 gap-8 ">
                <p className="text-xl text-left"> Bingo Generator is a front-end application that allows a user to quickly turn a list of words into a JSON object or string for Bingo websites that need a specific type of input to generate a board.</p>
            <div className='flex justify-center'>
              <a href="https://github.com/ZackKoblenz/" className='justify-center'><img src={github} className="h-5"></img></a>
            </div>
          </div>
        </div>
    </div>
    <div className="projects w-full text-center">
      <div className='Navbar'>
        <h1>King of the Hill Tracker</h1>
      </div>
        <div className='Navbar'>
            <img src={koth} className="h-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"></img>
            <div className=" flex flex-col w-1/4 gap-8  ">
                <p className="text-xl text-left"> King of the Hill Tracker is a work in progress full stack application that would allow a user to sign in with twitch and assign a channel point redemption to be tracked as a king of the hill reward. Redeemers would be tracked on a leaderboard for how long they held the reward total, what the longest single streak was, and how many time's they've been the King of the Hill.</p>
              <div className='flex justify-center'>
                <a href="https://github.com/ZackKoblenz/" className='justify-center'><img src={github} className="h-5"></img></a>
              </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Projects
