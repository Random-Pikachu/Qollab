import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <>
    <nav>
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    </nav>
    </>
  )
}

export default navbar