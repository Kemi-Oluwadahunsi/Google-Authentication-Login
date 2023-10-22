import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
    
    <div className='grid p-4'>
         <button className=' place-self-end text-gray-300 bg-stone-950 py-3 px-5 rounded-md '><Link to = "/register">Sign Up</Link></button>

       <h2 className=' mt-60 mx-auto p-10   bg-gray-800  lg:text-5xl sm:text-sm text-white   font-extrabold'>TECHSTERSVERSE AUTHENTICATION PAGE</h2>
            
      </div>
    
    </>
  )
}

export default Homepage