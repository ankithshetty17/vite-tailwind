import React from 'react'
import Logo from '../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Darkmode from './darkmode';

function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white
    duration-200  relative z-40'>
        {/* uppernavbar */}
        <div className='bg-primary/40  py-2 '>
        <div className='container flex justify-between items-center'>
            <a href='#' className='flex font-bold text-2xl sm:text-3xl gap-2'>
                <img src={Logo} alt='Logo' className='w-10'/>
                Shopsy
            </a>
        {/* SearchBar */}
        <div className='flex gap-4 justify-between items-center'>
        <div className='group relative hidden sm:block'>
          <input type='text' placeholder='search'
          className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
          duration-300 border border-gray-300 rounded-full px-2 py-1
          focus:outline-none focus:border-1 focus:primary'/>
         <IoMdSearch className='text-gray-500 group-hover:text-primary absolute
         top-1/2 right-3 -translate-y-1/2'/>
        </div>
      
       {/* Buttons */}
       <button onClick={()=>alert('Ordering Not Available Yet')}
       className='bg-gradient-to-r from-primary to-secondary text-white rounded-full
       transition-all duration-200 flex items-center justify-center gap-3 group py-1 px-4'>
        <span className='hidden group-hover:block transition-all duration-200'>Order</span>
        <FaShoppingCart className='text-white text-3xl drop-shadow-sm cursor-pointer'/>
       </button>
  {/* Darkmode button */}
       <div>
        <Darkmode/>
       </div>
         
        </div>
        </div>
        </div>
        {/* LowerNavbar */}
       <div>

       </div>
    </div>
  )
}

export default Navbar