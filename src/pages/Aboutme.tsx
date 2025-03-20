import React from 'react'
import pfp from '../assets/pfp.jpeg'

function Aboutme() {
  return (
<div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-96">
  <div className="hero-content flex-col lg:flex-row">
    <a href="https://www.linkedin.com/in/zackkoblenz/">
    <img
      src={pfp}
      className="rounded-lg w-xs shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101" />
      </a>
    <div>
      <h1 className="text-6xl font-bold">Zack Koblenz</h1>
      <h3>Web Developer</h3>
      <h2 className="pb-6">
        Education - LaunchCode | Location - St. Louis
      </h2>
      <p>
        I started learning full-stack web development in 2022 through LaunchCode. 
      </p>
      <p>I've always been interested in computers, coding and technology, so learning web-dev was right up my alley!</p>
      <p>I love learning and growing, so any opportunity I get to ask questions and dig deeper into new topics is a great day for me.</p>
    </div>
  </div>
</div>
  )
}

export default Aboutme
