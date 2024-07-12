import React from 'react'

function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
    justify-center items-center dark:text-white
    dark:bg-gray-950 duration-300 bg-gray-100'>
      {/* Background */}
      <div className='absolute h-[700px] w-[700px] bg-primary/40 right-0
      rounded-3xl rotate-45 -top-1/2 -z-9'>
      </div>
      {/* content */}
      <div className='container pb-8 sm:pb-0'>
      <div>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div>
      <h1 className='text-5xl  sm:text-6xl lg:text-7xl font-bold'> LoreIpsum </h1>
      <p className='text-sm '>eiruqwingninffggfh'fkf'hf gfgfdgg.
      hhddgddggettwttwtw'</p>
      <div>
        <button className='cursor-pointer bg-gradient-to-r from-primary
        to-secondary text-white rounded-full px-3 py-2 hover:scale-105 transition-all duration-300'>
          Order Now
        </button>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero