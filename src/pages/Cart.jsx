import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../components/CartCard'
import { clearCart } from '../store/reducers/cartSlice'
import { toast } from 'react-toastify'
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  }
  const handleCheckout = () => {
    if(!isLoggedIn){
      toast.error("Please log in to checkout");
      return;
    }
    navigate('/checkout');
  }
  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
      {
        cartItems?.length === 0 ? (
          <div className='max-w-96 min-h-[80vh] mx-auto flex flex-col items-center justify-center gap-8'>
            <div className='relative mt-20'>
              <img src='./shopping-cart.png' alt='cart' className='max-w-72 h-full object-cover' />
              <img src='./sad-smiely.png' alt='smiely' className='w-20 h-20 absolute top-0 left-1/2 -translate-x-3/4 -translate-y-3/4'/>
            </div>
            <div className='flex items-center gap-4'>
              <h3 className='text-3xl font-extralight'>Your cart is empty</h3>
              <Link to='/'><button className='bg-[#FF0000] py-2 px-4 text-white rounded-md hover:bg-[#ff3300]'>Order Food</button></Link>
            </div>
          </div>
        ) : (
          <div className='min-h-[80vh]'>
            <div className='flex flex-col gap-2 py-16'>
              {cartItems.map((item, index) => <CartCard key={index} item={item} />)}
              <div className='flex sm:flex-col items-center sm:items-start justify-between max-w-[75%] md:max-w-[90%]'>
                <div onClick={handleClearCart} className='bg-[#FF0000] py-2 px-4 text-white rounded-md hover:bg-[#ff3300] cursor-pointer w-fit m-4 uppercase'>clear cart</div>
                <div onClick={handleCheckout} className='bg-green-700 py-2 px-4 text-white rounded-md hover:bg-green-600 cursor-pointer w-fit m-4 uppercase flex items-center justify-between min-w-60'><span>to pay</span><span className='flex items-center gap-1'><MdOutlineCurrencyRupee /> {total}</span></div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart