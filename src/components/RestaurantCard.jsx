import React from 'react'
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const RestaurantCard = ({restaurant}) => {
    const {name, cloudinaryImageId, avgRating, sla: {slaString}, cuisines, locality, id} = restaurant?.info;
  return (
    <Link to={`/restaurant/${id}`} className='flex flex-col gap-2 w-60 h-72 cursor-pointer m-4'>
        <div className='flex-1 overflow-hidden rounded-3xl'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt='restaurant image' className='w-full h-full object-cover'/>
        </div>
        <div className='flex-1 flex flex-col gap-1'>
            <h2 className='font-bold text-lg'>{name}</h2>
            <h3 className='font-semibold text-lg flex items-center gap-1'><MdStars size={25} color='green' /> {avgRating} <GoDotFill size={25} /> {slaString}</h3>
            <p className='text-gray-700 dark:text-white'>{cuisines.join(', ').length > 30 ? cuisines.join(', ').slice(0, 30) + " ..." : cuisines.join(', ')}</p>
            <p className='text-gray-700 dark:text-white'>{locality}</p>
        </div>
    </Link>
  )
}

export default RestaurantCard