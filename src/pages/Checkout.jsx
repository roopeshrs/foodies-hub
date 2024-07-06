import React, {useRef} from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
    const total = useSelector(state => state.cart.total);
    const navigate = useNavigate();
    const textareaRef = useRef(null);
    const handlePayment = () => {
        if (!textareaRef.current.value.trim()) {
            toast.error("Shipping address required");
            return;
        }
        navigate('/success');
    }
  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
        <div className='flex flex-col gap-2 p-8'>
            <p onClick={()=>navigate(-1)} className='underline cursor-pointer'>back to cart</p>
            <h3 className='text-xl font-semibold'>Shipping Address</h3>
            <textarea 
                ref={textareaRef}
                className='p-4 border border-gray-300 outline-0 rounded-lg resize-none h-30 dark:text-white'
                placeholder='Enter your shipping address...'
                value='Mahatma Gandhi Rd, near Cubbon Road, Shivaji Nagar, Bengaluru, Karnataka 560001'
                disabled
            />
            <h2 className='text-3xl font-semibold uppercase flex items-center gap-2 mt-4'>Total <FaArrowRight size={25} /> <MdOutlineCurrencyRupee size={25} /> <span className='font-bold'>{total}</span></h2>
            <div onClick={handlePayment} className='bg-green-700 py-2 px-8 text-white rounded-md hover:bg-green-600 cursor-pointer w-fit uppercase mt-2'>pay</div>
        </div>
    </div>
  )
}

export default Checkout