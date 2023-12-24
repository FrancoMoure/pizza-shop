import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full' id='home'>
        <video 
            autoPlay 
            muted 
            loop
            className=' absolute top-[-150px] left-0 z-[1] w-full h-full object-cover'    
            >

            <source src='/pizza.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero