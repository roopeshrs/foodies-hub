import React from 'react'
import { Link } from 'react-router-dom';
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
      <div className='flex flex-col items-center justify-center gap-2 min-h-[80vh]'>
        <TbError404 size={150} />
        <h2 className='text-3xl'>Page not found</h2>
        <p>The page you are looking for doesn't exist.</p>
        <Link to='/'><button className='bg-[#FF0000] py-2 px-4 mt-2 text-white rounded-md hover:bg-[#ff3300]'>Search Restaurant</button></Link>
      </div>
    </div>
  )
}

export default NotFound