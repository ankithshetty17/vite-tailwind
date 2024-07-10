import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Darkmode from './darkmode';
import { IoMdArrowDropdown } from "react-icons/io";
import { data } from 'autoprefixer';

const Menu= [
  {
    id:1,
    name:"Home",
    Link:"/#"
  },
  {
    id:2,
    name:"Top Rated",
    Link:"/#"
  },
  {
    id:3,
    name:"Kids Wear",
    Link:"/#"
  },
  {
    id:4,
    name:"Mens Wear",
    Link:"/#"
  },
  {
    id:5,
    name:"Electronics",
    Link:"/#"
  },
]

const DropDownLinks=[
  {
    id:1,
    name:"Top Rated",
    link:"/#"
  },
  {
    id:2,
    name:"Best Selling",
    link:"/#"
  },
  {
    id:3,
    name:"Top Wear",
    link:"/#"
  },
]
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
          focus:outline-none focus:border-1 focus:primary dark:bg-gray-800 dark:border-gray-500'/>
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
       <div className='flex justify-center items-center '>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data)=>(
          <li key={data.id}>
          <a  href={data.Link} className='inline-block px-4 hover:text-primary duration-200'>
          {data.name}
          </a>
          </li>
          ))}
          <li className='group relative cursor-wait'>
            <a href='' className='flex items-center gap-[2px] py-2'>
              Trending
              <span>
                <IoMdArrowDropdown className='transition-all duration-200
                group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[99999] p-2 hidden
            group-hover:block text-black bg-white w-[150px] rounded-md shadow-md'>
              <ul>
                {DropDownLinks.map((data)=>(
                <li key={data.id}>
                  <a className='inline-block rounded-full p-2 w-full
                     hover:bg-primary/20'
                  href={data.link}>{data.name}
                  </a>
                </li>
                  ))}
              </ul>
            </div>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar