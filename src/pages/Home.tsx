import React, { useState, useEffect, useRef } from 'react'
import Projects from './Projects'
import kobot from '../assets/kobot.png'
import points from '../assets/incentive points.png'
import generator from '../assets/bingo generator.png'
import koth from '../assets/koth tracker.png'
import AppearingElement from '../components/AppearingElement copy'
import DisappearingElement from '../components/DisappearingElement'
import Progress from '../components/Progress'
import Aboutme from './Aboutme'
import Technologies from './Technologies'

function Home() {
return (
    <>
        <DisappearingElement children={<Progress />} />
        
        <AppearingElement children={<Aboutme />} />
        <AppearingElement children={<Technologies />} />
        <AppearingElement children={<Projects />} />
        
        <br></br>
        <br></br>
        <br></br>
    </>  
  )
}

export default Home
