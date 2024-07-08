import React from 'react'
import LightButton  from '../assets/light-mode-button.png'
import DarkButton  from '../assets/dark-mode-button.png'

function Darkmode() {
  return (
    <div className='relative'>
     <img src={LightButton} alt=''
     className='w-12 cursor-pointer transition-all duration-300 
     drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]
     absolute right-0 z-10'/>

<img src={DarkButton} alt=''
     className='w-12 cursor-pointer transition-all duration-300 
     drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]'/>
    </div>
  )
}

export default Darkmode