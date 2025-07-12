import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <>
    <nav className='flex justify-end items-end p-4 flex-row font-poppins bg-gray-300 text-teal-900 text-[18px]'>
  <div className="flex items-center gap-7 mr-10 ml-10">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">
      <img src="/pfp.png" alt="profile" className='w-10 h-10 rounded-full' />
    </Link>
  </div>
</nav>
    </>
  )
}

export default navbar