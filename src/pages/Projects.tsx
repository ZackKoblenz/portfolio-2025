import React from 'react'
import logo from '../assets/logo.png'
import kobot from '../assets/kobot.png'
import points from '../assets/incentive points.png'
import generator from '../assets/bingo generator.png'
import koth from '../assets/koth tracker.png'
import github from '../assets/github-mark-white.svg'
import dogpark from '../assets/dog park.png'
import corecraft from '../assets/corecraft.png'


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
                <ul className='points'>
                  <li>
                  Allows for users to sign in with Twitch and create custom commands for their Twitch chat
                  </li>
                  <li>
                  This website serves twitch streamers that want the ability to allow whitelisted users to switch between moderator status, vip status, and normal viewer status.
                  </li>
                  <li>
                  Created the backend Rest API in NodeJS with ExpressJS
                  </li>
                  <li>
                  Created with Javascript, HTML, CSS, ExpressJS, NodeJS, MySQL.
                  </li>
                </ul>
              <div className='flex justify-center'>
                <a href="https://github.com/ZackKoblenz/" className='justify-center'><img src={github} className="h-5"></img></a>
              </div>
            </div>
            
        </div>
        
    </div>
    <div className="projects w-full text-center ">
        <div className='Navbar'>
        <h1>Corecraft Website</h1>
        </div>
        <div className='Navbar'>
            <img src={corecraft} className="h-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"></img>
            <div className=" flex flex-col justify-center content-center w-1/4 gap-8 ">
                <ul className='points'>
                  <li>
                  Allows for users to stay up to date with members of a Content Creator Minecraft server
                  </li>
                  <li>
                  This website serves content related to Corecraft SMP to its audience in a clear and concise location and format
                  </li>
                  <li>
                  The main purpose of the website is to display information about Corecraft and show which members are livestreaming and all of their related YouTube content which is updated automatically using the YouTube API
                  </li>
                  <li>
                  Created with Typescript, React, HTML, Tailwind CSS, ExpressJS, MySQL.
                  </li>
                </ul>
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
              <ul className="points">
                <li>
                Designed UI for Web App built with vanilla JavaScript, HTML, and CSS. 
                </li>
                <li>
                Wrote the outline for all functionality and uses of the Web App.
                </li>
                <li>
                Utilized JavaScripts LocalStorage feature as a temporary way to store the data.
                </li>
              </ul>
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
    <div className="projects w-full text-center">
    <div className='Navbar'>
        <h1>Dog Park Website</h1>
    </div>
        <div className='Navbar'>
            <img src={dogpark} className="h-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"></img>
            <div className="flex flex-col w-1/4 gap-8 ">
              <ul className="points">
                <li>
                Allows for users to create an account, reserve time slots at a dog park, and create a profile for themselves and their pets.
                </li>
                <li>
                This website serves pet owners that want an indoor and private place to take their pets to play and exercise.
                </li>
                <li>
                Created the backend Rest API  in Java SpringBoot that Creates, Reads, Updates, and Deletes data for the website
                </li>
                <li>
                Initialized the frontend Angular JS CLI for the team to create UI components
                </li>
                <li>
                Wrote the navbar component for the user interface
                </li>
                <li>
                Created with AngularJS CLI, TypeScript, HTML, CSS, Java, SpringBoot, and MySQL.
                </li>
              </ul>
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
