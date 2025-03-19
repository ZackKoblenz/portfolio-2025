import React from 'react'
import pfp from '../assets/pfp.jpeg'
import jslogo from '../assets/jslogo.webp'
import reactlogo from '../assets/react.png'
import angular from '../assets/angular.png'

function Technologies() {
  return (
<div className="hero bg-inherit h-96">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={jslogo}
      className="rounded-lg w-xs shadow-2xl bg-black" />
      <div className="flex items-center justify-center content-center rounded-lg w-xs h-[320px] shadow-2xl bg-black">
        <img
        src={reactlogo}
        className="" />
      </div>
      <div className="rounded-lg w-xs h-[320px] shadow-2xl bg-black">
        <img
        src={angular}
        className="object-center" />
      </div>
    <div>
    </div>
  </div>
  
</div>
  )
}

export default Technologies
