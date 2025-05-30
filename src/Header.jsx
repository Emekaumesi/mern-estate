import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'



const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-green-500'>Elexy </span>
            
            <span className='text-purple-800'>Properties</span>
        </h1>
        </Link>
      <form className='bg-slate-200 rounded-lg flex items-center px-3 py-2'>
        <input type='search' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 placeholder-gray'/> 
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex items-center space-x-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/signin'>
        <li className=' text-slate-700 hover:underline'>Sign In</li>
        </Link>
        <Link to='/signup'>
        <li className=' text-slate-700 hover:underline'>Sign Up</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

export default Header
