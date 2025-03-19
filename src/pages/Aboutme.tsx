import React from 'react'
import pfp from '../assets/pfp.jpeg'

function Aboutme() {
  return (
<div className="hero bg-inherit h-96">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={pfp}
      className="rounded-lg w-xs shadow-2xl" />
    <div>
      <h1 className="text-6xl font-bold">Zack Koblenz</h1>
      <h2 className="py-6">
        Web Developer | Education - LaunchCode | Location - St. Louis
      </h2>
      <p>
        I learning full-stack web development in 2022 through LaunchCode. 
      </p>
      <p>I've always been interested in computers, coding and technology, so learning web-dev was right up my alley!</p>
      <p>I love learning and growing, so any opportunity I get to ask questions and dig deeper into new topics is a great day for me.</p>
    </div>
  </div>
</div>
  )
}

export default Aboutme
