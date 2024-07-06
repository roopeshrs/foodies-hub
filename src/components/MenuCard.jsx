import React from 'react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { addItem } from '../store/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const MenuCard = ({menuItem}) => {
    const {id, name, defaultPrice, finalPrice, price, description, imageId} = menuItem?.card?.info;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(menuItem));
        toast.success("Item added to cart");
    }
  return (
    <div className='flex md:flex-col justify-between w-4/5 border-b'>
        <div className='flex flex-col gap-2 p-4 flex-1'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <h4 className='text-lg font-bold flex items-center gap-1'><MdOutlineCurrencyRupee size={20} /> {defaultPrice ? defaultPrice / 100 : (finalPrice ? finalPrice / 100 : price / 100)}</h4>
            <p className='text-md text-gray-800 dark:text-white'>{description}</p>
        </div>
        <div className='w-60 p-4 relative'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`} alt='menu item image' className='w-full h-full object-cover'/>
            <button onClick={handleAddToCart} className='bg-white text-green-800 py-1 px-4 hover:bg-slate-400 cursor-pointer w-fit uppercase rounded-sm shadow-md absolute bottom-2 left-1/2 -translate-x-1/2 font-semibold'>add</button>
        </div>
    </div>
  )
}

export default MenuCard