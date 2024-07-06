import React from 'react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../store/reducers/cartSlice';
import { toast } from 'react-toastify';

const CartCard = ({item}) => {
    const {card, quantity} = item;
    const {id, name, defaultPrice, finalPrice, price, imageId} = card?.info;
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeItem(id));
        toast.success("Item removed from cart");
    }
    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(id));
        toast.success("Item quantity increased");
    }
    const handleDecreaseQuantity = () => {
        if(quantity > 1){
            dispatch(decreaseQuantity(id));
            toast.success("Item quantity decreased");
        }
    }
  return (
    <div className='flex sm:flex-col items-center sm:items-start justify-between sm:gap-4 max-w-[75%] md:max-w-[90%] border-b p-4'>
        <div className='flex items-center gap-4'>
            <img className='w-12 h-12 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`} alt="food" />
            <h3 className='font-semibold'>{name?.length > 20 ? name?.slice(0, 20) + ' ...' : name }</h3>
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2 border-r pr-4'><FaCirclePlus onClick={handleIncreaseQuantity} size={25} className='cursor-pointer' /> <span className='font-medium'>{quantity}</span> {quantity > 1 && <FaCircleMinus onClick={handleDecreaseQuantity} size={25} className='cursor-pointer' />}</div>
            <h4 className='flex items-center gap-1 font-bold w-16'><MdOutlineCurrencyRupee size={15} /> {(defaultPrice ? defaultPrice / 100 : (finalPrice ? finalPrice / 100 : price / 100)) * quantity}</h4>
            <AiFillDelete onClick={handleRemoveFromCart} size={25} color='#FF0000' className='cursor-pointer' />
        </div>
    </div>
  )
}

export default CartCard